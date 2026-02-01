import { sportsbooks, promos } from '@/lib/mock-data';
import { superBowlInfo, superBowlPromos } from '@/lib/super-bowl-data';
import { SportsbookCardCompact } from '@/components/sportsbook-card';
import { SportTabs } from '@/components/sport-tabs';
import { LiveScoresTicker } from '@/components/live-scores';
import { HomeLiveGames } from '@/components/HomeLiveGames';
import { SuperBowlCountdown } from '@/components/super-bowl-countdown';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  const topSportsbooks = sportsbooks.slice(0, 3);
  const topBonus = sportsbooks.reduce((max, book) => {
    const amount = parseInt(book.bonusAmount.replace(/\D/g, ''));
    const maxAmount = parseInt(max.bonusAmount.replace(/\D/g, ''));
    return amount > maxAmount ? book : max;
  }, sportsbooks[0]);
  const exclusivePromo = promos.find(p => p.type === 'exclusive');

  return (
    <div className="min-h-screen">
      {/* Live Scores Ticker */}
      <LiveScoresTicker />

      {/* Super Bowl Banner */}
      <section className="bg-gradient-to-r from-red-950 via-zinc-900 to-green-950 border-b border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                🏈 SUPER BOWL LIX
              </Badge>
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  <span className="text-red-400">Chiefs</span> vs <span className="text-green-400">Eagles</span>
                </h2>
                <p className="text-sm text-zinc-400">{superBowlInfo.kickoff} • {superBowlInfo.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <SuperBowlCountdown targetDate={superBowlInfo.date} />
              </div>
              <Link 
                href="/super-bowl"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                Bet Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              🔴 Real-Time Live Scores
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live <span className="text-emerald-400">Sports Scores</span> & Odds
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Real-time scores from ESPN. Compare betting odds across top sportsbooks.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">8</div>
              <div className="text-xs text-zinc-500 uppercase">Sports</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{sportsbooks.length}</div>
              <div className="text-xs text-zinc-500 uppercase">Sportsbooks</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400">LIVE</div>
              <div className="text-xs text-zinc-500 uppercase">Scores</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">30s</div>
              <div className="text-xs text-zinc-500 uppercase">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sport Tabs */}
        <div className="mb-8">
          <SportTabs />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Games Section */}
          <div className="lg:col-span-2">
            <HomeLiveGames />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Super Bowl Promo */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-xl p-6">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-3">
                🏈 Super Bowl LIX
              </Badge>
              <h3 className="text-lg font-bold text-white mb-2">Chiefs vs Eagles</h3>
              <p className="text-sm text-zinc-400 mb-4">Get $5,000+ in bonuses for the big game. Best odds, props & picks.</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-zinc-900/50 rounded-lg p-2 text-center">
                  <div className="text-xs text-zinc-500">KC Spread</div>
                  <div className="font-bold text-red-400">-1.5</div>
                </div>
                <div className="bg-zinc-900/50 rounded-lg p-2 text-center">
                  <div className="text-xs text-zinc-500">PHI Spread</div>
                  <div className="font-bold text-green-400">+1.5</div>
                </div>
              </div>
              <Link
                href="/super-bowl"
                className="block w-full text-center py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Super Bowl Odds →
              </Link>
            </div>

            {/* Exclusive Promo */}
            {exclusivePromo && (
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-6">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-3">
                  ⭐ Exclusive Offer
                </Badge>
                <h3 className="text-lg font-bold text-white mb-2">{exclusivePromo.title}</h3>
                <p className="text-sm text-zinc-400 mb-4">{exclusivePromo.description}</p>
                {exclusivePromo.code && (
                  <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded-lg p-3 mb-4 text-center">
                    <div className="text-xs text-zinc-500 uppercase mb-1">Use Code</div>
                    <div className="text-lg font-mono font-bold text-yellow-400">{exclusivePromo.code}</div>
                  </div>
                )}
                <a
                  href={sportsbooks[0].affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors"
                >
                  Claim Now →
                </a>
              </div>
            )}

            {/* Top Sportsbooks */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                🏆 Top Sportsbooks
              </h3>
              <div className="space-y-4">
                {topSportsbooks.map((book, index) => (
                  <SportsbookCardCompact key={book.id} sportsbook={book} rank={index + 1} />
                ))}
              </div>
              <Link 
                href="/sportsbooks"
                className="block text-center text-sm text-emerald-400 hover:text-emerald-300 mt-4"
              >
                Compare All Sportsbooks →
              </Link>
            </div>

            {/* Best Bonus Box */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  🎁 Best Bonus
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Up to {topBonus.bonusAmount}</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-2">{topBonus.bonus}</p>
              <p className="text-sm text-zinc-400 mb-4">from {topBonus.name}</p>
              {topBonus.bonusCode && (
                <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded-lg p-2 mb-4 text-center">
                  <span className="text-xs text-zinc-500">Code: </span>
                  <span className="font-mono font-bold text-emerald-400">{topBonus.bonusCode}</span>
                </div>
              )}
              <a
                href={topBonus.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                Claim Bonus →
              </a>
              <p className="text-xs text-zinc-500 text-center mt-2">21+ • T&Cs Apply</p>
            </div>

            {/* Quick Links */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">🧮 Betting Tools</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/calculators" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Parlay Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Odds Converter
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Hedge Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Implied Probability
                  </Link>
                </li>
              </ul>
            </div>

            {/* Betting Guides */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">📚 Betting Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/guides/how-to-read-odds" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> How to Read Odds
                  </Link>
                </li>
                <li>
                  <Link href="/guides/point-spreads-explained" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Point Spread Explained
                  </Link>
                </li>
                <li>
                  <Link href="/guides/bankroll-management" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Bankroll Management
                  </Link>
                </li>
                <li>
                  <Link href="/guides/nfl-betting-guide" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> NFL Betting Guide
                  </Link>
                </li>
              </ul>
              <Link 
                href="/guides"
                className="block text-center text-sm text-emerald-400 hover:text-emerald-300 mt-4"
              >
                View All Guides →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
