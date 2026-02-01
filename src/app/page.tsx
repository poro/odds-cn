import { games, sportsbooks, promos } from '@/lib/mock-data';
import { OddsTable } from '@/components/odds-table';
import { SportsbookCardCompact } from '@/components/sportsbook-card';
import { SportTabs } from '@/components/sport-tabs';
import { LiveScoresTicker } from '@/components/live-scores';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  const liveGames = games.filter(g => g.status === 'live');
  const upcomingGames = games.filter(g => g.status === 'upcoming');
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              🔥 Updated in Real-Time
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compare <span className="text-emerald-400">Betting Odds</span> Instantly
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Find the best lines across top sportsbooks. Never leave money on the table.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{games.length}+</div>
              <div className="text-xs text-zinc-500 uppercase">Games Today</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{sportsbooks.length}</div>
              <div className="text-xs text-zinc-500 uppercase">Sportsbooks</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">8</div>
              <div className="text-xs text-zinc-500 uppercase">Sports</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">24/7</div>
              <div className="text-xs text-zinc-500 uppercase">Live Updates</div>
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
          {/* Odds Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Games */}
            {liveGames.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <h2 className="text-xl font-bold text-white">Live Now</h2>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                    {liveGames.length} {liveGames.length === 1 ? 'game' : 'games'}
                  </Badge>
                </div>
                <div className="space-y-4">
                  {liveGames.map((game) => (
                    <OddsTable key={game.id} game={game} />
                  ))}
                </div>
              </section>
            )}

            {/* Upcoming Games */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">📅 Upcoming Games</h2>
                  <span className="text-sm text-zinc-500">({upcomingGames.length} games)</span>
                </div>
              </div>
              <div className="space-y-4">
                {upcomingGames.slice(0, 8).map((game) => (
                  <OddsTable key={game.id} game={game} />
                ))}
              </div>
              
              {upcomingGames.length > 8 && (
                <div className="mt-6 text-center">
                  <Link 
                    href="/sports/nfl" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                  >
                    View All Games →
                  </Link>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
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
