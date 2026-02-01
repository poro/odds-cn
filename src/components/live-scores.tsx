'use client';

import { useLiveScores, useLiveTicker } from '@/hooks/useLiveScores';
import { LiveScoreCard, LiveScoreCardCompact } from '@/components/LiveScoreCard';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function LiveScores() {
  const { liveGames, isLoading, lastUpdated, refetch } = useLiveScores();

  if (isLoading) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-zinc-600 rounded-full animate-pulse" />
          <h3 className="text-sm font-semibold text-white">Loading Scores...</h3>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-zinc-800/50 rounded-lg p-3 animate-pulse">
              <div className="h-4 bg-zinc-700 rounded w-16 mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-zinc-700 rounded w-32"></div>
                <div className="h-3 bg-zinc-700 rounded w-28"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (liveGames.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-zinc-500 rounded-full" />
          <h3 className="text-sm font-semibold text-white">Live Scores</h3>
        </div>
        <div className="text-center py-6">
          <p className="text-zinc-500 text-sm mb-2">No live games right now</p>
          <Link href="/" className="text-xs text-emerald-400 hover:underline">
            View upcoming games →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <h3 className="text-sm font-semibold text-white">Live Scores</h3>
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
            {liveGames.length}
          </Badge>
        </div>
        <button 
          onClick={() => refetch()}
          className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors"
        >
          Refresh
        </button>
      </div>
      
      <div className="space-y-3">
        {liveGames.slice(0, 5).map((game) => (
          <LiveScoreCard key={game.id} game={game} />
        ))}
      </div>
      
      {liveGames.length > 5 && (
        <div className="mt-4 text-center">
          <Link 
            href="/"
            className="text-sm text-emerald-400 hover:text-emerald-300"
          >
            View all {liveGames.length} live games →
          </Link>
        </div>
      )}
      
      <div className="mt-4 pt-3 border-t border-zinc-800 text-center">
        <span className="text-xs text-zinc-500">
          Updates every 30 seconds
          {lastUpdated && (
            <> • Last: {lastUpdated.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</>
          )}
        </span>
      </div>
    </div>
  );
}

export function LiveScoresTicker() {
  const { games, isLoading } = useLiveTicker();

  if (isLoading) {
    return (
      <div className="bg-zinc-900 border-y border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-2">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-2 h-2 bg-zinc-600 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-zinc-500 uppercase">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (games.length === 0) {
    return null; // Don't show ticker if no live games
  }

  return (
    <div className="bg-zinc-900 border-y border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 py-2 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-semibold text-zinc-400 uppercase">Live</span>
          </div>
          
          {games.map((game) => (
            <LiveScoreCardCompact key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Sport-specific live scores component
interface SportLiveScoresProps {
  sport: string;
}

export function SportLiveScores({ sport }: SportLiveScoresProps) {
  const { games, liveGames, scheduledGames, completedGames, isLoading, lastUpdated, refetch } = useLiveScores({ sport });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 animate-pulse">
            <div className="h-4 bg-zinc-700 rounded w-20 mb-4"></div>
            <div className="space-y-3">
              <div className="h-8 bg-zinc-800 rounded"></div>
              <div className="h-8 bg-zinc-800 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">📺</div>
        <h3 className="text-lg font-semibold text-white mb-2">No Games Today</h3>
        <p className="text-zinc-500 text-sm">Check back later for upcoming games and odds.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Live Games */}
      {liveGames.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <h2 className="text-xl font-bold text-white">Live Now</h2>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
              {liveGames.length}
            </Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {liveGames.map(game => (
              <LiveScoreCard key={game.id} game={game} showOddsLink={false} />
            ))}
          </div>
        </section>
      )}

      {/* Scheduled Games */}
      {scheduledGames.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-white">📅 Upcoming</h2>
            <span className="text-sm text-zinc-500">({scheduledGames.length})</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {scheduledGames.slice(0, 8).map(game => (
              <LiveScoreCard key={game.id} game={game} showOddsLink={false} />
            ))}
          </div>
        </section>
      )}

      {/* Completed Games */}
      {completedGames.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-white">✓ Final</h2>
            <span className="text-sm text-zinc-500">({completedGames.length})</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {completedGames.slice(0, 4).map(game => (
              <LiveScoreCard key={game.id} game={game} showOddsLink={false} />
            ))}
          </div>
        </section>
      )}

      {/* Last updated */}
      <div className="text-center pt-4 border-t border-zinc-800">
        <button 
          onClick={() => refetch()}
          className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
        >
          Last updated: {lastUpdated?.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' })} • Click to refresh
        </button>
      </div>
    </div>
  );
}
