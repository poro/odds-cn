import {
  marchMadnessInfo,
  marchMadnessPromos,
  tournamentRounds,
  bettingTips,
  popularBetTypes,
} from '@/lib/march-madness-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MarchMadnessCountdown } from '@/components/march-madness-countdown';

export const metadata: Metadata = {
  title: 'March Madness 2026 Odds & Betting Guide - NCAA Tournament Picks, Brackets & Promos | Odds.cn',
  description: 'Complete March Madness 2026 betting guide. NCAA Tournament odds, bracket picks, betting tips, and $2,000+ in sportsbook bonuses. Selection Sunday through the Final Four.',
  keywords: 'march madness odds, march madness betting, ncaa tournament odds, march madness 2026, bracket picks, final four odds, march madness promos, ncaa basketball betting',
  openGraph: {
    title: 'March Madness 2026 Odds & Betting Guide | Odds.cn',
    description: 'NCAA Tournament odds, bracket picks, and $2,000+ in sportsbook bonuses',
    type: 'website',
  },
};

export default function MarchMadnessPage() {
  const highlightedPromos = marchMadnessPromos.filter(p => p.highlight);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-950 via-zinc-900 to-zinc-950 border-b border-orange-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4 text-sm">
              🏀 NCAA TOURNAMENT 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              March Madness <span className="text-orange-400">Betting Guide</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              68 teams. Single elimination. The most exciting tournament in sports.
              Get the best odds, picks, and exclusive promos for every round.
            </p>
          </div>

          {/* Countdown */}
          <div className="text-center mb-8">
            <p className="text-sm text-zinc-500 mb-2">Selection Sunday Countdown</p>
            <MarchMadnessCountdown targetDate={marchMadnessInfo.selectionSunday} />
          </div>

          {/* Key Dates */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
              <p className="text-2xl font-bold text-orange-400">Mar 15</p>
              <p className="text-xs text-zinc-400">Selection Sunday</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
              <p className="text-2xl font-bold text-orange-400">Mar 19</p>
              <p className="text-xs text-zinc-400">First Round</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
              <p className="text-2xl font-bold text-orange-400">Apr 4</p>
              <p className="text-xs text-zinc-400">Final Four</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
              <p className="text-2xl font-bold text-orange-400">Apr 6</p>
              <p className="text-xs text-zinc-400">Championship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sportsbook Promos */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            🎁 March Madness Sportsbook Bonuses
          </h2>
          <p className="text-zinc-400">
            Exclusive promos for the NCAA Tournament — over $3,000 in combined bonuses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {marchMadnessPromos.map((promo) => (
            <Card
              key={promo.id}
              className={`bg-zinc-900 border ${
                promo.highlight
                  ? 'border-orange-500/50 shadow-lg shadow-orange-500/10'
                  : 'border-zinc-800'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{promo.sportsbook}</h3>
                    {promo.highlight && (
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mt-1">
                        ⭐ Top Pick
                      </Badge>
                    )}
                  </div>
                  <span className="text-2xl font-extrabold text-emerald-400">
                    {promo.bonus}
                  </span>
                </div>
                <h4 className="text-white font-semibold mb-2">{promo.title}</h4>
                <p className="text-sm text-zinc-400 mb-4">{promo.description}</p>
                {promo.code && (
                  <div className="mb-4 p-2 bg-zinc-800 rounded border border-dashed border-zinc-600 text-center">
                    <span className="text-xs text-zinc-500">Promo Code: </span>
                    <span className="text-sm font-mono font-bold text-orange-400">
                      {promo.code}
                    </span>
                  </div>
                )}
                <a
                  href={promo.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors"
                >
                  Claim Bonus →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tournament Schedule */}
      <section className="bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            📅 Tournament Schedule
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {tournamentRounds.map((round, i) => (
              <div
                key={round.name}
                className="flex items-start gap-4 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-bold">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">{round.name}</h3>
                    <Badge variant="outline" className="text-zinc-400 border-zinc-600">
                      {round.dates}
                    </Badge>
                    <Badge variant="outline" className="text-zinc-500 border-zinc-700">
                      {round.games} {round.games === 1 ? 'game' : 'games'}
                    </Badge>
                  </div>
                  <p className="text-sm text-zinc-400">{round.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-white mb-1">📍 Final Four & Championship</p>
            <p className="text-zinc-400">
              {marchMadnessInfo.finalFour.venue} • {marchMadnessInfo.finalFour.city}
            </p>
          </div>
        </div>
      </section>

      {/* Betting Tips */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          🧠 March Madness Betting Tips
        </h2>
        <p className="text-zinc-400 text-center mb-8">
          Proven strategies to sharpen your tournament bets
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bettingTips.map((tip) => (
            <Card key={tip.title} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                <p className="text-sm text-zinc-400">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bet Types Guide */}
      <section className="bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            📖 How to Bet on March Madness
          </h2>
          <p className="text-zinc-400 text-center mb-8">
            A beginner-friendly guide to the most popular bet types
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {popularBetTypes.map((bet) => (
              <div
                key={bet.name}
                className="p-5 bg-zinc-800/50 rounded-lg border border-zinc-700/50"
              >
                <h3 className="text-lg font-bold text-white mb-2">{bet.name}</h3>
                <p className="text-sm text-zinc-400 mb-3">{bet.description}</p>
                <div className="p-2 bg-zinc-900 rounded text-xs text-zinc-500 font-mono">
                  💡 {bet.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20 p-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Bet on March Madness?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Sign up with one of our recommended sportsbooks and get exclusive bonuses
            for the NCAA Tournament.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={highlightedPromos[0]?.affiliateUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors text-lg"
            >
              Get $200 Free → DraftKings
            </a>
            <Link
              href="/sportsbooks"
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg transition-colors text-lg border border-zinc-700"
            >
              Compare All Sportsbooks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
