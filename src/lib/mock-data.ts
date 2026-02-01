// Mock data for sports betting odds comparison site

export interface Sportsbook {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  bonusAmount: string;
  bonusCode?: string;
  affiliateUrl: string;
  features: string[];
  bestFor?: string;
  pros: string[];
  cons: string[];
  description: string;
  payoutSpeed: string;
  minDeposit: string;
  founded: string;
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
  sport?: string;
  readTime?: string;
}

export interface PromoOffer {
  id: string;
  sportsbook: string;
  title: string;
  description: string;
  code?: string;
  expiry?: string;
  type: 'welcome' | 'ongoing' | 'exclusive';
}

export const sportsbooks: Sportsbook[] = [
  {
    id: 'draftkings',
    name: 'DraftKings',
    logo: '/sportsbooks/dk.svg',
    rating: 4.8,
    bonus: 'Bet $5, Get $150 in Bonus Bets',
    bonusAmount: '$150',
    bonusCode: 'ODDSCN',
    affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn',
    features: ['Live Streaming', 'Cash Out', 'Same Game Parlay', 'Dynasty Rewards'],
    bestFor: 'Best Overall',
    pros: [
      'Industry-leading mobile app',
      'Excellent same-game parlay builder',
      'Live streaming available',
      'Great for DFS players'
    ],
    cons: [
      'Odds not always the best',
      'Limited banking options in some states'
    ],
    description: 'DraftKings is the premier sports betting platform in the US, known for its exceptional mobile app, extensive betting markets, and innovative features like same-game parlays and live streaming.',
    payoutSpeed: '1-3 days',
    minDeposit: '$5',
    founded: '2012'
  },
  {
    id: 'fanduel',
    name: 'FanDuel',
    logo: '/sportsbooks/fd.svg',
    rating: 4.7,
    bonus: 'Bet $5, Win $200 in Bonus Bets',
    bonusAmount: '$200',
    bonusCode: 'ODDSCN200',
    affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn',
    features: ['Live Streaming', 'Early Cash Out', 'Parlay+', 'Odds Boosts'],
    bestFor: 'Best App',
    pros: [
      'Best user interface in the industry',
      'Daily odds boosts',
      'Fast payouts',
      'Excellent customer service'
    ],
    cons: [
      'Lower limits for winning players',
      'Promos not as generous as competitors'
    ],
    description: 'FanDuel offers the most user-friendly sports betting experience with an intuitive app, competitive odds, and excellent promotions. Their same-game parlay builder and daily boosts keep bettors coming back.',
    payoutSpeed: '1-2 days',
    minDeposit: '$10',
    founded: '2009'
  },
  {
    id: 'betmgm',
    name: 'BetMGM',
    logo: '/sportsbooks/mgm.svg',
    rating: 4.6,
    bonus: 'First Bet Up To $1,500 Paid Back',
    bonusAmount: '$1,500',
    bonusCode: 'ODDSCN1500',
    affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn',
    features: ['MGM Rewards', 'Cash Out', 'Easy Parlay', 'Live Betting'],
    bestFor: 'Best Bonus',
    pros: [
      'Massive welcome bonus',
      'MGM Rewards integration',
      'Wide variety of bet types',
      'Excellent for parlays'
    ],
    cons: [
      'App can be slow at times',
      'Lower odds on some markets'
    ],
    description: 'BetMGM brings the prestige of the MGM brand to online sports betting. With the largest welcome bonus in the industry and MGM Rewards integration, it\'s perfect for both casual bettors and high rollers.',
    payoutSpeed: '2-5 days',
    minDeposit: '$10',
    founded: '2018'
  },
  {
    id: 'caesars',
    name: 'Caesars Sportsbook',
    logo: '/sportsbooks/caesars.svg',
    rating: 4.5,
    bonus: 'First Bet On Caesars Up To $1,000',
    bonusAmount: '$1,000',
    bonusCode: 'ODDSCNFULL',
    affiliateUrl: 'https://sportsbook.caesars.com/?affiliate=oddscn',
    features: ['Caesars Rewards', 'Profit Boosts', 'Same Game Parlay', 'Live Streaming'],
    bestFor: 'Best Rewards',
    pros: [
      'Caesars Rewards program',
      'Generous ongoing promotions',
      'Free hotel stays and experiences',
      'Excellent odds on major events'
    ],
    cons: [
      'App interface could be better',
      'Slower payouts than competitors'
    ],
    description: 'Caesars Sportsbook combines world-class betting with the legendary Caesars Rewards program. Earn points on every bet and redeem them for hotel stays, dining, entertainment, and more.',
    payoutSpeed: '3-5 days',
    minDeposit: '$20',
    founded: '2021'
  },
  {
    id: 'pointsbet',
    name: 'PointsBet',
    logo: '/sportsbooks/pb.svg',
    rating: 4.3,
    bonus: '5x Second Chance Bets Up To $50 Each',
    bonusAmount: '$250',
    bonusCode: 'ODDSCN5X',
    affiliateUrl: 'https://pointsbet.com/?affiliate=oddscn',
    features: ['PointsBetting', 'Early Payout', 'Name a Bet', 'Karma Kommittee'],
    bestFor: 'Best for Live',
    pros: [
      'Unique PointsBetting feature',
      'Competitive odds',
      'Great live betting platform',
      'Excellent customer service'
    ],
    cons: [
      'Smaller market selection',
      'Less brand recognition'
    ],
    description: 'PointsBet stands out with its innovative PointsBetting feature where wins and losses scale based on outcome margins. It\'s perfect for bettors who want more action from their picks.',
    payoutSpeed: '1-3 days',
    minDeposit: '$5',
    founded: '2017'
  },
  {
    id: 'bet365',
    name: 'Bet365',
    logo: '/sportsbooks/bet365.svg',
    rating: 4.7,
    bonus: 'Bet $1, Get $200 in Bonus Bets',
    bonusAmount: '$200',
    bonusCode: 'ODDSCN365',
    affiliateUrl: 'https://bet365.com/?affiliate=oddscn',
    features: ['Live Streaming', 'Cash Out', 'Bet Builder', 'Early Payout'],
    bestFor: 'Best Odds',
    pros: [
      'Best odds in the industry',
      'Extensive live streaming',
      'Massive market selection',
      'Fast and reliable'
    ],
    cons: [
      'Limited US availability',
      'Stricter verification process'
    ],
    description: 'Bet365 is the world\'s largest online sportsbook, offering unmatched market depth, live streaming, and consistently competitive odds across all sports.',
    payoutSpeed: '1-3 days',
    minDeposit: '$10',
    founded: '2000'
  }
];

