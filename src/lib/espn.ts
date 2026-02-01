// ESPN API Client for Live Scores
// These are unofficial but reliable ESPN public endpoints

export interface ESPNTeam {
  id: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  logo: string;
  color?: string;
}

export interface ESPNCompetitor {
  id: string;
  homeAway: 'home' | 'away';
  team: ESPNTeam;
  score: string;
  winner?: boolean;
  linescores?: { value: number; displayValue: string; period: number }[];
}

export interface ESPNStatus {
  clock: number;
  displayClock: string;
  period: number;
  type: {
    id: string;
    name: string;
    state: 'pre' | 'in' | 'post';
    completed: boolean;
    description: string;
    detail: string;
    shortDetail: string;
  };
}

export interface ESPNEvent {
  id: string;
  uid: string;
  date: string;
  name: string;
  shortName: string;
  competitions: {
    id: string;
    date: string;
    competitors: ESPNCompetitor[];
    status: ESPNStatus;
    venue?: {
      fullName: string;
      address?: { city: string; state?: string };
    };
  }[];
  status: ESPNStatus;
}

export interface ESPNScoreboardResponse {
  leagues: {
    id: string;
    name: string;
    abbreviation: string;
  }[];
  events: ESPNEvent[];
}

// Sport configuration for ESPN API
export const SPORT_CONFIG: Record<string, { path: string; league: string }> = {
  nfl: { path: 'football/nfl', league: 'NFL' },
  nba: { path: 'basketball/nba', league: 'NBA' },
  mlb: { path: 'baseball/mlb', league: 'MLB' },
  nhl: { path: 'hockey/nhl', league: 'NHL' },
  ncaaf: { path: 'football/college-football', league: 'NCAAF' },
  ncaab: { path: 'basketball/mens-college-basketball', league: 'NCAAB' },
  soccer: { path: 'soccer/eng.1', league: 'Premier League' },
  mma: { path: 'mma/ufc', league: 'UFC' },
};

// Normalized game data for our app
export interface NormalizedGame {
  id: string;
  sport: string;
  league: string;
  homeTeam: {
    id: string;
    name: string;
    shortName: string;
    abbreviation: string;
    logo: string;
    score: number | null;
    color?: string;
  };
  awayTeam: {
    id: string;
    name: string;
    shortName: string;
    abbreviation: string;
    logo: string;
    score: number | null;
    color?: string;
  };
  status: 'scheduled' | 'live' | 'final' | 'postponed' | 'cancelled' | 'halftime';
  startTime: string;
  clock: string;
  period: string;
  periodNumber: number;
  venue?: string;
  isLive: boolean;
  statusDetail: string;
}

// Map ESPN status to our simplified status
function mapStatus(espnStatus: ESPNStatus): NormalizedGame['status'] {
  const { state, name, description } = espnStatus.type;
  
  if (state === 'pre') return 'scheduled';
  if (state === 'post') {
    if (name.includes('POSTPONED')) return 'postponed';
    if (name.includes('CANCELED') || name.includes('CANCELLED')) return 'cancelled';
    return 'final';
  }
  if (state === 'in') {
    if (description.toLowerCase().includes('halftime') || description.toLowerCase().includes('half')) {
      return 'halftime';
    }
    return 'live';
  }
  return 'scheduled';
}

// Get period display text based on sport
function getPeriodDisplay(sport: string, period: number, status: ESPNStatus): string {
  const state = status.type.state;
  
  if (state === 'pre') return '';
  if (state === 'post') return status.type.shortDetail;
  
  const detail = status.type.detail || status.type.shortDetail;
  if (detail) return detail;
  
  switch (sport) {
    case 'nfl':
    case 'ncaaf':
      return `Q${period}`;
    case 'nba':
    case 'ncaab':
      return `Q${period}`;
    case 'nhl':
      if (period > 3) return 'OT';
      return `P${period}`;
    case 'mlb':
      return period <= 9 ? `${period}${getOrdinalSuffix(period)}` : `${period}th`;
    case 'soccer':
      return period === 1 ? '1st Half' : '2nd Half';
    case 'mma':
      return `R${period}`;
    default:
      return `P${period}`;
  }
}

