// March Madness 2026 Data
// NCAA Tournament: March 17 - April 6, 2026
// Selection Sunday: March 15, 2026

export interface MarchMadnessPromo {
  id: string;
  sportsbook: string;
  logo: string;
  title: string;
  bonus: string;
  description: string;
  code?: string;
  affiliateUrl: string;
  highlight?: boolean;
}

export interface BettingTip {
  title: string;
  description: string;
  icon: string;
}

export interface TournamentRound {
  name: string;
  dates: string;
  games: number;
  description: string;
}

export const marchMadnessInfo = {
  year: 2026,
  selectionSunday: '2026-03-15T18:00:00-04:00',
  firstFour: { start: '2026-03-17', end: '2026-03-18' },
  firstRound: { start: '2026-03-19', end: '2026-03-20' },
  secondRound: { start: '2026-03-21', end: '2026-03-22' },
  sweetSixteen: { start: '2026-03-26', end: '2026-03-27' },
  eliteEight: { start: '2026-03-28', end: '2026-03-29' },
  finalFour: { date: '2026-04-04', venue: 'Lucas Oil Stadium', city: 'Indianapolis, IN' },
  championship: { date: '2026-04-06', venue: 'Lucas Oil Stadium', city: 'Indianapolis, IN' },
  teams: 68,
};

export const tournamentRounds: TournamentRound[] = [
  {
    name: 'First Four',
    dates: 'March 17-18',
    games: 4,
    description: 'Play-in games to determine the final four spots in the 64-team bracket.',
  },
  {
    name: 'First Round',
    dates: 'March 19-20',
    games: 32,
    description: 'The tournament tips off with 32 games across two days. Historically the best days for upsets.',
  },
  {
    name: 'Second Round',
    dates: 'March 21-22',
    games: 16,
    description: 'Sweet 16 is on the line. This is where Cinderella stories are born.',
  },
  {
    name: 'Sweet 16',
    dates: 'March 26-27',
    games: 8,
    description: 'Regional semifinals. The field narrows to 16 of the best teams in the country.',
  },
  {
    name: 'Elite Eight',
    dates: 'March 28-29',
    games: 4,
    description: 'Regional finals. Win here and you\'re headed to the Final Four.',
  },
  {
    name: 'Final Four',
    dates: 'April 4',
    games: 2,
    description: 'National semifinals at Lucas Oil Stadium in Indianapolis.',
  },
  {
    name: 'Championship',
    dates: 'April 6',
    games: 1,
    description: 'The national championship game. One team cuts down the nets.',
  },
];

export const marchMadnessPromos: MarchMadnessPromo[] = [
  {
    id: 'dk-mm',
    sportsbook: 'DraftKings',
    logo: '/logos/draftkings.svg',
    title: 'Bet $5, Get $200 in Bonus Bets',
    bonus: '$200',
    description: 'Place any $5 March Madness bet and receive $200 in bonus bets instantly. No promo code needed.',
    affiliateUrl: 'https://sportsbook.draftkings.com/march-madness?affiliate=oddscn',
    highlight: true,
  },
  {
    id: 'fd-mm',
    sportsbook: 'FanDuel',
    logo: '/logos/fanduel.svg',
    title: 'Bet $5, Win $300 Bonus',
    bonus: '$300',
    description: 'New users bet $5 on any March Madness game. If your bet wins, get $300 in bonus bets.',
    affiliateUrl: 'https://sportsbook.fanduel.com/march-madness?affiliate=oddscn',
    highlight: true,
  },
  {
    id: 'mgm-mm',
    sportsbook: 'BetMGM',
    logo: '/logos/betmgm.svg',
    title: 'First Bet Up to $1,500',
    bonus: '$1,500',
    description: 'If your first March Madness bet loses, get up to $1,500 back in bonus bets.',
    affiliateUrl: 'https://sports.betmgm.com/march-madness?affiliate=oddscn',
  },
  {
    id: 'czr-mm',
    sportsbook: 'Caesars',
    logo: '/logos/caesars.svg',
    title: 'First Bet on Caesars Up to $1,000',
    bonus: '$1,000',
    description: 'Your first bet is on Caesars. If it doesn\'t win, get a bonus bet back up to $1,000.',
    code: 'ODDSCNMM',
    affiliateUrl: 'https://sportsbook.caesars.com/march-madness?affiliate=oddscn',
  },
];

export const bettingTips: BettingTip[] = [
  {
    title: '12 vs 5 Seed Upsets',
    description: 'A 12-seed beats a 5-seed roughly 35% of the time. Always consider the 12-5 upset in your bracket and bets.',
    icon: '🎯',
  },
  {
    title: 'First Round Unders',
    description: 'Tournament games tend to go under in the first round as teams play tighter defense in the single-elimination format.',
    icon: '📊',
  },
  {
    title: 'Conference Tournament Form',
    description: 'Teams that played well in their conference tournament often carry momentum. Look for hot teams, not just high seeds.',
    icon: '🔥',
  },
  {
    title: 'Avoid All Chalk Brackets',
    description: 'A perfect bracket has never been filled. At least one 1 or 2 seed loses before the Final Four most years.',
    icon: '📋',
  },
  {
    title: 'Live Betting Value',
    description: 'March Madness is full of runs. If a favorite falls behind early, live betting can offer great value on comebacks.',
    icon: '💰',
  },
  {
    title: 'Mid-Major Sleepers',
    description: 'Mid-major conference champions (like Gonzaga, Saint Mary\'s) are often undervalued by the public. Look for value.',
    icon: '🏀',
  },
];

export const popularBetTypes = [
  {
    name: 'Point Spread',
    description: 'Bet on the margin of victory. The favorite must win by more than the spread.',
    example: 'Duke -6.5 means Duke must win by 7+ points.',
  },
  {
    name: 'Moneyline',
    description: 'Simply pick the winner. Higher payouts for underdogs.',
    example: '+450 underdog pays $450 on a $100 bet if they win.',
  },
  {
    name: 'Over/Under (Totals)',
    description: 'Bet on whether the combined score will be over or under a set number.',
    example: 'Over 142.5 means you need 143+ combined points.',
  },
  {
    name: 'Futures',
    description: 'Bet on who will win the national championship before the tournament starts.',
    example: 'Kansas +800 to win it all pays $800 on a $100 bet.',
  },
  {
    name: 'Parlays',
    description: 'Combine multiple bets for bigger payouts. All legs must hit.',
    example: '3-team parlay at +600 odds for bigger upside.',
  },
  {
    name: 'Player Props',
    description: 'Bet on individual player performances — points, rebounds, assists.',
    example: 'Player X over 22.5 points in the Sweet 16.',
  },
];