export const promos: PromoOffer[] = [
  {
    id: 'dk-welcome',
    sportsbook: 'DraftKings',
    title: 'Bet $5, Get $150 Instantly',
    description: 'New users get $150 in bonus bets when they place their first $5 bet',
    code: 'ODDSCN',
    type: 'welcome'
  },
  {
    id: 'fd-welcome',
    sportsbook: 'FanDuel',
    title: 'Bet $5, Win $200',
    description: 'Place a $5 bet on any market and receive $200 in bonus bets if it wins',
    code: 'ODDSCN200',
    type: 'welcome'
  },
  {
    id: 'mgm-welcome',
    sportsbook: 'BetMGM',
    title: '$1,500 First Bet Insurance',
    description: 'If your first bet loses, get up to $1,500 back in bonus bets',
    code: 'ODDSCN1500',
    type: 'welcome'
  },
  {
    id: 'caesars-welcome',
    sportsbook: 'Caesars',
    title: '$1,000 First Bet on Caesars',
    description: 'Get your first bet matched up to $1,000 in bonus bets',
    code: 'ODDSCNFULL',
    type: 'welcome'
  },
  {
    id: 'dk-exclusive',
    sportsbook: 'DraftKings',
    title: '25% Profit Boost',
    description: 'Exclusive Odds.cn boost on any 3+ leg parlay this weekend',
    code: 'CNBOOST25',
    expiry: 'This Weekend',
    type: 'exclusive'
  },
  {
    id: 'fd-ongoing',
    sportsbook: 'FanDuel',
    title: 'No Sweat Same Game Parlay',
    description: 'Get your stake back as bonus bets if your SGP loses by one leg',
    type: 'ongoing'
  },
  {
    id: 'mgm-ongoing',
    sportsbook: 'BetMGM',
    title: 'One Game Parlay Insurance',
    description: 'If one leg of your parlay loses, get up to $25 back',
    type: 'ongoing'
  },
  {
    id: 'bet365-exclusive',
    sportsbook: 'Bet365',
    title: 'Early Payout Offer',
    description: 'Get paid out if your team goes 2 goals ahead - even if they lose!',
    type: 'ongoing'
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
      { sportsbook: 'Bet365', spread: '-3', spreadOdds: -108, moneyline: -168, total: 'O 48.5', totalOdds: -105 },
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
      { sportsbook: 'Bet365', spread: '-5.5', spreadOdds: -110, moneyline: -260, total: 'O 46', totalOdds: -108 },
    ]
  },
  {
    id: 'nfl-3',
    sport: 'football',
    league: 'NFL',
    homeTeam: 'Detroit Lions',
    awayTeam: 'Tampa Bay Buccaneers',
    startTime: '2025-01-26T13:00:00Z',
    status: 'live',
    homeScore: 21,
    awayScore: 17,
    odds: [
      { sportsbook: 'DraftKings', spread: '-4.5', spreadOdds: -115, moneyline: -210, total: 'O 52.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-4', spreadOdds: -110, moneyline: -205, total: 'O 52', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '-4.5', spreadOdds: -110, moneyline: -215, total: 'O 52.5', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '-4.5', spreadOdds: -108, moneyline: -200, total: 'O 52', totalOdds: -110 },
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
      { sportsbook: 'Bet365', spread: '-7', spreadOdds: -105, moneyline: -305, total: 'O 225', totalOdds: -105 },
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
      { sportsbook: 'Bet365', spread: '-2', spreadOdds: -108, moneyline: -125, total: 'O 232', totalOdds: -108 },
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
      { sportsbook: 'Bet365', spread: '+2', spreadOdds: -102, moneyline: +115, total: 'O 228', totalOdds: -105 },
    ]
  },
  {
    id: 'nba-4',
    sport: 'basketball',
    league: 'NBA',
    homeTeam: 'Miami Heat',
    awayTeam: 'New York Knicks',
    startTime: '2025-01-26T19:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '+3.5', spreadOdds: -108, moneyline: +140, total: 'O 215.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '+3', spreadOdds: -110, moneyline: +135, total: 'O 216', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '+3.5', spreadOdds: -110, moneyline: +145, total: 'O 215', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '+3', spreadOdds: -112, moneyline: +138, total: 'O 215.5', totalOdds: -110 },
    ]
  },
  {
    id: 'nba-5',
    sport: 'basketball',
    league: 'NBA',
    homeTeam: 'Dallas Mavericks',
    awayTeam: 'Oklahoma City Thunder',
    startTime: '2025-01-26T21:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '+4', spreadOdds: -110, moneyline: +155, total: 'O 230.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '+4.5', spreadOdds: -108, moneyline: +160, total: 'O 231', totalOdds: -112 },
      { sportsbook: 'BetMGM', spread: '+4', spreadOdds: -112, moneyline: +150, total: 'O 230', totalOdds: -110 },
      { sportsbook: 'Caesars', spread: '+4.5', spreadOdds: -105, moneyline: +165, total: 'O 230.5', totalOdds: -108 },
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
  {
    id: 'soccer-3',
    sport: 'soccer',
    league: 'Premier League',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    startTime: '2025-01-26T14:00:00Z',
    status: 'live',
    homeScore: 2,
    awayScore: 1,
    odds: [
      { sportsbook: 'DraftKings', spread: '-0.5', spreadOdds: -115, moneyline: -140, total: 'O 3.5', totalOdds: +105 },
      { sportsbook: 'FanDuel', spread: '-0.5', spreadOdds: -110, moneyline: -135, total: 'O 3.5', totalOdds: +100 },
      { sportsbook: 'Bet365', spread: '-0.5', spreadOdds: -108, moneyline: -130, total: 'O 3.5', totalOdds: +108 },
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
  {
    id: 'nhl-2',
    sport: 'hockey',
    league: 'NHL',
    homeTeam: 'Vegas Golden Knights',
    awayTeam: 'Colorado Avalanche',
    startTime: '2025-01-26T22:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-1.5', spreadOdds: +155, moneyline: -135, total: 'O 6', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-1.5', spreadOdds: +160, moneyline: -130, total: 'O 6', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '-1.5', spreadOdds: +150, moneyline: -140, total: 'O 6', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '-1.5', spreadOdds: +158, moneyline: -132, total: 'O 6', totalOdds: -110 },
    ]
  },
  {
    id: 'nhl-3',
    sport: 'hockey',
    league: 'NHL',
    homeTeam: 'New York Rangers',
    awayTeam: 'Boston Bruins',
    startTime: '2025-01-26T17:00:00Z',
    status: 'live',
    homeScore: 3,
    awayScore: 2,
    odds: [
      { sportsbook: 'DraftKings', spread: '-1.5', spreadOdds: +145, moneyline: -125, total: 'O 5.5', totalOdds: -105 },
      { sportsbook: 'FanDuel', spread: '-1.5', spreadOdds: +150, moneyline: -120, total: 'O 5.5', totalOdds: -110 },
      { sportsbook: 'BetMGM', spread: '-1.5', spreadOdds: +142, moneyline: -128, total: 'O 5.5', totalOdds: -108 },
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
  {
    id: 'mlb-2',
    sport: 'baseball',
    league: 'MLB',
    homeTeam: 'Los Angeles Dodgers',
    awayTeam: 'San Francisco Giants',
    startTime: '2025-04-15T22:10:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-1.5', spreadOdds: +125, moneyline: -185, total: 'O 9', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-1.5', spreadOdds: +130, moneyline: -180, total: 'O 9', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '-1.5', spreadOdds: +120, moneyline: -190, total: 'O 8.5', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '-1.5', spreadOdds: +128, moneyline: -182, total: 'O 9', totalOdds: -110 },
    ]
  },
  // NCAAF
  {
    id: 'ncaaf-1',
    sport: 'football',
    league: 'NCAAF',
    homeTeam: 'Ohio State',
    awayTeam: 'Michigan',
    startTime: '2025-11-29T12:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-6.5', spreadOdds: -110, moneyline: -245, total: 'O 44.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-6', spreadOdds: -112, moneyline: -240, total: 'O 44', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '-6.5', spreadOdds: -108, moneyline: -250, total: 'O 44.5', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '-6.5', spreadOdds: -110, moneyline: -242, total: 'O 44', totalOdds: -110 },
    ]
  },
  // NCAAB
  {
    id: 'ncaab-1',
    sport: 'basketball',
    league: 'NCAAB',
    homeTeam: 'Duke',
    awayTeam: 'North Carolina',
    startTime: '2025-02-01T18:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-4.5', spreadOdds: -110, moneyline: -195, total: 'O 152.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-4', spreadOdds: -112, moneyline: -190, total: 'O 153', totalOdds: -108 },
      { sportsbook: 'BetMGM', spread: '-4.5', spreadOdds: -108, moneyline: -200, total: 'O 152', totalOdds: -112 },
      { sportsbook: 'Caesars', spread: '-4.5', spreadOdds: -110, moneyline: -192, total: 'O 152.5', totalOdds: -110 },
    ]
  },
  {
    id: 'ncaab-2',
    sport: 'basketball',
    league: 'NCAAB',
    homeTeam: 'Kansas',
    awayTeam: 'Kentucky',
    startTime: '2025-01-28T21:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: '-3', spreadOdds: -110, moneyline: -155, total: 'O 148.5', totalOdds: -110 },
      { sportsbook: 'FanDuel', spread: '-3.5', spreadOdds: -108, moneyline: -160, total: 'O 148', totalOdds: -112 },
      { sportsbook: 'BetMGM', spread: '-3', spreadOdds: -112, moneyline: -150, total: 'O 149', totalOdds: -110 },
      { sportsbook: 'Caesars', spread: '-3', spreadOdds: -110, moneyline: -152, total: 'O 148.5', totalOdds: -108 },
    ]
  },
  // UFC/MMA
  {
    id: 'ufc-1',
    sport: 'mma',
    league: 'UFC',
    homeTeam: 'Islam Makhachev',
    awayTeam: 'Dustin Poirier',
    startTime: '2025-02-08T22:00:00Z',
    status: 'upcoming',
    odds: [
      { sportsbook: 'DraftKings', spread: 'N/A', spreadOdds: 0, moneyline: -450, total: 'N/A', totalOdds: 0 },
      { sportsbook: 'FanDuel', spread: 'N/A', spreadOdds: 0, moneyline: -440, total: 'N/A', totalOdds: 0 },
      { sportsbook: 'BetMGM', spread: 'N/A', spreadOdds: 0, moneyline: -460, total: 'N/A', totalOdds: 0 },
      { sportsbook: 'Caesars', spread: 'N/A', spreadOdds: 0, moneyline: -445, total: 'N/A', totalOdds: 0 },
    ]
  },
];

