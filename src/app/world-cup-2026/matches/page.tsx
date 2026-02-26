import {
  worldCupMatches,
  worldCupPromos,
  worldCupGroups,
} from '@/lib/world-cup-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World Cup 2026 Match Odds — Compare Moneyline, Over/Under & BTTS | Odds.cn',
  description: 'Compare World Cup 2026 match odds across DraftKings, FanDuel, and BetMGM. Moneyline, draw, over/under, and both teams to score for every group stage match.',
  keywords: 'world cup 2026 match odds, world cup betting lines, world cup moneyline, world cup over under, world cup group stage matches',
};

export default function WorldCupMatchesPage() {
  // Group matches by date
  const matchesByDate = worldCupMatches.reduce<Record<string, typeof worldCupMatches>>((acc, match) => {
    if (!acc[match.date]) acc[match.date] = [];
    acc[match.date].push(match);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-950 via-zinc-900 to-zinc-950 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/world-cup-2026" className="text-zinc-400 hover:text-green-400 text-sm">← World Cup 2026 Hub</Link>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">⚽ GROUP STAGE MATCHES</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            World Cup 2026 <span className="text-green-400">Match Odds</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Compare odds across sportsbooks for every group stage match. Moneyline, over/under, and both teams to score.
          </p>
        </div>
      </section>

      {/* Cross-promo */}
      <section className="bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border-b border-sky-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span className="text-sm text-zinc-300">✈️ Flying to the match? Find cheap flights → <a href="https://frequenttraveler.com/world-cup-2026" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium">frequenttraveler.com</a></span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(matchesByDate).sort(([a], [b]) => a.localeCompare(b)).map(([date, matches]) => (
              <section key={date}>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  📅 {new Date(date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </h2>
                <div className="space-y-4">
                  {matches.map(match => {
                    // Find best home ML (least negative or most positive)
                    const homeMls = match.odds.map(o => parseInt(o.homeML));
                    const bestHomeIdx = homeMls.indexOf(Math.max(...homeMls));
                    const awayMls = match.odds.map(o => parseInt(o.awayML));
                    const bestAwayIdx = awayMls.indexOf(Math.max(...awayMls));

                    return (
                      <div key={match.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                        {/* Match Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-zinc-800/50">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs text-green-400 border-green-500/30">Group {match.group}</Badge>
                            <span className="text-sm text-zinc-400">{match.time}</span>
                          </div>
                          <div className="text-xs text-zinc-500">{match.venue}, {match.city}</div>
                        </div>
                        {/* Teams */}
                        <div className="px-4 py-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 w-1/3">
                            <span className="text-xl">{match.homeFlag}</span>
                            <span className="font-bold text-white">{match.homeTeam}</span>
                          </div>
                          <span className="text-zinc-500 font-bold">vs</span>
                          <div className="flex items-center gap-2 w-1/3 justify-end">
                            <span className="font-bold text-white">{match.awayTeam}</span>
                            <span className="text-xl">{match.awayFlag}</span>
                          </div>
                        </div>
                        {/* Odds Table */}
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead className="bg-zinc-800/30">
                              <tr>
                                <th className="text-left px-4 py-2 text-xs text-zinc-500">Book</th>
                                <th className="text-center px-2 py-2 text-xs text-zinc-500">Home</th>
                                <th className="text-center px-2 py-2 text-xs text-zinc-500">Draw</th>
                                <th className="text-center px-2 py-2 text-xs text-zinc-500">Away</th>
                                <th className="text-center px-2 py-2 text-xs text-zinc-500">O/U</th>
                                <th className="text-center px-2 py-2 text-xs text-zinc-500">BTTS</th>
                                <th className="text-center px-2 py-2 text-xs text-zinc-500"></th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800/50">
                              {match.odds.map((o, idx) => (
                                <tr key={o.sportsbook} className="hover:bg-zinc-800/30">
                                  <td className="px-4 py-2 text-zinc-300 font-medium">{o.sportsbook}</td>
                                  <td className={`px-2 py-2 text-center font-medium ${idx === bestHomeIdx ? 'text-green-400' : 'text-zinc-300'}`}>{o.homeML}</td>
                                  <td className="px-2 py-2 text-center text-zinc-300 font-medium">{o.draw}</td>
                                  <td className={`px-2 py-2 text-center font-medium ${idx === bestAwayIdx ? 'text-green-400' : 'text-zinc-300'}`}>{o.awayML}</td>
                                  <td className="px-2 py-2 text-center text-zinc-400">{o.overUnder} ({o.overOdds}/{o.underOdds})</td>
                                  <td className="px-2 py-2 text-center text-zinc-400">Y {o.bttsYes}</td>
                                  <td className="px-2 py-2 text-center">
                                    <a href={o.affiliateUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-2 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors">Bet</a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="px-4 py-1 text-xs text-zinc-600">
                          <span className="text-green-400">Green</span> = best value
                          {match.city && (
                            <> • <a href={`https://frequenttraveler.com/world-cup-2026/${match.city.toLowerCase().replace(/[^a-z]/g, '-')}`} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Flying to {match.city}? ✈️</a></>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* Placeholder for remaining matches */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">More Matches Coming Soon</h3>
              <p className="text-zinc-400 mb-4">Full schedule of 64 group stage matches will be populated as the official draw and schedule are confirmed.</p>
              <Link href="/world-cup-2026">
                <Button className="bg-green-500 hover:bg-green-600 text-white">Back to World Cup Hub →</Button>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Top Promo */}
            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/30">
              <CardContent className="p-6">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-3">🏆 Best Bonus</Badge>
                <h3 className="text-lg font-bold text-white mb-2">{worldCupPromos[0]?.sportsbook}</h3>
                <p className="text-xl font-bold text-yellow-400 mb-2">{worldCupPromos[0]?.bonus}</p>
                {worldCupPromos[0]?.code && (
                  <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded-lg p-2 mb-4 text-center">
                    <span className="text-xs text-zinc-500">Code: </span>
                    <span className="font-mono font-bold text-yellow-400">{worldCupPromos[0]?.code}</span>
                  </div>
                )}
                <a href={worldCupPromos[0]?.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
                  Claim Bonus →
                </a>
                <p className="text-xs text-zinc-500 text-center mt-2">21+ • T&Cs Apply</p>
              </CardContent>
            </Card>

            {/* Group Standings */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">📊 Groups at a Glance</h3>
              <div className="space-y-3">
                {worldCupGroups.slice(0, 6).map(g => (
                  <div key={g.name} className="text-sm">
                    <span className="font-medium text-zinc-300">{g.name}:</span>{' '}
                    <span className="text-zinc-500">{g.teams.map(t => `${t.flag} ${t.name}`).join(', ')}</span>
                  </div>
                ))}
              </div>
              <Link href="/world-cup-2026" className="block text-center text-sm text-green-400 hover:text-green-300 mt-4">
                View All Groups →
              </Link>
            </div>

            {/* Guides */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">📚 Guides</h3>
              <ul className="space-y-3">
                <li><Link href="/guides/how-to-bet-world-cup-2026" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> How to Bet on World Cup</Link></li>
                <li><Link href="/guides/world-cup-group-stage-betting-strategy" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> Group Stage Strategy</Link></li>
                <li><Link href="/guides/best-world-cup-sportsbook-bonuses" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> Sportsbook Bonuses</Link></li>
              </ul>
            </div>

            {/* Responsible Gambling */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-zinc-400 mb-2">🛡️ Bet Responsibly</h3>
              <p className="text-xs text-zinc-500 mb-3">Gambling problem? Call 1-800-GAMBLER. Must be 21+.</p>
              <Link href="/responsible-gambling" className="text-xs text-green-400 hover:text-green-300">Resources →</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
