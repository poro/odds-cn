// The Odds API client - https://the-odds-api.com
// Free tier: 500 requests/month
// Set ODDS_API_KEY env var to enable real odds data

const API_KEY = process.env.ODDS_API_KEY || '';
const BASE_URL = 'https://api.the-odds-api.com/v4';

// Sport keys mapping to our internal sport IDs
export const ODDS_SPORT_MAP: Record<string, string> = {
  nfl: 'americanfootball_nfl',
  nba: 'basketball_nba',
  mlb: 'baseball_mlb',
  nhl: 'icehockey_nhl',
  ncaaf: 'americanfootball_ncaaf',
  ncaab: 'basketball_ncaab',
  soccer: 'soccer_epl',
  mma: 'mma_mixed_martial_arts',
};

// Reverse mapping
const SPORT_KEY_TO_ID: Record<string, string> = Object.fromEntries(
  Object.entries(ODDS_SPORT_MAP).map(([k, v]) => [v, k])
);

const LEAGUE_NAMES: Record<string, string> = {
  nfl: 'NFL',
  nba: 'NBA',
  mlb: 'MLB',
  nhl: 'NHL',
  ncaaf: 'NCAAF',
  ncaab: 'NCAAB',
  soccer: 'Premier League',
  mma: 'UFC',
};

// Bookmaker key to display name
const BOOKMAKER_NAMES: Record<string, string> = {
  draftkings: 'DraftKings',
  fanduel: 'FanDuel',
  betmgm: 'BetMGM',
  williamhill_us: 'Caesars',
  pointsbetus: 'PointsBet',
  bet365: 'Bet365',
  bovada: 'Bovada',
  betonlineag: 'BetOnline',
  mybookieag: 'MyBookie',
  betrivers: 'BetRivers',
  unibet_us: 'Unibet',
  foxbet: 'FOX Bet',
  superbook: 'SuperBook',
  wynnbet: 'WynnBET',
  twinspires: 'TwinSpires',
  betus: 'BetUS',
  lowvig: 'LowVig',
  betfair: 'Betfair',
  pinnacle: 'Pinnacle',
};

// Target bookmakers we want to display (top US sportsbooks)
const TARGET_BOOKMAKERS = ['draftkings', 'fanduel', 'betmgm', 'williamhill_us', 'pointsbetus', 'bet365'];

export interface OddsGame {
  id: string;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
  status: 'upcoming' | 'live' | 'final';
  odds: {
    sportsbook: string;
    spread: string;
    spreadOdds: number;
    moneyline: number;
    total: string;
    totalOdds: number;
  }[];
}

interface ApiOddsEvent {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: {
    key: string;
    title: string;
    markets: {
      key: string; // h2h, spreads, totals
      outcomes: {
        name: string;
        price: number;
        point?: number;
      }[];
    }[];
  }[];
}

// Convert decimal odds to American
function decimalToAmerican(decimal: number): number {
  if (decimal >= 2.0) {
    return Math.round((decimal - 1) * 100);
  } else {
    return Math.round(-100 / (decimal - 1));
  }
}

function normalizeEvent(event: ApiOddsEvent): OddsGame | null {
  const sportId = SPORT_KEY_TO_ID[event.sport_key];
  if (!sportId) return null;

  const now = new Date();
  const startTime = new Date(event.commence_time);
  const status: OddsGame['status'] = startTime > now ? 'upcoming' : 'upcoming'; // API doesn't give live status on free tier

  const odds: OddsGame['odds'] = [];

  for (const bookmaker of event.bookmakers) {
    if (!TARGET_BOOKMAKERS.includes(bookmaker.key)) continue;

    const displayName = BOOKMAKER_NAMES[bookmaker.key] || bookmaker.title;
    const h2h = bookmaker.markets.find(m => m.key === 'h2h');
    const spreads = bookmaker.markets.find(m => m.key === 'spreads');
    const totals = bookmaker.markets.find(m => m.key === 'totals');

    // Get home team moneyline
    const homeML = h2h?.outcomes.find(o => o.name === event.home_team);
    const moneyline = homeML ? decimalToAmerican(homeML.price) : 0;

    // Get home team spread
    const homeSpread = spreads?.outcomes.find(o => o.name === event.home_team);
    const spread = homeSpread?.point !== undefined ? (homeSpread.point > 0 ? `+${homeSpread.point}` : `${homeSpread.point}`) : 'N/A';
    const spreadOdds = homeSpread ? decimalToAmerican(homeSpread.price) : -110;

    // Get totals (over)
    const over = totals?.outcomes.find(o => o.name === 'Over');
    const total = over?.point !== undefined ? `O ${over.point}` : 'N/A';
    const totalOdds = over ? decimalToAmerican(over.price) : -110;

    odds.push({
      sportsbook: displayName,
      spread,
      spreadOdds,
      moneyline,
      total,
      totalOdds,
    });
  }

  if (odds.length === 0) return null;

  return {
    id: event.id,
    sport: sportId,
    league: LEAGUE_NAMES[sportId] || event.sport_title,
    homeTeam: event.home_team,
    awayTeam: event.away_team,
    startTime: event.commence_time,
    status,
    odds,
  };
}

// In-memory cache
const oddsCache: Map<string, { data: OddsGame[]; timestamp: number }> = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes (conserve API calls)

export async function fetchOdds(sport: string): Promise<OddsGame[]> {
  const sportKey = ODDS_SPORT_MAP[sport.toLowerCase()];
  if (!sportKey) return [];

  const cacheKey = sport.toLowerCase();
  const cached = oddsCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  if (!API_KEY) {
    return []; // No API key, return empty (fallback to mock)
  }

  try {
    const url = `${BASE_URL}/sports/${sportKey}/odds/?apiKey=${API_KEY}&regions=us&markets=h2h,spreads,totals&oddsFormat=decimal&bookmakers=${TARGET_BOOKMAKERS.join(',')}`;
    const response = await fetch(url, {
      next: { revalidate: 300 }, // 5 min Next.js cache
    });

    if (!response.ok) {
      console.error(`Odds API error: ${response.status} ${response.statusText}`);
      return cached?.data || [];
    }

    const events: ApiOddsEvent[] = await response.json();
    const games = events
      .map(normalizeEvent)
      .filter((g): g is OddsGame => g !== null)
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

    oddsCache.set(cacheKey, { data: games, timestamp: Date.now() });

    // Log remaining requests
    const remaining = response.headers.get('x-requests-remaining');
    const used = response.headers.get('x-requests-used');
    if (remaining) {
      console.log(`Odds API: ${used} used, ${remaining} remaining`);
    }

    return games;
  } catch (error) {
    console.error('Odds API fetch error:', error);
    return cached?.data || [];
  }
}

export async function fetchAllOdds(): Promise<OddsGame[]> {
  // Only fetch sports that are currently in season to conserve API calls
  const activeSports = ['nba', 'nhl', 'ncaab']; // Late Feb/March
  
  const results = await Promise.allSettled(
    activeSports.map(sport => fetchOdds(sport))
  );

  const allGames: OddsGame[] = [];
  for (const result of results) {
    if (result.status === 'fulfilled') {
      allGames.push(...result.value);
    }
  }

  return allGames.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
}

export function isOddsApiConfigured(): boolean {
  return !!API_KEY;
}