export const guides: Guide[] = [
  {
    id: '1',
    title: 'Sports Betting 101: A Complete Beginner\'s Guide',
    slug: 'sports-betting-101',
    excerpt: 'Learn the fundamentals of sports betting, from understanding odds to placing your first bet.',
    category: 'Beginner',
    readTime: '12 min'
  },
  {
    id: '2',
    title: 'How to Read Betting Odds: American, Decimal & Fractional',
    slug: 'how-to-read-odds',
    excerpt: 'Master all three odds formats used by sportsbooks worldwide.',
    category: 'Beginner',
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'Understanding Point Spreads',
    slug: 'point-spreads-explained',
    excerpt: 'Everything you need to know about betting against the spread.',
    category: 'Beginner',
    readTime: '6 min'
  },
  {
    id: '4',
    title: 'Bankroll Management Strategies',
    slug: 'bankroll-management',
    excerpt: 'Protect your funds with proven bankroll management techniques.',
    category: 'Strategy',
    readTime: '10 min'
  },
  {
    id: '5',
    title: 'Finding Value in Betting Lines',
    slug: 'finding-value-bets',
    excerpt: 'Learn how to identify when the odds are in your favor.',
    category: 'Strategy',
    readTime: '9 min'
  },
  {
    id: '6',
    title: 'Live Betting Strategies That Work',
    slug: 'live-betting-strategies',
    excerpt: 'Advanced techniques for in-game betting success.',
    category: 'Advanced',
    readTime: '11 min'
  },
  {
    id: '7',
    title: 'Parlay Betting: Risks and Rewards',
    slug: 'parlay-betting-guide',
    excerpt: 'When to use parlays and how to build winning combinations.',
    category: 'Strategy',
    readTime: '7 min'
  },
  {
    id: '8',
    title: 'NFL Betting Guide: Everything You Need to Know',
    slug: 'nfl-betting-guide',
    excerpt: 'Comprehensive guide to betting on professional football including key stats, trends, and strategies.',
    category: 'Sport-Specific',
    sport: 'NFL',
    readTime: '15 min'
  },
  {
    id: '9',
    title: 'NBA Betting Guide: Strategies for Basketball',
    slug: 'nba-betting-guide',
    excerpt: 'Master NBA betting with tips on totals, player props, and live betting.',
    category: 'Sport-Specific',
    sport: 'NBA',
    readTime: '14 min'
  },
  {
    id: '10',
    title: 'MLB Betting Guide: Baseball Betting Explained',
    slug: 'mlb-betting-guide',
    excerpt: 'Learn the nuances of betting on baseball including run lines and F5 bets.',
    category: 'Sport-Specific',
    sport: 'MLB',
    readTime: '13 min'
  },
  {
    id: '11',
    title: 'Soccer Betting Guide: How to Bet on Football',
    slug: 'soccer-betting-guide',
    excerpt: 'Everything you need to know about betting on soccer matches worldwide.',
    category: 'Sport-Specific',
    sport: 'Soccer',
    readTime: '12 min'
  },
  {
    id: '12',
    title: 'Understanding Moneylines',
    slug: 'moneylines-explained',
    excerpt: 'The simplest bet type explained - just pick the winner.',
    category: 'Beginner',
    readTime: '5 min'
  },
  {
    id: '13',
    title: 'Over/Under Totals Betting Guide',
    slug: 'over-under-betting',
    excerpt: 'How to bet on total points, runs, or goals in any game.',
    category: 'Beginner',
    readTime: '6 min'
  },
  {
    id: '14',
    title: 'Line Shopping: Why You Need Multiple Sportsbooks',
    slug: 'line-shopping-guide',
    excerpt: 'Save money and maximize value by comparing odds across books.',
    category: 'Strategy',
    readTime: '8 min'
  },
  {
    id: '15',
    title: 'Player Props Betting Strategies',
    slug: 'player-props-guide',
    excerpt: 'How to find value in player performance bets.',
    category: 'Advanced',
    readTime: '10 min'
  },
  // Super Bowl LX Guides
  {
    id: 'sb-1',
    title: 'Super Bowl LX Odds: Seahawks vs Patriots Complete Betting Guide',
    slug: 'super-bowl-lx-odds-seahawks-patriots',
    excerpt: 'Complete betting guide for Super Bowl LX featuring the Seattle Seahawks vs New England Patriots. Get the latest odds, picks, and predictions.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '12 min'
  },
  {
    id: 'sb-2',
    title: 'Super Bowl Prop Bets 2026: 50 Best Props to Bet',
    slug: 'super-bowl-prop-bets-2026',
    excerpt: 'The ultimate guide to Super Bowl prop bets. From player props to halftime show bets, we cover 50+ props with our expert picks.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '15 min'
  },
  {
    id: 'sb-3',
    title: 'Super Bowl MVP Odds and Best Bets 2026',
    slug: 'super-bowl-mvp-odds-2026',
    excerpt: 'Who will win Super Bowl MVP? Breaking down the MVP odds for Seahawks vs Patriots with analysis and value picks.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '8 min'
  },
  {
    id: 'sb-4',
    title: 'Super Bowl Squares: How to Play and Win',
    slug: 'super-bowl-squares-guide',
    excerpt: 'Complete guide to Super Bowl squares including rules, strategies, and the best numbers to pick.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '6 min'
  },
  {
    id: 'sb-5',
    title: 'Best Super Bowl Betting Promos and Bonuses 2026',
    slug: 'super-bowl-betting-promos-2026',
    excerpt: 'Claim over $5,000 in Super Bowl betting bonuses from DraftKings, FanDuel, BetMGM, and more. Exclusive promo codes inside.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '7 min'
  },
  {
    id: 'sb-6',
    title: 'Super Bowl Over/Under: Total Points Prediction',
    slug: 'super-bowl-over-under-total',
    excerpt: 'Should you bet the over or under in Super Bowl LX? Analysis of the total and our expert prediction.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '8 min'
  },
  {
    id: 'sb-7',
    title: 'Super Bowl Spread: Point Spread Analysis and Pick',
    slug: 'super-bowl-spread-analysis',
    excerpt: 'Breaking down the Super Bowl spread between the Seahawks and Patriots with statistical analysis and our ATS pick.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '9 min'
  },
  {
    id: 'sb-8',
    title: 'First Touchdown Scorer Odds: Super Bowl LX',
    slug: 'super-bowl-first-touchdown-scorer',
    excerpt: 'Who will score the first touchdown in Super Bowl LX? Complete odds breakdown and our best bet.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '7 min'
  },
  {
    id: 'sb-9',
    title: 'Super Bowl Halftime Show Props: Bad Bunny Bets',
    slug: 'super-bowl-halftime-show-props',
    excerpt: "Bet on Bad Bunny's halftime performance! First song, guest appearances, and more prop bets.",
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '6 min'
  },
  {
    id: 'sb-10',
    title: 'Super Bowl Commercial Props: Best Bets on Ads',
    slug: 'super-bowl-commercial-props',
    excerpt: 'The weirdest and most fun Super Bowl props - bet on commercials, the coin toss, Gatorade color, and more.',
    category: 'Super Bowl',
    sport: 'NFL',
    readTime: '5 min'
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

// Live scores mock data
export interface LiveScore {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  period: string;
  time: string;
  status: 'live' | 'halftime' | 'final';
}

export const liveScores: LiveScore[] = [
  {
    id: 'live-1',
    league: 'NBA',
    homeTeam: 'Celtics',
    awayTeam: 'Lakers',
    homeScore: 87,
    awayScore: 82,
    period: '3rd Quarter',
    time: '4:32',
    status: 'live'
  },
  {
    id: 'live-2',
    league: 'NFL',
    homeTeam: 'Lions',
    awayTeam: 'Buccaneers',
    homeScore: 21,
    awayScore: 17,
    period: '3rd Quarter',
    time: '8:15',
    status: 'live'
  },
  {
    id: 'live-3',
    league: 'NHL',
    homeTeam: 'Rangers',
    awayTeam: 'Bruins',
    homeScore: 3,
    awayScore: 2,
    period: '2nd Period',
    time: '12:45',
    status: 'live'
  },
  {
    id: 'live-4',
    league: 'EPL',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    period: '2nd Half',
    time: "65'",
    status: 'live'
  },
];