function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

// Normalize ESPN event to our game format
function normalizeEvent(event: ESPNEvent, sport: string, league: string): NormalizedGame {
  const competition = event.competitions[0];
  const status = event.status || competition.status;
  
  const homeCompetitor = competition.competitors.find(c => c.homeAway === 'home');
  const awayCompetitor = competition.competitors.find(c => c.homeAway === 'away');
  
  if (!homeCompetitor || !awayCompetitor) {
    throw new Error('Missing competitors');
  }
  
  const gameStatus = mapStatus(status);
  
  return {
    id: event.id,
    sport,
    league,
    homeTeam: {
      id: homeCompetitor.team.id,
      name: homeCompetitor.team.displayName,
      shortName: homeCompetitor.team.shortDisplayName,
      abbreviation: homeCompetitor.team.abbreviation,
      logo: homeCompetitor.team.logo,
      score: homeCompetitor.score ? parseInt(homeCompetitor.score, 10) : null,
      color: homeCompetitor.team.color,
    },
    awayTeam: {
      id: awayCompetitor.team.id,
      name: awayCompetitor.team.displayName,
      shortName: awayCompetitor.team.shortDisplayName,
      abbreviation: awayCompetitor.team.abbreviation,
      logo: awayCompetitor.team.logo,
      score: awayCompetitor.score ? parseInt(awayCompetitor.score, 10) : null,
      color: awayCompetitor.team.color,
    },
    status: gameStatus,
    startTime: event.date,
    clock: status.displayClock || '',
    period: getPeriodDisplay(sport, status.period, status),
    periodNumber: status.period,
    venue: competition.venue?.fullName,
    isLive: gameStatus === 'live' || gameStatus === 'halftime',
    statusDetail: status.type.detail || status.type.shortDetail || '',
  };
}

// In-memory cache
const cache: Map<string, { data: NormalizedGame[]; timestamp: number }> = new Map();
const CACHE_TTL = 60 * 1000; // 60 seconds

// Fetch scores for a specific sport
export async function fetchScores(sport: string): Promise<NormalizedGame[]> {
  const config = SPORT_CONFIG[sport.toLowerCase()];
  if (!config) {
    throw new Error(`Unknown sport: ${sport}`);
  }
  
  const cacheKey = sport.toLowerCase();
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  
  const url = `https://site.api.espn.com/apis/site/v2/sports/${config.path}/scoreboard`;
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Next.js cache
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`ESPN API error: ${response.status}`);
    }
    
    const data: ESPNScoreboardResponse = await response.json();
    
    const games = data.events.map(event => 
      normalizeEvent(event, sport.toLowerCase(), config.league)
    );
    
    cache.set(cacheKey, { data: games, timestamp: Date.now() });
    
    return games;
  } catch (error) {
    console.error(`Error fetching ${sport} scores:`, error);
    
    // Return cached data if available, even if stale
    if (cached) {
      return cached.data;
    }
    
    return [];
  }
}

// Fetch all sports scores
export async function fetchAllScores(): Promise<NormalizedGame[]> {
  const sports = Object.keys(SPORT_CONFIG);
  
  const results = await Promise.allSettled(
    sports.map(sport => fetchScores(sport))
  );
  
  const allGames: NormalizedGame[] = [];
  
  for (const result of results) {
    if (result.status === 'fulfilled') {
      allGames.push(...result.value);
    }
  }
  
  // Sort: live games first, then by start time
  return allGames.sort((a, b) => {
    if (a.isLive && !b.isLive) return -1;
    if (!a.isLive && b.isLive) return 1;
    return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
  });
}

// Get only live games
export async function fetchLiveGames(): Promise<NormalizedGame[]> {
  const allGames = await fetchAllScores();
  return allGames.filter(game => game.isLive);
}
