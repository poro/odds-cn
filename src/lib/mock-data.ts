// Mock data for sports betting odds comparison site

export interface Sportsbook {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  bonusAmount: string;
  affiliateUrl: string;
  features: string[];
}

export interface OddsLine {
  sportsbook: string;
  spread: string;
  spreadOdds: number;
  moneyline: number;
  total: string;
  totalOdds: number;
}

export interface Game {
  id: string;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  startTime: string;
  status: 'upcoming' | 'live' | 'final';
  odds: OddsLine[];
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
}

export const sportsbooks: Sportsbook[] = [
  {
    id: 'draftkings',
    name: 'DraftKings',
    logo: '/sportsbooks/dk.svg',
    rating: 4.8,
    bonus: 'Bet $5, Get $150',
    bonusAmount: '$150',
    affiliateUrl: '#affiliate-draftkings',
    features: ['Live Streaming', 'Cash Out', 'Same Game Parlay', 'Dynasty Rewards']
  },
  {
    id: 'fanduel',
    name: 'FanDuel',
    logo: '/sportsbooks/fd.svg',
    rating: 4.7,
    bonus: 'Bet $5, Win $150',
    bonusAmount: '$150',
    affiliateUrl: '#affiliate-fanduel',
    features: ['Live Streaming', 'Early Cash Out', 'Parlay+', 'Odds Boosts']
  },
  {
    id: 'betmgm',
    name: 'BetMGM',
    logo: '/sportsbooks/mgm.svg',
    rating: 4.6,
    bonus: 'First Bet Up To $1,500',
    bonusAmount: '$1,500',
    affiliateUrl: '#affiliate-betmgm',
    features: ['MGM Rewards', 'Cash Out', 'Easy Parlay', 'Live Betting']
  },
  {
    id: 'caesars',
    name: 'Caesars',
    logo: '/sportsbooks/caesars.svg',
    rating: 4.5,
    bonus: 'First Bet On Caesars Up To $1,000',
    bonusAmount: '$1,000',
    affiliateUrl: '#affiliate-caesars',
    features: ['Caesars Rewards', 'Profit Boosts', 'Same Game Parlay', 'Live Streaming']
  },
  {
    id: 'pointsbet',
    name: 'PointsBet',
    logo: '/sportsbooks/pb.svg',
    rating: 4.3,
    bonus: '5x Second Chance Bets Up To $50',
    bonusAmount: '$250',
    affiliateUrl: '#affiliate-pointsbet',
    features: ['PointsBetting', 'Early Payout', 'Name a Bet', 'Karma Kommittee']
  },
  {
    id: 'bet365',
    name: 'Bet365',
    logo: '/sportsbooks/bet365.svg',
    rating: 4.7,
    bonus: 'Bet $1, Get $200 in Bonus Bets',
    bonusAmount: '$200',
    affiliateUrl: '#affiliate-bet365',
    features: ['Live Streaming', 'Cash Out', 'Bet Builder', 'Early Payout']
  }
];

