// FIFA World Cup 2026 Data
// June 11 - July 19, 2026 | USA, Mexico, Canada | 48 Teams, 16 Host Cities
//
// ⚠️ Group draw is TBD. Using placeholder groups based on projected seedings.
// Update with official draw when available.

export interface WorldCupGroup {
  name: string;
  teams: { name: string; flag: string; fifaRanking: number; odds: string }[];
}

export interface WorldCupMatch {
  id: string;
  group: string;
  date: string;
  time: string;
  homeTeam: string;
  homeFlag: string;
  awayTeam: string;
  awayFlag: string;
  venue: string;
  city: string;
  odds: {
    sportsbook: string;
    homeML: string;
    draw: string;
    awayML: string;
    overUnder: string;
    overOdds: string;
    underOdds: string;
    bttsYes: string;
    bttsNo: string;
    affiliateUrl: string;
  }[];
}

export interface WorldCupOutrightOdds {
  team: string;
  flag: string;
  draftkings: string;
  fanduel: string;
  betmgm: string;
  caesars: string;
  pointsbet: string;
}

export interface WorldCupTopScorer {
  player: string;
  team: string;
  flag: string;
  odds: string;
  position: string;
}

export interface WorldCupPromo {
  id: string;
  sportsbook: string;
  title: string;
  bonus: string;
  description: string;
  code?: string;
  affiliateUrl: string;
  highlight?: boolean;
}

export const worldCupInfo = {
  name: 'FIFA World Cup 2026',
  startDate: '2026-06-11T00:00:00Z',
  endDate: '2026-07-19T00:00:00Z',
  teams: 48,
  groups: 12,
  hostCities: [
    { city: 'New York/New Jersey', venue: 'MetLife Stadium', country: 'USA' },
    { city: 'Los Angeles', venue: 'SoFi Stadium', country: 'USA' },
    { city: 'Dallas', venue: 'AT&T Stadium', country: 'USA' },
    { city: 'San Francisco', venue: "Levi's Stadium", country: 'USA' },
    { city: 'Miami', venue: 'Hard Rock Stadium', country: 'USA' },
    { city: 'Atlanta', venue: 'Mercedes-Benz Stadium', country: 'USA' },
    { city: 'Houston', venue: 'NRG Stadium', country: 'USA' },
    { city: 'Philadelphia', venue: 'Lincoln Financial Field', country: 'USA' },
    { city: 'Seattle', venue: 'Lumen Field', country: 'USA' },
    { city: 'Kansas City', venue: 'Arrowhead Stadium', country: 'USA' },
    { city: 'Boston', venue: 'Gillette Stadium', country: 'USA' },
    { city: 'Mexico City', venue: 'Estadio Azteca', country: 'Mexico' },
    { city: 'Guadalajara', venue: 'Estadio Akron', country: 'Mexico' },
    { city: 'Monterrey', venue: 'Estadio BBVA', country: 'Mexico' },
    { city: 'Toronto', venue: 'BMO Field', country: 'Canada' },
    { city: 'Vancouver', venue: 'BC Place', country: 'Canada' },
  ],
  final: { venue: 'MetLife Stadium', city: 'New York/New Jersey', date: '2026-07-19' },
};

