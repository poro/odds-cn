import {
  worldCupInfo,
  worldCupGroups,
  worldCupOutrightOdds,
  worldCupTopScorers,
  worldCupPromos,
  worldCupMatches,
  worldCupGuides,
} from '@/lib/world-cup-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World Cup 2026 Odds — Outright Winner, Group Stage & Match Betting | Odds.cn',
  description: 'Compare FIFA World Cup 2026 betting odds across top sportsbooks. Outright winner odds, group stage lines, top scorer market, and $4,000+ in sportsbook bonuses.',
  keywords: 'world cup 2026 odds, world cup betting odds, fifa world cup betting, best world cup sportsbook bonus, world cup outright odds, world cup group stage odds',
  openGraph: {
    title: 'World Cup 2026 Odds — Betting Lines, Props & Sportsbook Bonuses',
    description: 'Live World Cup 2026 odds, group stage betting, and $4,000+ in sportsbook promos',
    type: 'website',
  },
};

export default function WorldCup2026Page() {
  const topPromos = worldCupPromos.filter(p => p.highlight);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-950 via-zinc-900 to-zinc-950 border-b border-green-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4 animate-pulse">
              ⚽ FIFA WORLD CUP 2026 — June 11 – July 19
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              World Cup <span className="text-green-400">2026</span> Odds
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-2">
              48 Teams • 16 Host Cities • USA / Mexico / Canada
            </p>
            <p className="text-lg text-zinc-500">
              Final: MetLife Stadium, New York/New Jersey — July 19, 2026
            </p>
          </div>

          {/* Quick favorites */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl p-6">
              {worldCupOutrightOdds.slice(0, 5).map(t => (
                <div key={t.team} className="text-center">
                  <div className="text-2xl mb-1">{t.flag}</div>
                  <div className="text-sm text-zinc-400">{t.team}</div>
                  <div className="text-lg font-bold text-green-400">{t.draftkings}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Promo Travel Banner */}
      <section className="bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border-b border-sky-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-sky-500/20 text-sky-400 border-sky-500/30">✈️ Going to the Match?</Badge>
              <span className="text-white font-medium">Find cheap flights & hotels for every World Cup city</span>
            </div>
            <a href="https://frequenttraveler.com/world-cup-2026" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white">
                Find Cheap Flights →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Promos banner */}
      <section className="bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🎁 $4,000+ in Bonuses</Badge>
              <span className="text-white font-medium">Claim World Cup promos from top sportsbooks</span>
            </div>
            <Link href="#promos">
              <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">View All Promos →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Outright Winner Odds */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">🏆 Outright Winner Odds</h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-zinc-800">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-zinc-300">Team</th>
                        <th className="text-center px-3 py-3 text-sm font-semibold text-zinc-300">DraftKings</th>
                        <th className="text-center px-3 py-3 text-sm font-semibold text-zinc-300">FanDuel</th>
                        <th className="text-center px-3 py-3 text-sm font-semibold text-zinc-300">BetMGM</th>
                        <th className="text-center px-3 py-3 text-sm font-semibold text-zinc-300">Caesars</th>
                        <th className="text-center px-3 py-3 text-sm font-semibold text-zinc-300">PointsBet</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {worldCupOutrightOdds.map(t => {
                        const allOdds = [t.draftkings, t.fanduel, t.betmgm, t.caesars, t.pointsbet].map(o => parseInt(o));
                        const best = Math.max(...allOdds);
                        const bestStr = `+${best}`;
                        return (
                          <tr key={t.team} className="hover:bg-zinc-800/50">
                            <td className="px-4 py-3 font-medium text-white whitespace-nowrap">
                              <span className="mr-2">{t.flag}</span>{t.team}
                            </td>
                            <td className={`px-3 py-3 text-center font-medium ${t.draftkings === bestStr ? 'text-green-400' : 'text-zinc-300'}`}>{t.draftkings}</td>
                            <td className={`px-3 py-3 text-center font-medium ${t.fanduel === bestStr ? 'text-green-400' : 'text-zinc-300'}`}>{t.fanduel}</td>
                            <td className={`px-3 py-3 text-center font-medium ${t.betmgm === bestStr ? 'text-green-400' : 'text-zinc-300'}`}>{t.betmgm}</td>
                            <td className={`px-3 py-3 text-center font-medium ${t.caesars === bestStr ? 'text-green-400' : 'text-zinc-300'}`}>{t.caesars}</td>
                            <td className={`px-3 py-3 text-center font-medium ${t.pointsbet === bestStr ? 'text-green-400' : 'text-zinc-300'}`}>{t.pointsbet}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-2 bg-zinc-800/50 text-xs text-zinc-500">
                  <span className="text-green-400">Green</span> = best available odds. Lines subject to change. 21+ | T&Cs apply.
                </div>
              </div>
            </section>

            {/* Group Stage Odds */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">📊 Group Stage — Odds to Win Group</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {worldCupGroups.map(group => (
                  <div key={group.name} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                    <h3 className="font-bold text-white mb-3">{group.name}</h3>
                    <div className="space-y-2">
                      {group.teams.map(team => (
                        <div key={team.name} className="flex items-center justify-between p-2 bg-zinc-800/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span>{team.flag}</span>
                            <span className="text-white text-sm font-medium">{team.name}</span>
                            <span className="text-xs text-zinc-500">#{team.fifaRanking}</span>
                          </div>
                          <span className="font-bold text-green-400 text-sm">{team.odds}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bet of the Day */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">🎯 Bet of the Day</h2>
              <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3">Daily Pick — Updated During Tournament</Badge>
                  <div className="text-3xl font-bold text-white mb-2">Coming June 11</div>
                  <p className="text-zinc-400 mb-4">Check back during the tournament for our daily expert World Cup pick with full analysis.</p>
                  <p className="text-sm text-zinc-500">Sign up below to get daily picks via email ⬇️</p>
                </CardContent>
              </Card>
            </section>

            {/* Top Scorer Odds */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">⚽ Golden Boot — Top Scorer Odds</h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {worldCupTopScorers.map((player, i) => (
                    <div key={player.player} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-zinc-500">#{i + 1}</span>
                        <div>
                          <span className="font-medium text-white">{player.player}</span>
                          <div className="text-xs text-zinc-500">{player.flag} {player.team} • {player.position}</div>
                        </div>
                      </div>
                      <span className="font-bold text-green-400">{player.odds}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Upcoming Matches Preview */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">📅 Opening Matches</h2>
                <Link href="/world-cup-2026/matches">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    All Matches →
                  </Button>
                </Link>
              </div>
              <div className="space-y-3">
                {worldCupMatches.slice(0, 4).map(match => (
                  <div key={match.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs text-zinc-400 border-zinc-700">Group {match.group}</Badge>
                      <span className="text-xs text-zinc-500">{match.date} • {match.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{match.homeFlag}</span>
                        <span className="font-medium text-white">{match.homeTeam}</span>
                      </div>
                      <div className="flex gap-2 text-sm">
                        <span className="px-2 py-1 bg-zinc-800 rounded text-green-400 font-medium">{match.odds[0]?.homeML}</span>
                        <span className="px-2 py-1 bg-zinc-800 rounded text-zinc-300 font-medium">{match.odds[0]?.draw}</span>
                        <span className="px-2 py-1 bg-zinc-800 rounded text-green-400 font-medium">{match.odds[0]?.awayML}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{match.awayTeam}</span>
                        <span>{match.awayFlag}</span>
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500 mt-2">{match.venue}, {match.city}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Betting Guides */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">📚 World Cup Betting Guides</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {worldCupGuides.map(guide => (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.slug}`}
                    className="block p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-green-500/50 transition-colors group"
                  >
                    <Badge variant="outline" className="text-xs text-green-400 border-green-500/30 mb-2">World Cup</Badge>
                    <h3 className="font-medium text-white group-hover:text-green-400 transition-colors mb-2">{guide.title}</h3>
                    <p className="text-sm text-zinc-500 line-clamp-2">{guide.excerpt}</p>
                    <span className="text-xs text-zinc-600 mt-2 inline-block">{guide.readTime} read</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Email Signup */}
            <section>
              <div className="bg-gradient-to-r from-green-500/20 via-green-500/10 to-transparent border border-green-500/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">📬 Get Daily World Cup Odds & Picks</h3>
                <p className="text-zinc-400 mb-6">Expert analysis, best bets, and line movement alerts — delivered to your inbox every matchday.</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-green-500"
                    readOnly
                  />
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-6">Subscribe Free</Button>
                </div>
                <p className="text-xs text-zinc-500 mt-3">No spam. Unsubscribe anytime.</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6" id="promos">
            {/* Best Promo */}
            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/30">
              <CardContent className="p-6">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-3">🏆 #1 World Cup Bonus</Badge>
                <h3 className="text-lg font-bold text-white mb-2">{topPromos[0]?.title}</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-2">{topPromos[0]?.bonus}</p>
                <p className="text-sm text-zinc-400 mb-4">{topPromos[0]?.description}</p>
                {topPromos[0]?.code && (
                  <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded-lg p-3 mb-4 text-center">
                    <div className="text-xs text-zinc-500 uppercase mb-1">Promo Code</div>
                    <div className="text-lg font-mono font-bold text-yellow-400">{topPromos[0]?.code}</div>
                  </div>
                )}
                <a href={topPromos[0]?.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
                  Claim $200 Bonus →
                </a>
                <p className="text-xs text-zinc-500 text-center mt-2">21+ • T&Cs Apply</p>
              </CardContent>
            </Card>

            {/* All World Cup Promos */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">🎁 All World Cup Promos</h3>
              <div className="space-y-4">
                {worldCupPromos.map(promo => (
                  <div key={promo.id} className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">{promo.sportsbook}</span>
                      {promo.highlight && <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">Top Pick</Badge>}
                    </div>
                    <p className="text-sm text-green-400 font-medium mb-1">{promo.bonus}</p>
                    <p className="text-xs text-zinc-500 mb-3">{promo.description}</p>
                    {promo.code && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-zinc-500">Code:</span>
                        <code className="bg-zinc-700 px-2 py-0.5 rounded text-sm font-mono text-green-400">{promo.code}</code>
                      </div>
                    )}
                    <a href={promo.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded transition-colors">
                      Claim Bonus
                    </a>
                  </div>
                ))}
              </div>
              <Link href="/guides/best-world-cup-sportsbook-bonuses" className="block text-center text-sm text-green-400 hover:text-green-300 mt-4">
                Full Promo Guide →
              </Link>
            </div>

            {/* Travel CTA */}
            <Card className="bg-gradient-to-br from-sky-500/20 to-sky-600/10 border-sky-500/30">
              <CardContent className="p-6">
                <Badge className="bg-sky-500/20 text-sky-400 border-sky-500/30 mb-3">✈️ Travel Deals</Badge>
                <h3 className="text-lg font-bold text-white mb-2">Flying to the World Cup?</h3>
                <p className="text-sm text-zinc-400 mb-4">Cheap flights & hotel deals for all 16 host cities in USA, Mexico & Canada.</p>
                <a href="https://frequenttraveler.com/world-cup-2026" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors">
                  Find Cheap Flights →
                </a>
              </CardContent>
            </Card>

            {/* Host Cities */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">🏟️ Host Cities</h3>
              <div className="space-y-2">
                {worldCupInfo.hostCities.map(c => (
                  <div key={c.city} className="flex items-center justify-between text-sm">
                    <span className="text-zinc-300">{c.city}</span>
                    <span className="text-xs text-zinc-500">{c.country}</span>
                  </div>
                ))}
              </div>
              <a href="https://frequenttraveler.com/world-cup-2026" target="_blank" rel="noopener noreferrer" className="block text-center text-sm text-sky-400 hover:text-sky-300 mt-4">
                City Travel Guides →
              </a>
            </div>

            {/* Quick Links */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">⚽ Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/world-cup-2026/matches" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> All Match Odds</Link></li>
                <li><Link href="/guides/how-to-bet-world-cup-2026" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> How to Bet on World Cup</Link></li>
                <li><Link href="/guides/best-world-cup-sportsbook-bonuses" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> Sportsbook Bonuses</Link></li>
                <li><Link href="/guides/world-cup-group-stage-betting-strategy" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> Group Stage Strategy</Link></li>
                <li><Link href="/calculators" className="text-sm text-zinc-400 hover:text-green-400 flex items-center gap-2"><span>→</span> Betting Calculators</Link></li>
              </ul>
            </div>

            {/* Responsible Gambling */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-zinc-400 mb-2">🛡️ Bet Responsibly</h3>
              <p className="text-xs text-zinc-500 mb-3">Gambling problem? Call 1-800-GAMBLER. Must be 21+ and present in a legal betting state.</p>
              <Link href="/responsible-gambling" className="text-xs text-green-400 hover:text-green-300">Responsible Gambling Resources →</Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": "FIFA World Cup 2026",
            "startDate": "2026-06-11",
            "endDate": "2026-07-19",
            "location": {
              "@type": "Place",
              "name": "Multiple Venues — USA, Mexico, Canada",
            },
            "description": "The 2026 FIFA World Cup, hosted by the United States, Mexico, and Canada, featuring 48 teams.",
            "offers": {
              "@type": "AggregateOffer",
              "description": "World Cup 2026 betting odds and sportsbook promotions",
            },
          }),
        }}
      />
    </div>
  );
}
