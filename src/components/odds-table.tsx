'use client';

import { Game } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

interface OddsTableProps {
  game: Game;
}

function formatOdds(odds: number): string {
  return odds > 0 ? `+${odds}` : `${odds}`;
}

function getBestOdds(game: Game, type: 'moneyline' | 'spreadOdds' | 'totalOdds'): number {
  return Math.max(...game.odds.map(o => o[type]));
}

export function OddsTable({ game }: OddsTableProps) {
  const bestMoneyline = getBestOdds(game, 'moneyline');
  const bestSpread = getBestOdds(game, 'spreadOdds');
  const bestTotal = getBestOdds(game, 'totalOdds');

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      {/* Game Header */}
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs bg-zinc-800 text-zinc-300 border-zinc-700">
              {game.league}
            </Badge>
            {game.status === 'live' && (
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                🔴 LIVE
              </Badge>
            )}
          </div>
          <span className="text-xs text-zinc-500">
            {new Date(game.startTime).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit'
            })}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{game.awayTeam}</span>
              {game.status === 'live' && (
                <span className="text-emerald-400 font-bold">{game.awayScore}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{game.homeTeam}</span>
              {game.status === 'live' && (
                <span className="text-emerald-400 font-bold">{game.homeScore}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Odds Grid */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-zinc-500 uppercase">
              <th className="text-left px-4 py-3 font-medium">Sportsbook</th>
              <th className="text-center px-4 py-3 font-medium">Spread</th>
              <th className="text-center px-4 py-3 font-medium">Moneyline</th>
              <th className="text-center px-4 py-3 font-medium">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {game.odds.map((line) => (
              <tr key={line.sportsbook} className="hover:bg-zinc-800/50 transition-colors">
                <td className="px-4 py-3">
                  <span className="font-medium text-zinc-300">{line.sportsbook}</span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-colors ${
                    line.spreadOdds === bestSpread 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}>
                    <span className="block text-xs text-zinc-500">{line.spread}</span>
                    <span>{formatOdds(line.spreadOdds)}</span>
                  </button>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-colors ${
                    line.moneyline === bestMoneyline 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}>
                    {formatOdds(line.moneyline)}
                  </button>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-colors ${
                    line.totalOdds === bestTotal 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}>
                    <span className="block text-xs text-zinc-500">{line.total}</span>
                    <span>{formatOdds(line.totalOdds)}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface OddsCompactProps {
  games: Game[];
}

export function OddsCompact({ games }: OddsCompactProps) {
  return (
    <div className="space-y-4">
      {games.map((game) => (
        <OddsTable key={game.id} game={game} />
      ))}
    </div>
  );
}
