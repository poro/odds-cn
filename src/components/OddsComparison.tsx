'use client';

import { useOdds, OddsGame } from '@/hooks/useOdds';
import { OddsTable } from '@/components/odds-table';
import { Badge } from '@/components/ui/badge';

interface OddsComparisonProps {
  sport?: string;
  limit?: number;
}

export function OddsComparison({ sport, limit = 10 }: OddsComparisonProps) {
  const { games, source, isLoading, lastUpdated, error, refetch } = useOdds({ sport });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 animate-pulse">
            <div className="h-4 bg-zinc-700 rounded w-20 mb-4"></div>
            <div className="h-20 bg-zinc-800 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error || games.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">📊</div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {error ? 'Unable to Load Odds' : 'No Odds Available'}
        </h3>
        <p className="text-zinc-500 text-sm">
          {error || 'Check back closer to game time for betting lines.'}
        </p>
        {error && (
          <button
            onClick={() => refetch()}
            className="mt-4 text-sm text-emerald-400 hover:text-emerald-300"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  const displayGames = games.slice(0, limit);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-white">⚡ Odds Comparison</h2>
          <Badge className={`text-xs ${
            source === 'the-odds-api' 
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
              : 'bg-zinc-700/50 text-zinc-400 border-zinc-600'
          }`}>
            {source === 'the-odds-api' ? '🔴 Live Odds' : 'Sample'}
          </Badge>
        </div>
        <button
          onClick={() => refetch()}
          className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
        >
          Refresh
        </button>
      </div>

      <div className="space-y-4">
        {displayGames.map(game => (
          <OddsTable key={game.id} game={game} />
        ))}
      </div>

      <div className="text-center pt-4 border-t border-zinc-800">
        <span className="text-xs text-zinc-500">
          {source === 'the-odds-api' ? 'Powered by The Odds API' : 'Sample odds data'} 
          {lastUpdated && (
            <> • Updated {lastUpdated.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</>
          )}
        </span>
      </div>
    </div>
  );
}