export const games: Game[] = [
  // NFL Games
  {
    id: 'nfl-1',
    sport: 'football',
    league: 'NFL',
    homeTeam: 'Kansas City Chiefs',
    awayTeam: 'Buffalo Bills',
    startTime: '2025-01-26T18:30:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-3.5', spreadOdds: -110, moneyline: -175, total: 'O 48.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-3', spreadOdds: -115, moneyline: -170, total: 'O 48.5', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '-3.5', spreadOdds: -105, moneyline: -180, total: 'O 49', totalOdds: -110 },
      { sportsbook: 'Caesars', spread: '-3.5', spreadOdds: -110, moneyline: -175, total: 'O 48.5', totalOdds: -112 },
    ]
  },
  {
    id: 'nfl-2',
    sport: 'football',
    league: 'NFL',
    homeTeam: 'Philadelphia Eagles',
    awayTeam: 'Washington Commanders',
    startTime: '2025-01-26T15:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-6', spreadOdds: -110, moneyline: -275, total: 'O 45.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-6', spreadOdds: -108, moneyline: -280, total: 'O 45.5', totalOdds: -112 },
      { sportsbook: 'BetMGM', spread: '-5.5', spreadOdds: -115, moneyline: -265, total: 'O 46', totalOdds: -110 },
      { sportsbook: 'Caesars', spread: '-6', spreadOdds: -112, moneyline: -270, total: 'O 45.5', totalOdds: -110 },
    ]
  },
  // NBA Games
  {
    id: 'nba-1',
    sport: 'basketball',
    league: 'NBA',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Los Angeles Lakers',
    homeScore: 87,
    awayScore: 82,
    startTime: '2025-01-25T19:30:00Z',
    status: 'live',
    odds: [
      { sportsbook: 'DraftKings', spread: '-7.5', spreadOdds: -110, moneyline: -320, total: 'O 224.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-7', spreadOdds: -112, moneyline: -310, total: 'O 225', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '-7.5', spreadOdds: -108, moneyline: -325, total: 'O 224.5', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '-8', spreadOdds: -105, moneyline: -330, total: 'O 224', totalOdds: -110 },
    ]
  },
  {
    id: 'nba-2',
    sport: 'basketball',
    league: 'NBA',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Phoenix Suns',
    startTime: '2025-01-26T20:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-2.5', spreadOdds: -110, moneyline: -135, total: 'O 232.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-2.5', spreadOdds: -108, moneyline: -130, total: 'O 232', totalOdds: -112 },
      { sportsbook: 'BetMGM', spread: '-3', spreadOdds: -110, moneyline: -140, total: 'O 233', totalOdds: -110 },
      { sportsbook: 'Caesars', spread: '-2.5', spreadOdds: -112, moneyline: -135, total: 'O 232.5', totalOdds: -108 },
    ]
  },
  {
    id: 'nba-3',
    sport: 'basketball',
    league: 'NBA',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Denver Nuggets',
    startTime: '2025-01-26T17:30:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '+1.5', spreadOdds: -110, moneyline: +105, total: 'O 228.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '+1', spreadOdds: -108, moneyline: +100, total: 'O 228', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '+1.5', spreadOdds: -112, moneyline: +108, total: 'O 229', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '+2', spreadOdds: -105, moneyline: +110, total: 'O 228.5', totalOdds: -110 },
    ]
  },
  // Soccer Games
  {
    id: 'soccer-1',
    sport: 'soccer',
    league: 'Premier League',
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    startTime: '2025-01-26T16:30:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-0.5', spreadOdds: +105, moneyline: -125, total: 'O 3.5', totalOdds: +100 },
      { sportsbook: 'FanDuel', spread: '-0.5', spreadOdds: +100, moneyline: -130, total: 'O 3.5', totalOdds: -105 },
      { sportsbook: 'BetMGM', spread: '-0.5', spreadOdds: +102, moneyline: -120, total: 'O 3.5', totalOdds: +105 },
      { sportsbook: 'Bet365', spread: '-0.5', spreadOdds: +108, moneyline: -118, total: 'O 3.5', totalOdds: -102 },
    ]
  },
  {
    id: 'soccer-2',
    sport: 'soccer',
    league: 'La Liga',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    startTime: '2025-01-27T20:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: 'PK', spreadOdds: -102, moneyline: +135, total: 'O 2.5', totalOdds: -125 },
      { sportsbook: 'FanDuel', spread: 'PK', spreadOdds: -105, moneyline: +130, total: 'O 2.5', totalOdds: -130 },
      { sportsbook: 'BetMGM', spread: 'PK', spreadOdds: +100, moneyline: +140, total: 'O 2.5', totalOdds: -120 },
      { sportsbook: 'Bet365', spread: 'PK', spreadOdds: -100, moneyline: +138, total: 'O 2.5', totalOdds: -128 },
    ]
  },
  // NHL
  {
    id: 'nhl-1',
    sport: 'hockey',
    league: 'NHL',
    homeTeam: 'Edmonton Oilers',
    awayTeam: 'Toronto Maple Leafs',
    startTime: '2025-01-26T19:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-1.5', spreadOdds: +165, moneyline: -145, total: 'O 6.5', totalOdds: -115 },
      { sportsbook: 'FanDuel', spread: '-1.5', spreadOdds: +170, moneyline: -150, total: 'O 6.5', totalOdds: -110 },
      { sportsbook: 'BetMGM', spread: '-1.5', spreadOdds: +160, moneyline: -140, total: 'O 6.5', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '-1.5', spreadOdds: +168, moneyline: -148, total: 'O 6.5', totalOdds: -108 },
    ]
  },
  // MLB
  {
    id: 'mlb-1',
    sport: 'baseball',
    league: 'MLB',
    homeTeam: 'New York Yankees',
    awayTeam: 'Boston Red Sox',
    startTime: '2025-04-15T19:05:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-1.5', spreadOdds: +145, moneyline: -165, total: 'O 8.5', totalOdds: -105 },
      { sportsbook: 'FanDuel', spread: '-1.5', spreadOdds: +150, moneyline: -160, total: 'O 8.5', totalOdds: -110 },
      { sportsbook: 'BetMGM', spread: '-1.5', spreadOdds: +142, moneyline: -170, total: 'O 8.5', totalOdds: -108 },
      { sportsbook: 'Caesars', spread: '-1.5', spreadOdds: +148, moneyline: -162, total: 'O 8.5', totalOdds: -105 },
    ]
  },
];

