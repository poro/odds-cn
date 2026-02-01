import { games, sportsbooks } from '@/lib/mock-data';
import { OddsTable } from '@/components/odds-table';
import { SportsbookCardCompact } from '@/components/sportsbook-card';
import { SportTabs } from '@/components/sport-tabs';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  const liveGames = games.filter(g => g.status === 'live');
  const upcomingGames = games.filter(g => g.status === 'upcoming');
  const topSportsbooks = sportsbooks.slice(0, 3);

  return (
    <div className="min-h-screen">
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
                  <h2 className="text-xl font-bold text-white">🔴 Live Now</h2>
                  <span className="text-sm text-zinc-500">({liveGames.length} games)</span>
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
                {upcomingGames.map((game) => (
                  <OddsTable key={game.id} game={game} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Top Sportsbooks */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                🏆 Top Sportsbooks
              </h3>
              <div className="space-y-4">
                {topSportsbooks.map((book) => (
                  <SportsbookCardCompact key={book.id} sportsbook={book} />
                ))}
              </div>
              <Link 
                href="/sportsbooks"
                className="block text-center text-sm text-emerald-400 hover:text-emerald-300 mt-4"
              >
                View All Sportsbooks →
              </Link>
            </div>

            {/* Best Bonus Box */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">🎁 Best Bonus Right Now</h3>
              <p className="text-3xl font-bold text-emerald-400 mb-2">$1,500</p>
              <p className="text-sm text-zinc-400 mb-4">First Bet Insurance from BetMGM</p>
              <a
                href="#affiliate-betmgm"
                className="block w-full text-center py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                Claim Now →
              </a>
              <p className="text-xs text-zinc-500 text-center mt-2">21+ • T&Cs Apply</p>
            </div>

            {/* Quick Links */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">📚 Betting Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/guides" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> How to Read Odds
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Point Spread Explained
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> Bankroll Management
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-sm text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
                    <span>→</span> NFL Betting Guide
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