// Placeholder groups — update when official draw is announced
export const worldCupGroups: WorldCupGroup[] = [
  {
    name: 'Group A',
    teams: [
      { name: 'USA', flag: '🇺🇸', fifaRanking: 11, odds: '-150' },
      { name: 'Netherlands', flag: '🇳🇱', fifaRanking: 7, odds: '+180' },
      { name: 'Senegal', flag: '🇸🇳', fifaRanking: 21, odds: '+600' },
      { name: 'New Zealand', flag: '🇳🇿', fifaRanking: 93, odds: '+2500' },
    ],
  },
  {
    name: 'Group B',
    teams: [
      { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', fifaRanking: 4, odds: '-200' },
      { name: 'Denmark', flag: '🇩🇰', fifaRanking: 19, odds: '+350' },
      { name: 'Japan', flag: '🇯🇵', fifaRanking: 15, odds: '+400' },
      { name: 'Peru', flag: '🇵🇪', fifaRanking: 32, odds: '+1200' },
    ],
  },
  {
    name: 'Group C',
    teams: [
      { name: 'Argentina', flag: '🇦🇷', fifaRanking: 1, odds: '-300' },
      { name: 'Mexico', flag: '🇲🇽', fifaRanking: 14, odds: '+450' },
      { name: 'Poland', flag: '🇵🇱', fifaRanking: 28, odds: '+600' },
      { name: 'Saudi Arabia', flag: '🇸🇦', fifaRanking: 56, odds: '+2000' },
    ],
  },
  {
    name: 'Group D',
    teams: [
      { name: 'France', flag: '🇫🇷', fifaRanking: 2, odds: '-250' },
      { name: 'Uruguay', flag: '🇺🇾', fifaRanking: 16, odds: '+400' },
      { name: 'South Korea', flag: '🇰🇷', fifaRanking: 22, odds: '+500' },
      { name: 'Canada', flag: '🇨🇦', fifaRanking: 40, odds: '+1500' },
    ],
  },
  {
    name: 'Group E',
    teams: [
      { name: 'Brazil', flag: '🇧🇷', fifaRanking: 5, odds: '-200' },
      { name: 'Nigeria', flag: '🇳🇬', fifaRanking: 36, odds: '+400' },
      { name: 'Serbia', flag: '🇷🇸', fifaRanking: 33, odds: '+450' },
      { name: 'Costa Rica', flag: '🇨🇷', fifaRanking: 48, odds: '+1800' },
    ],
  },
  {
    name: 'Group F',
    teams: [
      { name: 'Spain', flag: '🇪🇸', fifaRanking: 3, odds: '-250' },
      { name: 'Croatia', flag: '🇭🇷', fifaRanking: 10, odds: '+350' },
      { name: 'Morocco', flag: '🇲🇦', fifaRanking: 13, odds: '+400' },
      { name: 'Albania', flag: '🇦🇱', fifaRanking: 66, odds: '+2200' },
    ],
  },
  {
    name: 'Group G',
    teams: [
      { name: 'Germany', flag: '🇩🇪', fifaRanking: 6, odds: '-180' },
      { name: 'Colombia', flag: '🇨🇴', fifaRanking: 12, odds: '+300' },
      { name: 'Australia', flag: '🇦🇺', fifaRanking: 24, odds: '+550' },
      { name: 'Tunisia', flag: '🇹🇳', fifaRanking: 42, odds: '+1400' },
    ],
  },
  {
    name: 'Group H',
    teams: [
      { name: 'Portugal', flag: '🇵🇹', fifaRanking: 8, odds: '-200' },
      { name: 'Ghana', flag: '🇬🇭', fifaRanking: 44, odds: '+500' },
      { name: 'Ecuador', flag: '🇪🇨', fifaRanking: 29, odds: '+450' },
      { name: 'IR Iran', flag: '🇮🇷', fifaRanking: 20, odds: '+600' },
    ],
  },
  {
    name: 'Group I',
    teams: [
      { name: 'Belgium', flag: '🇧🇪', fifaRanking: 9, odds: '-150' },
      { name: 'Switzerland', flag: '🇨🇭', fifaRanking: 17, odds: '+300' },
      { name: 'Cameroon', flag: '🇨🇲', fifaRanking: 46, odds: '+700' },
      { name: 'Jamaica', flag: '🇯🇲', fifaRanking: 63, odds: '+2000' },
    ],
  },
  {
    name: 'Group J',
    teams: [
      { name: 'Italy', flag: '🇮🇹', fifaRanking: 18, odds: '-130' },
      { name: 'Chile', flag: '🇨🇱', fifaRanking: 34, odds: '+350' },
      { name: 'Egypt', flag: '🇪🇬', fifaRanking: 37, odds: '+500' },
      { name: 'China', flag: '🇨🇳', fifaRanking: 70, odds: '+2500' },
    ],
  },
  {
    name: 'Group K',
    teams: [
      { name: 'Netherlands', flag: '🇳🇱', fifaRanking: 7, odds: '-180' },
      { name: 'Ivory Coast', flag: '🇨🇮', fifaRanking: 38, odds: '+400' },
      { name: 'Paraguay', flag: '🇵🇾', fifaRanking: 50, odds: '+550' },
      { name: 'Honduras', flag: '🇭🇳', fifaRanking: 72, odds: '+2200' },
    ],
  },
  {
    name: 'Group L',
    teams: [
      { name: 'Japan', flag: '🇯🇵', fifaRanking: 15, odds: '-130' },
      { name: 'Ukraine', flag: '🇺🇦', fifaRanking: 23, odds: '+300' },
      { name: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', fifaRanking: 25, odds: '+400' },
      { name: 'Indonesia', flag: '🇮🇩', fifaRanking: 87, odds: '+3000' },
    ],
  },
];

// Outright winner odds — top 10 favorites
export const worldCupOutrightOdds: WorldCupOutrightOdds[] = [
  { team: 'Argentina', flag: '🇦🇷', draftkings: '+350', fanduel: '+375', betmgm: '+350', caesars: '+400', pointsbet: '+375' },
  { team: 'France', flag: '🇫🇷', draftkings: '+400', fanduel: '+400', betmgm: '+450', caesars: '+400', pointsbet: '+425' },
  { team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', draftkings: '+500', fanduel: '+550', betmgm: '+500', caesars: '+500', pointsbet: '+525' },
  { team: 'Spain', flag: '🇪🇸', draftkings: '+600', fanduel: '+600', betmgm: '+550', caesars: '+650', pointsbet: '+600' },
  { team: 'Brazil', flag: '🇧🇷', draftkings: '+650', fanduel: '+700', betmgm: '+650', caesars: '+700', pointsbet: '+675' },
  { team: 'Germany', flag: '🇩🇪', draftkings: '+900', fanduel: '+850', betmgm: '+900', caesars: '+900', pointsbet: '+875' },
  { team: 'Portugal', flag: '🇵🇹', draftkings: '+1000', fanduel: '+1000', betmgm: '+1100', caesars: '+1000', pointsbet: '+1000' },
  { team: 'Netherlands', flag: '🇳🇱', draftkings: '+1200', fanduel: '+1100', betmgm: '+1200', caesars: '+1200', pointsbet: '+1150' },
  { team: 'Belgium', flag: '🇧🇪', draftkings: '+1400', fanduel: '+1500', betmgm: '+1400', caesars: '+1400', pointsbet: '+1350' },
  { team: 'USA', flag: '🇺🇸', draftkings: '+1600', fanduel: '+1800', betmgm: '+1600', caesars: '+1500', pointsbet: '+1700' },
];

// Golden Boot (Top Scorer) odds
export const worldCupTopScorers: WorldCupTopScorer[] = [
  { player: 'Kylian Mbappé', team: 'France', flag: '🇫🇷', odds: '+600', position: 'FW' },
  { player: 'Erling Haaland', team: 'Norway', flag: '🇳🇴', odds: '+800', position: 'FW' },
  { player: 'Lionel Messi', team: 'Argentina', flag: '🇦🇷', odds: '+900', position: 'FW' },
  { player: 'Harry Kane', team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', odds: '+1000', position: 'FW' },
  { player: 'Vinícius Jr.', team: 'Brazil', flag: '🇧🇷', odds: '+1200', position: 'FW' },
  { player: 'Lamine Yamal', team: 'Spain', flag: '🇪🇸', odds: '+1400', position: 'FW' },
  { player: 'Julian Álvarez', team: 'Argentina', flag: '🇦🇷', odds: '+1600', position: 'FW' },
  { player: 'Bukayo Saka', team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', odds: '+1800', position: 'FW' },
  { player: 'Jamal Musiala', team: 'Germany', flag: '🇩🇪', odds: '+2000', position: 'MF' },
  { player: 'Christian Pulisic', team: 'USA', flag: '🇺🇸', odds: '+2500', position: 'FW' },
];

// Sportsbook promos for World Cup
export const worldCupPromos: WorldCupPromo[] = [
  {
    id: 'dk-wc',
    sportsbook: 'DraftKings',
    title: 'World Cup: Bet $5, Get $200 in Bonus Bets',
    bonus: '$200 in Bonus Bets',
    description: 'Bet $5 on any World Cup match and get $200 in bonus bets instantly — win or lose!',
    code: 'ODDSCN',
    affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn',
    highlight: true,
  },
  {
    id: 'fd-wc',
    sportsbook: 'FanDuel',
    title: 'World Cup Special: Bet $5, Win $200',
    bonus: '$200 if Your Bet Wins',
    description: 'Place a $5 World Cup bet. If it wins, get $200 in bonus bets on top of your winnings!',
    code: 'ODDSCN200',
    affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn',
    highlight: true,
  },
  {
    id: 'mgm-wc',
    sportsbook: 'BetMGM',
    title: '$1,500 First Bet for World Cup',
    bonus: 'Up to $1,500 Back',
    description: 'If your first World Cup bet loses, get up to $1,500 back in bonus bets. The biggest bonus available!',
    code: 'ODDSCN1500',
    affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn',
    highlight: true,
  },
  {
    id: 'caesars-wc',
    sportsbook: 'Caesars',
    title: '$1,000 World Cup First Bet',
    bonus: '$1,000 Bonus Bet',
    description: 'Place your first bet up to $1,000 on any World Cup match. If it loses, get your stake back as a bonus bet.',
    code: 'ODDSCNFULL',
    affiliateUrl: 'https://sportsbook.caesars.com/?affiliate=oddscn',
  },
  {
    id: 'pb-wc',
    sportsbook: 'PointsBet',
    title: 'PointsBet World Cup: 5x $100 Second Chance Bets',
    bonus: '5x $100 Second Chance Bets',
    description: 'Get 5 second-chance bets of up to $100 each to use on World Cup matches.',
    code: 'ODDSCN500',
    affiliateUrl: 'https://pointsbet.com/?affiliate=oddscn',
  },
];

// Sample group stage matches (first round of each group)
export const worldCupMatches: WorldCupMatch[] = [
  // Group A
  {
    id: 'a1', group: 'A', date: '2026-06-11', time: '8:00 PM ET',
    homeTeam: 'USA', homeFlag: '🇺🇸', awayTeam: 'New Zealand', awayFlag: '🇳🇿',
    venue: 'MetLife Stadium', city: 'New York/New Jersey',
    odds: [
      { sportsbook: 'DraftKings', homeML: '-280', draw: '+380', awayML: '+800', overUnder: '2.5', overOdds: '-140', underOdds: '+120', bttsYes: '+130', bttsNo: '-150', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '-275', draw: '+370', awayML: '+825', overUnder: '2.5', overOdds: '-135', underOdds: '+115', bttsYes: '+125', bttsNo: '-145', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '-290', draw: '+400', awayML: '+780', overUnder: '2.5', overOdds: '-130', underOdds: '+110', bttsYes: '+135', bttsNo: '-155', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
  {
    id: 'a2', group: 'A', date: '2026-06-11', time: '5:00 PM ET',
    homeTeam: 'Netherlands', homeFlag: '🇳🇱', awayTeam: 'Senegal', awayFlag: '🇸🇳',
    venue: 'SoFi Stadium', city: 'Los Angeles',
    odds: [
      { sportsbook: 'DraftKings', homeML: '-160', draw: '+260', awayML: '+450', overUnder: '2.5', overOdds: '-120', underOdds: '+100', bttsYes: '+110', bttsNo: '-130', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '-155', draw: '+255', awayML: '+460', overUnder: '2.5', overOdds: '-115', underOdds: '-105', bttsYes: '+105', bttsNo: '-125', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '-165', draw: '+270', awayML: '+440', overUnder: '2.5', overOdds: '-125', underOdds: '+105', bttsYes: '+115', bttsNo: '-135', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
  // Group B
  {
    id: 'b1', group: 'B', date: '2026-06-12', time: '2:00 PM ET',
    homeTeam: 'England', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayTeam: 'Peru', awayFlag: '🇵🇪',
    venue: 'AT&T Stadium', city: 'Dallas',
    odds: [
      { sportsbook: 'DraftKings', homeML: '-320', draw: '+420', awayML: '+900', overUnder: '2.5', overOdds: '-150', underOdds: '+130', bttsYes: '+140', bttsNo: '-160', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '-310', draw: '+410', awayML: '+920', overUnder: '2.5', overOdds: '-145', underOdds: '+125', bttsYes: '+135', bttsNo: '-155', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '-330', draw: '+430', awayML: '+880', overUnder: '2.5', overOdds: '-155', underOdds: '+135', bttsYes: '+145', bttsNo: '-165', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
  {
    id: 'b2', group: 'B', date: '2026-06-12', time: '5:00 PM ET',
    homeTeam: 'Denmark', homeFlag: '🇩🇰', awayTeam: 'Japan', awayFlag: '🇯🇵',
    venue: 'Hard Rock Stadium', city: 'Miami',
    odds: [
      { sportsbook: 'DraftKings', homeML: '+150', draw: '+220', awayML: '+200', overUnder: '2.5', overOdds: '-105', underOdds: '-115', bttsYes: '+100', bttsNo: '-120', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '+155', draw: '+215', awayML: '+195', overUnder: '2.5', overOdds: '-110', underOdds: '-110', bttsYes: '-105', bttsNo: '-115', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '+145', draw: '+225', awayML: '+210', overUnder: '2.5', overOdds: '-100', underOdds: '-120', bttsYes: '+105', bttsNo: '-125', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
  // Group C
  {
    id: 'c1', group: 'C', date: '2026-06-13', time: '5:00 PM ET',
    homeTeam: 'Argentina', homeFlag: '🇦🇷', awayTeam: 'Saudi Arabia', awayFlag: '🇸🇦',
    venue: 'Estadio Azteca', city: 'Mexico City',
    odds: [
      { sportsbook: 'DraftKings', homeML: '-450', draw: '+500', awayML: '+1200', overUnder: '2.5', overOdds: '-160', underOdds: '+140', bttsYes: '+160', bttsNo: '-180', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '-440', draw: '+480', awayML: '+1250', overUnder: '2.5', overOdds: '-155', underOdds: '+135', bttsYes: '+155', bttsNo: '-175', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '-460', draw: '+520', awayML: '+1100', overUnder: '2.5', overOdds: '-165', underOdds: '+145', bttsYes: '+165', bttsNo: '-185', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
  {
    id: 'c2', group: 'C', date: '2026-06-13', time: '8:00 PM ET',
    homeTeam: 'Mexico', homeFlag: '🇲🇽', awayTeam: 'Poland', awayFlag: '🇵🇱',
    venue: 'Estadio Azteca', city: 'Mexico City',
    odds: [
      { sportsbook: 'DraftKings', homeML: '+110', draw: '+230', awayML: '+260', overUnder: '2.5', overOdds: '-110', underOdds: '-110', bttsYes: '+100', bttsNo: '-120', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '+105', draw: '+225', awayML: '+265', overUnder: '2.5', overOdds: '-105', underOdds: '-115', bttsYes: '-105', bttsNo: '-115', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '+115', draw: '+235', awayML: '+250', overUnder: '2.5', overOdds: '-115', underOdds: '-105', bttsYes: '+105', bttsNo: '-125', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
  // Group D
  {
    id: 'd1', group: 'D', date: '2026-06-14', time: '2:00 PM ET',
    homeTeam: 'France', homeFlag: '🇫🇷', awayTeam: 'Canada', awayFlag: '🇨🇦',
    venue: 'BC Place', city: 'Vancouver',
    odds: [
      { sportsbook: 'DraftKings', homeML: '-350', draw: '+440', awayML: '+950', overUnder: '2.5', overOdds: '-145', underOdds: '+125', bttsYes: '+150', bttsNo: '-170', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '-340', draw: '+430', awayML: '+975', overUnder: '2.5', overOdds: '-140', underOdds: '+120', bttsYes: '+145', bttsNo: '-165', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '-360', draw: '+450', awayML: '+925', overUnder: '2.5', overOdds: '-150', underOdds: '+130', bttsYes: '+155', bttsNo: '-175', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
  {
    id: 'd2', group: 'D', date: '2026-06-14', time: '5:00 PM ET',
    homeTeam: 'Uruguay', homeFlag: '🇺🇾', awayTeam: 'South Korea', awayFlag: '🇰🇷',
    venue: 'Mercedes-Benz Stadium', city: 'Atlanta',
    odds: [
      { sportsbook: 'DraftKings', homeML: '+100', draw: '+230', awayML: '+280', overUnder: '2.5', overOdds: '-105', underOdds: '-115', bttsYes: '+100', bttsNo: '-120', affiliateUrl: 'https://sportsbook.draftkings.com/?affiliate=oddscn' },
      { sportsbook: 'FanDuel', homeML: '+105', draw: '+225', awayML: '+275', overUnder: '2.5', overOdds: '-110', underOdds: '-110', bttsYes: '-105', bttsNo: '-115', affiliateUrl: 'https://sportsbook.fanduel.com/?affiliate=oddscn' },
      { sportsbook: 'BetMGM', homeML: '-105', draw: '+235', awayML: '+290', overUnder: '2.5', overOdds: '-100', underOdds: '-120', bttsYes: '+105', bttsNo: '-125', affiliateUrl: 'https://sports.betmgm.com/?affiliate=oddscn' },
    ],
  },
];

// World Cup betting guides
export const worldCupGuides = [
  {
    id: 'wc-1',
    title: 'How to Bet on World Cup 2026: Complete Beginner\'s Guide',
    slug: 'how-to-bet-world-cup-2026',
    excerpt: 'Everything you need to know about betting on soccer — moneyline, draw, spreads, totals, props, and futures explained for World Cup 2026.',
    category: 'World Cup',
    sport: 'Soccer',
    readTime: '12 min',
  },
  {
    id: 'wc-2',
    title: 'Best World Cup 2026 Sportsbook Bonuses & Promos',
    slug: 'best-world-cup-sportsbook-bonuses',
    excerpt: 'Detailed comparison of sign-up promos from DraftKings, FanDuel, BetMGM, Caesars, and PointsBet. Find the best bonus for World Cup betting.',
    category: 'World Cup',
    sport: 'Soccer',
    readTime: '10 min',
  },
  {
    id: 'wc-3',
    title: 'World Cup Group Stage Betting Strategy',
    slug: 'world-cup-group-stage-betting-strategy',
    excerpt: 'How groups work in the expanded 48-team format, dead rubber matches, goal difference tiebreakers, and stacking strategies for the group stage.',
    category: 'World Cup',
    sport: 'Soccer',
    readTime: '14 min',
  },
];

// Guide content for World Cup articles
export const worldCupGuideContent: Record<string, { sections: { title: string; content: string }[] }> = {
  'how-to-bet-world-cup-2026': {
    sections: [
      {
        title: 'Soccer Betting Basics',
        content: `Soccer (football) betting works differently from American sports. Here are the key bet types you need to know for the World Cup:

**Three-Way Moneyline (1X2)**
Unlike American sports, soccer has THREE outcomes: Home Win (1), Draw (X), and Away Win (2). In group stage matches, draws are common — about 25% of World Cup group games end level.

**Asian Handicap**
Similar to point spreads but with half-goal lines. Example: Argentina -1.5 means they must win by 2+ goals. This eliminates the draw option.

**Over/Under (Totals)**
Bet on total goals in a match. World Cup group stage averages ~2.5 goals per game. The standard line is usually Over/Under 2.5 goals.

**Both Teams to Score (BTTS)**
A simple yes/no bet on whether both teams will score at least one goal.`
      },
      {
        title: 'World Cup Futures & Outrights',
        content: `**Outright Winner**
Bet on which team will win the entire tournament. These bets offer the highest payouts but are hardest to predict. Argentina (+350) and France (+400) are early favorites.

**Group Winner**
Bet on which team tops each group. With the new 48-team format (12 groups of 4), the top 2 from each group advance, plus the 8 best third-place teams.

**Top Scorer (Golden Boot)**
Bet on which player scores the most goals. Kylian Mbappé (+600) and Erling Haaland (+800) lead the market.

**To Reach Final / Semi-Final**
Lower-risk futures that pay out if your team reaches a specific stage.

**Pro Tip:** Place futures bets early for the best odds. Lines tighten as the tournament approaches.`
      },
      {
        title: 'Props & Special Markets',
        content: `**Player Props**
- Anytime goalscorer: Player scores at least one goal in a match
- Player assists, shots on target, cards received
- Player of the tournament

**Match Props**
- Correct score (e.g., 2-1 at +700)
- Half-time/full-time result
- First/last goalscorer
- Number of corners, cards, penalties

**Tournament Props**
- Total goals in the tournament
- Will any team score 10+ in a match?
- Highest-scoring group
- Any red cards in the final?

**Live Betting**
World Cup matches are perfect for live betting. Watch the flow of the game and bet on next goal, corners, and adjusted lines.`
      },
      {
        title: 'Getting Started: Step-by-Step',
        content: `**Step 1: Sign up at multiple sportsbooks**
Claim welcome bonuses from DraftKings (code: ODDSCN), FanDuel (ODDSCN200), and BetMGM (ODDSCN1500). That's $1,900+ in potential bonuses.

**Step 2: Learn the 48-team format**
12 groups of 4 teams. Top 2 advance automatically, plus 8 best third-place teams (32 teams advance to knockout). This means even "weaker" teams have a realistic path.

**Step 3: Focus on value**
Don't just bet favorites. Group stage upsets happen regularly. Saudi Arabia beat Argentina in 2022! Look for undervalued underdogs.

**Step 4: Line shop**
Compare odds across books. Even small differences matter over 64 matches. Use our match pages to find the best lines.

**Step 5: Manage your bankroll**
Set a World Cup budget. With 64 matches over 39 days, pace yourself. Don't bet every match — be selective.

*21+ | Gamble Responsibly | 1-800-GAMBLER*`
      },
    ],
  },
  'best-world-cup-sportsbook-bonuses': {
    sections: [
      {
        title: 'Best Sportsbook Bonuses for World Cup 2026',
        content: `The World Cup is the biggest soccer betting event in the world, and sportsbooks are rolling out their best promos. Here's how to claim over $4,000 in bonuses:

🏆 **DraftKings: Bet $5, Get $200** — Code: ODDSCN
The easiest bonus to claim. Bet just $5 on any World Cup match and get $200 in bonus bets instantly, win or lose. Best for: Casual bettors.

🏆 **FanDuel: Bet $5, Win $200** — Code: ODDSCN200
Place a $5 bet, and if it wins, pocket $200 in bonus bets. Best for: Confident picks.

🏆 **BetMGM: $1,500 First Bet** — Code: ODDSCN1500
The biggest single bonus. If your first bet loses, get up to $1,500 back. Best for: Big bettors.

🏆 **Caesars: $1,000 First Bet** — Code: ODDSCNFULL
Another large insurance bet. Perfect for a futures bet on the tournament winner.

🏆 **PointsBet: 5x $100 Second Chance** — Code: ODDSCN500
Five separate second-chance bets — perfect for the group stage when you're betting daily.`
      },
      {
        title: 'Which Book Is Best for Soccer?',
        content: `Not all sportsbooks are equal for soccer betting. Here's our ranking:

**#1 DraftKings** ⭐
- Best soccer live betting interface
- Extensive props (corners, cards, player shots)
- Same-game parlays for World Cup
- Early cash-out on all markets

**#2 FanDuel**
- Competitive odds on three-way moneyline
- Good BTTS and Over/Under markets
- Clean mobile interface

**#3 BetMGM**
- Best odds on Asian Handicap markets
- Strong correct-score pricing
- Good futures market depth

**#4 Caesars**
- Solid all-around soccer coverage
- Good tournament-long props
- Caesars Rewards for in-person benefits

**#5 PointsBet**
- Unique "PointsBetting" for goals markets
- Good value on underdog 1X2 lines
- Multiple second-chance bets ideal for daily group games`
      },
      {
        title: 'How to Maximize Your Bonuses',
        content: `**The Multi-Book Strategy:**

1. Sign up at ALL FIVE books (it's free)
2. Claim each welcome bonus with the codes above
3. Use DraftKings $200 bonus on a fun long-shot (group correct score, first goalscorer)
4. Use FanDuel $200 bonus on a confident moneyline pick
5. Use BetMGM $1,500 on your biggest futures bet (tournament winner or Golden Boot)
6. Use Caesars $1,000 on another futures bet or a big group stage match
7. Use PointsBet 5x $100 throughout the first week of group play

**Total Potential Bonuses: $4,000+**

**Wagering Requirements:**
All five books have 1x playthrough on bonus bets. That means you only need to wager the bonus amount once before withdrawing.

**Important:** Bonus bet stakes are NOT returned with winnings. If you bet a $50 bonus bet at +200 and win, you get $100 (not $150).`
      },
      {
        title: 'Terms & Conditions',
        content: `**Eligibility:**
- Must be 21+ years old
- Must be located in a legal sports betting state
- New customers only (one account per person per book)
- Valid ID required for verification

**Bonus Bet Rules:**
- DraftKings: Bonus bets expire in 7 days
- FanDuel: Bonus bets expire in 14 days
- BetMGM: Bonus bets expire in 7 days
- Caesars: Bonus bet expires in 14 days
- PointsBet: Second-chance bets expire in 7 days

**Eligible Markets:**
All World Cup markets are eligible including:
- 1X2 (moneyline), Asian Handicap, Over/Under
- BTTS, Correct Score, First Goalscorer
- Player props, tournament outrights
- Same-game parlays, live bets

**States Where Available:**
AZ, CO, CT, DC, IL, IN, IA, KS, KY, LA, MA, MD, ME, MI, NJ, NY, OH, OR, PA, TN, VA, VT, WV, WY (varies by book)

*Gamble responsibly. 1-800-GAMBLER.*`
      },
    ],
  },
  'world-cup-group-stage-betting-strategy': {
    sections: [
      {
        title: 'The New 48-Team Format Explained',
        content: `The 2026 World Cup introduces a massively expanded format:

**Structure:**
- 48 teams in 12 groups of 4
- Each team plays 3 group matches
- Top 2 from each group advance (24 teams)
- 8 best third-place teams also advance (32 total)
- Single-elimination knockout from Round of 32

**What This Means for Betting:**
The expanded format changes everything. With 32 of 48 teams advancing (67%), even "weak" teams have a real shot at the knockout stage. This creates value opportunities.

**Key Changes from 2022:**
- More matches (64 group stage matches vs. 48)
- More upsets (weaker teams have less to lose)
- Third-place advancement makes dead rubbers rarer
- Larger groups = more varied outcomes`
      },
      {
        title: 'Group Stage Betting Strategies',
        content: `**Strategy 1: Bet the Draw**
World Cup group stages have historically produced draws ~25% of the time. At typical odds of +220 to +280, draws offer excellent value. Target matches between evenly-matched teams (e.g., Denmark vs Japan).

**Strategy 2: Back the Underdog on Matchday 1**
Opening matches are notoriously unpredictable. Teams are nervous, tactics are cautious. Underdogs cover at a higher rate in Matchday 1 than any other round.

**Strategy 3: Under 2.5 Goals in Early Matches**
Group openers tend to be cagey. Teams don't want to lose their first match, leading to conservative play. Under 2.5 hits at roughly 55% in World Cup Matchday 1.

**Strategy 4: Live Bet the 0-0 First Half**
If a match is 0-0 at halftime, the live odds for goals shift dramatically. Bet Over 0.5 second-half goals at great prices. Teams open up after halftime.`
      },
      {
        title: 'Dead Rubbers & Matchday 3',
        content: `**What Is a Dead Rubber?**
A match where one or both teams have nothing to play for — they've already qualified or been eliminated.

**Matchday 3 Strategy:**
By the third round of group matches, some teams may already be through. Key patterns:

- **Already-qualified teams** often rest key players → Bet the underdog or draw
- **Must-win teams** are desperate → They either dominate or crumble under pressure
- **Goal difference matters** for third-place tiebreakers → Teams may push for goals even if qualified

**The 2026 Wrinkle:**
With third-place teams advancing, Matchday 3 dead rubbers will be RARER. Even teams in 3rd place still fight for advancement. This makes the old "rest players" angle less reliable.

**Pro Tip:** Focus on groups where the standings are clear early. If a team is already eliminated on Matchday 3, their opponents often win big — great for team totals and handicap bets.`
      },
      {
        title: 'Tiebreakers & Stacking Strategies',
        content: `**FIFA Tiebreaker Order:**
1. Points (3 for win, 1 for draw)
2. Goal difference
3. Goals scored
4. Head-to-head points
5. Head-to-head goal difference
6. Fair play (fewer cards = better)
7. Drawing of lots

**Stacking Strategy:**
"Stacking" means betting multiple correlated outcomes in the same group:

**Example Stack — Group C (Argentina's Group):**
- Argentina to win group (-300)
- Argentina Over 2.5 goals vs Saudi Arabia (-160)
- Mexico to finish 2nd (+200)
- Under 2.5 goals in Mexico vs Poland (-110)

These bets reinforce each other. If Argentina dominates, they likely win the group with lots of goals, and Mexico fights for second.

**Goal Difference Stacking:**
If you believe a team will dominate their group:
- Bet them to win group
- Bet their team total goals Over
- Bet their opponents' team total Under
- Bet correct scores in blowout matches

**Bankroll Tip:** Never stake more than 15% of your World Cup budget on a single group. Spread your action across multiple groups.

*21+ | Gamble Responsibly | 1-800-GAMBLER*`
      },
    ],
  },
};
