'use client';

import { useLiveScores } from '@/hooks/useLiveScores';
import { LiveScoreCard } from '@/components/LiveScoreCard';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function HomeLiveGames() {
  const { liveGames, scheduledGames, isLoading, lastUpdated } = useLiveScores();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-zinc-600 rounded-full animate-pulse" />
          <h2 className="text-xl font-bold text-white">Loading Live Games...</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 animate-pulse">
              <div className="h-4 bg-zinc-700 rounded w-16 mb-3"></div>
              <div className="space-y-2">
                <div className="h-8 bg-zinc-800 rounded"></div>
                <div className="h-8 bg-zinc-800 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Group live games by sport
  const liveByLeague = liveGames.reduce((acc, game) => {
    if (!acc[game.league]) acc[game.league] = [];
    acc[game.league].push(game);
    return acc;
  }, {} as Record<string, typeof liveGames>);

  return (
    <div className="space-y-8">
      {/* Live Games Section */}
      {liveGames.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <h2 className="text-xl font-bold text-white">Live Now</h2>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
              {liveGames.length} {liveGames.length === 1 ? 'game' : 'games'}
            </Badge>
          </div>
          
          {/* Show games grouped by league */}
          {Object.entries(liveByLeague).map(([league, games]) => (
            <div key={league} className="mb-6">
              <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">{league}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {games.map(game => (
                  <LiveScoreCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Upcoming Games Section */}
      {scheduledGames.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">📅 Upcoming Games</h2>
              <span className="text-sm text-zinc-500">({scheduledGames.length})</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {scheduledGames.slice(0, 8).map(game => (
              <LiveScoreCard key={game.id} game={game} />
            ))}
          </div>
          
          {scheduledGames.length > 8 && (
            <div className="mt-6 text-center">
              <Link 
                href="/sports/nba" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
              >
                View All Games →
              </Link>
            </div>
          )}
        </section>
      )}

      {/* No games state */}
      {liveGames.length === 0 && scheduledGames.length === 0 && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-xl font-bold text-white mb-2">No Games Right Now</h2>
          <p className="text-zinc-400 mb-4">Check back later for live scores and upcoming games.</p>
          <Link 
            href="/sportsbooks"
            className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
          >
            View Sportsbooks
          </Link>
        </div>
      )}

      {/* Last Updated */}
      {lastUpdated && (
        <div className="text-center text-xs text-zinc-500">
          Live scores update automatically • Last updated: {lastUpdated.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
      )}
    </div>
  );
}
