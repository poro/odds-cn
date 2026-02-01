import { 
  superBowlInfo, 
  superBowlOdds, 
  superBowlPromos, 
  superBowlMvpOdds, 
  firstTdScorerOdds,
  superBowlProps,
  superBowlGuides 
} from '@/lib/super-bowl-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SuperBowlCountdown } from '@/components/super-bowl-countdown';

export const metadata: Metadata = {
  title: 'Super Bowl LIX Odds 2025 - Chiefs vs Eagles Betting Lines, Props & Promos | Odds.cn',
  description: 'Get the best Super Bowl LIX odds, betting lines, props, and exclusive promos. Chiefs vs Eagles complete betting guide with over $5,000 in sportsbook bonuses.',
  keywords: 'super bowl odds, super bowl betting, super bowl props, chiefs vs eagles, super bowl 2025, super bowl promos, super bowl mvp odds',
  openGraph: {
    title: 'Super Bowl LIX Odds - Chiefs vs Eagles 2025',
    description: 'Live Super Bowl odds, props, and $5,000+ in betting bonuses',
    type: 'website',
  },
};

export default function SuperBowlPage() {
  const topPromos = superBowlPromos.filter(p => p.highlight);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-950 via-zinc-900 to-zinc-950 border-b border-red-500/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-4 animate-pulse">
              🏈 SUPER BOWL LIX — {superBowlInfo.date.split('T')[0]}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-red-500">Chiefs</span> vs <span className="text-green-500">Eagles</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-2">
              {superBowlInfo.venue} • {superBowlInfo.city}
            </p>
            <p className="text-lg text-zinc-500">
              {superBowlInfo.kickoff} • {superBowlInfo.broadcaster} • Halftime: {superBowlInfo.halftimeShow}
            </p>
          </div>

          {/* Countdown Timer */}
          <SuperBowlCountdown targetDate={superBowlInfo.date} />

          {/* Quick Odds Display */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="grid grid-cols-3 gap-4 bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-sm text-zinc-500 uppercase mb-1">Spread</div>
                <div className="text-2xl font-bold text-white">KC -1.5</div>
                <div className="text-sm text-zinc-400">PHI +1.5</div>
              </div>
              <div className="text-center border-x border-zinc-800">
                <div className="text-sm text-zinc-500 uppercase mb-1">Total</div>
                <div className="text-2xl font-bold text-white">O/U 49.5</div>
                <div className="text-sm text-zinc-400">-110 both sides</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-zinc-500 uppercase mb-1">Moneyline</div>
                <div className="text-2xl font-bold text-red-400">KC -130</div>
                <div className="text-sm text-green-400">PHI +110</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Promos Banner */}
      <section className="bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                🎁 $5,000+ in Bonuses
              </Badge>
              <span className="text-white font-medium">Claim Super Bowl promos from top sportsbooks</span>
            </div>
            <Link href="#promos">
              <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                View All Promos →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Odds Comparison Table */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                📊 Super Bowl Odds Comparison
              </h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-zinc-800">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-zinc-300">Sportsbook</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-zinc-300">Chiefs Spread</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-zinc-300">Eagles Spread</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-zinc-300">KC ML</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-zinc-300">PHI ML</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-zinc-300">Total</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-zinc-300"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {superBowlOdds.map((odds) => (
                        <tr key={odds.sportsbook} className="hover:bg-zinc-800/50">
                          <td className="px-4 py-3">
                            <span className="font-medium text-white">{odds.sportsbook}</span>
                            {odds.bonusCode && (
                              <div className="text-xs text-emerald-400">Code: {odds.bonusCode}</div>
                            )}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-white">{odds.chiefsSpread}</span>
                            <span className="text-zinc-400 text-sm ml-1">({odds.chiefsSpreadOdds})</span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-white">{odds.eaglesSpread}</span>
                            <span className="text-zinc-400 text-sm ml-1">({odds.eaglesSpreadOdds})</span>
                          </td>
                          <td className="px-4 py-3 text-center text-red-400 font-medium">{odds.chiefsML}</td>
                          <td className="px-4 py-3 text-center text-green-400 font-medium">+{odds.eaglesML}</td>
                          <td className="px-4 py-3 text-center text-white">{odds.total}</td>
                          <td className="px-4 py-3 text-center">
                            <a 
                              href={odds.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded transition-colors"
                            >
                              Bet Now
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Best Bets Section */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                🎯 Our Super Bowl Picks
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30">
                  <CardContent className="p-6 text-center">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3">
                      Spread Pick
                    </Badge>
                    <div className="text-2xl font-bold text-white mb-2">Eagles +1.5</div>
                    <p className="text-sm text-zinc-400">Better team, getting points</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30">
                  <CardContent className="p-6 text-center">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-3">
                      Total Pick
                    </Badge>
                    <div className="text-2xl font-bold text-white mb-2">Over 49.5</div>
                    <p className="text-sm text-zinc-400">Two explosive offenses</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/30">
                  <CardContent className="p-6 text-center">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-3">
                      Best Bet
                    </Badge>
                    <div className="text-2xl font-bold text-white mb-2">Eagles ML</div>
                    <p className="text-sm text-zinc-400">+110 value is too good</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* MVP Odds */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                🏆 Super Bowl MVP Odds
              </h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {superBowlMvpOdds.slice(0, 6).map((player, index) => (
                    <div 
                      key={player.player}
                      className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-zinc-500">#{index + 1}</span>
                        <div>
                          <span className="font-medium text-white">{player.player}</span>
                          <div className="text-xs text-zinc-500">{player.team} • {player.position}</div>
                        </div>
                      </div>
                      <span className={`font-bold ${player.odds > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {player.odds > 0 ? '+' : ''}{player.odds}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/guides/super-bowl-mvp-odds-2025" className="block text-center mt-4">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Full MVP Analysis →
                  </Button>
                </Link>
              </div>
            </section>

            {/* First TD Scorer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                🏈 First Touchdown Scorer Odds
              </h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {firstTdScorerOdds.slice(0, 8).map((player) => (
                    <div 
                      key={player.player}
                      className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          player.team === 'KC' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {player.team}
                        </span>
                        <span className="font-medium text-white">{player.player}</span>
                      </div>
                      <span className="font-bold text-emerald-400">+{player.odds}</span>
                    </div>
                  ))}
                </div>
                <Link href="/guides/super-bowl-first-touchdown-scorer" className="block text-center mt-4">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    All First TD Odds →
                  </Button>
                </Link>
              </div>
            </section>

            {/* Popular Props */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                🎲 Popular Super Bowl Props
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {superBowlProps.slice(0, 6).map((prop, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4">
                      <Badge variant="outline" className="text-xs text-zinc-400 border-zinc-700 mb-2">
                        {prop.category}
                      </Badge>
                      <h3 className="font-medium text-white mb-3">{prop.prop}</h3>
                      <div className="space-y-2">
                        {prop.options.slice(0, 2).map((option, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="text-sm text-zinc-400">{option.name}</span>
                            <span className={`font-medium ${
                              option.name === prop.recommended 
                                ? 'text-yellow-400' 
                                : 'text-zinc-300'
                            }`}>
                              {option.odds > 0 ? '+' : ''}{option.odds}
                              {option.name === prop.recommended && ' ⭐'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Link href="/guides/super-bowl-prop-bets-2025" className="block text-center mt-4">
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                  View All 50+ Props →
                </Button>
              </Link>
            </section>

            {/* Super Bowl Guides */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                📚 Super Bowl Betting Guides
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {superBowlGuides.slice(0, 6).map((guide) => (
                  <Link 
                    key={guide.id}
                    href={`/guides/${guide.slug}`}
                    className="block p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-emerald-500/50 transition-colors group"
                  >
                    <Badge variant="outline" className="text-xs text-red-400 border-red-500/30 mb-2">
                      Super Bowl
                    </Badge>
                    <h3 className="font-medium text-white group-hover:text-emerald-400 transition-colors mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-zinc-500 line-clamp-2">{guide.excerpt}</p>
                    <span className="text-xs text-zinc-600 mt-2 inline-block">{guide.readTime} read</span>
                  </Link>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {superBowlGuides.slice(6).map((guide) => (
                  <Link 
                    key={guide.id}
                    href={`/guides/${guide.slug}`}
                    className="block p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-emerald-500/50 transition-colors group"
                  >
                    <Badge variant="outline" className="text-xs text-red-400 border-red-500/30 mb-2">
                      Super Bowl
                    </Badge>
                    <h3 className="font-medium text-white group-hover:text-emerald-400 transition-colors mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-zinc-500 line-clamp-2">{guide.excerpt}</p>
                    <span className="text-xs text-zinc-600 mt-2 inline-block">{guide.readTime} read</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6" id="promos">
            {/* Best Promo */}
            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/30">
              <CardContent className="p-6">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-3">
                  🏆 #1 Super Bowl Bonus
                </Badge>
                <h3 className="text-lg font-bold text-white mb-2">{topPromos[0]?.title}</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-2">{topPromos[0]?.bonus}</p>
                <p className="text-sm text-zinc-400 mb-4">{topPromos[0]?.description}</p>
                {topPromos[0]?.code && (
                  <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded-lg p-3 mb-4 text-center">
                    <div className="text-xs text-zinc-500 uppercase mb-1">Promo Code</div>
                    <div className="text-lg font-mono font-bold text-yellow-400">{topPromos[0]?.code}</div>
                  </div>
                )}
                <a
                  href={topPromos[0]?.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors"
                >
                  Claim $200 Bonus →
                </a>
                <p className="text-xs text-zinc-500 text-center mt-2">21+ • T&Cs Apply</p>
              </CardContent>
            </Card>

            {/* All Super Bowl Promos */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                🎁 All Super Bowl Promos
              </h3>
              <div className="space-y-4">
                {superBowlPromos.map((promo) => (
                  <div 
                    key={promo.id}
                    className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">{promo.sportsbook}</span>
                      {promo.highlight && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">
                          Top Pick
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-emerald-400 font-medium mb-1">{promo.bonus}</p>
                    <p className="text-xs text-zinc-500 mb-3">{promo.description}</p>
                    {promo.code && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-zinc-500">Code:</span>
                        <code className="bg-zinc-700 px-2 py-0.5 rounded text-sm font-mono text-emerald-400">
                          {promo.code}
                        </code>
                      </div>
                    )}
                    <a
                      href={promo.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded transition-colors"
                    >
                      Claim Bonus
                    </a>
                  </div>
                ))}
              </div>
              <Link 
                href="/guides/super-bowl-betting-promos-2025"
                className="block text-center text-sm text-emerald-400 hover:text-emerald-300 mt-4"
              >
                Full Promo Guide →
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">🏈 Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/guides/super-bowl-lix-odds-chiefs-eagles" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Complete Betting Guide
                  </Link>
                </li>
                <li>
                  <Link href="/guides/super-bowl-prop-bets-2025" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> 50+ Prop Bets
                  </Link>
                </li>
                <li>
                  <Link href="/guides/super-bowl-mvp-odds-2025" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> MVP Odds Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/guides/super-bowl-squares-guide" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Super Bowl Squares
                  </Link>
                </li>
                <li>
                  <Link href="/guides/super-bowl-halftime-show-props" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Halftime Show Props
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Betting Calculators
                  </Link>
                </li>
              </ul>
            </div>

            {/* Responsible Gambling */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-zinc-400 mb-2">🛡️ Bet Responsibly</h3>
              <p className="text-xs text-zinc-500 mb-3">
                Gambling problem? Call 1-800-GAMBLER. Must be 21+ and present in a legal betting state.
              </p>
              <Link href="/responsible-gambling" className="text-xs text-emerald-400 hover:text-emerald-300">
                Responsible Gambling Resources →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": "Super Bowl LIX - Kansas City Chiefs vs Philadelphia Eagles",
            "startDate": "2025-02-09T23:30:00Z",
            "location": {
              "@type": "Place",
              "name": "Caesars Superdome",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Orleans",
                "addressRegion": "LA",
                "addressCountry": "US"
              }
            },
            "competitor": [
              { "@type": "SportsTeam", "name": "Kansas City Chiefs" },
              { "@type": "SportsTeam", "name": "Philadelphia Eagles" }
            ],
            "offers": {
              "@type": "AggregateOffer",
              "description": "Super Bowl betting odds and promotions"
            }
          })
        }}
      />
    </div>
  );
}