export const guides: Guide[] = [
  {
    id: '1',
    title: 'Sports Betting 101: A Complete Beginner\'s Guide',
    slug: 'sports-betting-101',
    excerpt: 'Learn the fundamentals of sports betting, from understanding odds to placing your first bet.',
    category: 'Beginner'
  },
  {
    id: '2',
    title: 'How to Read Betting Odds: American, Decimal & Fractional',
    slug: 'how-to-read-odds',
    excerpt: 'Master all three odds formats used by sportsbooks worldwide.',
    category: 'Beginner'
  },
  {
    id: '3',
    title: 'Understanding Point Spreads',
    slug: 'point-spreads-explained',
    excerpt: 'Everything you need to know about betting against the spread.',
    category: 'Beginner'
  },
  {
    id: '4',
    title: 'Bankroll Management Strategies',
    slug: 'bankroll-management',
    excerpt: 'Protect your funds with proven bankroll management techniques.',
    category: 'Strategy'
  },
  {
    id: '5',
    title: 'Finding Value in Betting Lines',
    slug: 'finding-value-bets',
    excerpt: 'Learn how to identify when the odds are in your favor.',
    category: 'Strategy'
  },
  {
    id: '6',
    title: 'Live Betting Strategies That Work',
    slug: 'live-betting-strategies',
    excerpt: 'Advanced techniques for in-game betting success.',
    category: 'Advanced'
  },
  {
    id: '7',
    title: 'Parlay Betting: Risks and Rewards',
    slug: 'parlay-betting-guide',
    excerpt: 'When to use parlays and how to build winning combinations.',
    category: 'Strategy'
  },
  {
    id: '8',
    title: 'NFL Betting Guide',
    slug: 'nfl-betting-guide',
    excerpt: 'Comprehensive guide to betting on professional football.',
    category: 'Sport-Specific'
  },
];

export const sportCategories = [
  { id: 'nfl', name: 'NFL', icon: '🏈', league: 'NFL' },
  { id: 'nba', name: 'NBA', icon: '🏀', league: 'NBA' },
  { id: 'mlb', name: 'MLB', icon: '⚾', league: 'MLB' },
  { id: 'nhl', name: 'NHL', icon: '🏒', league: 'NHL' },
  { id: 'soccer', name: 'Soccer', icon: '⚽', league: 'Premier League' },
  { id: 'ncaaf', name: 'NCAAF', icon: '🏈', league: 'NCAAF' },
  { id: 'ncaab', name: 'NCAAB', icon: '🏀', league: 'NCAAB' },
  { id: 'mma', name: 'MMA/UFC', icon: '🥊', league: 'UFC' },
];
