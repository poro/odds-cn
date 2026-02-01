'use client';

import { liveScores } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';

export function LiveScores() {
  if (liveScores.length === 0) return null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <h3 className="text-sm font-semibold text-white">Live Scores</h3>
      </div>
      
      <div className="space-y-3">
        {liveScores.map((game) => (
          <div 
            key={game.id}
            className="bg-zinc-800/50 rounded-lg p-3 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs text-zinc-400 border-zinc-700">
                {game.league}
              </Badge>
              <div className="flex items-center gap-1">
                {game.status === 'live' && (
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                )}
                <span className="text-xs text-zinc-500">
                  {game.status === 'halftime' ? 'HT' : game.time}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-300">{game.awayTeam}</span>
                  <span className={`font-mono font-semibold ${game.awayScore > game.homeScore ? 'text-emerald-400' : 'text-zinc-400'}`}>
                    {game.awayScore}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-zinc-300">{game.homeTeam}</span>
                  <span className={`font-mono font-semibold ${game.homeScore > game.awayScore ? 'text-emerald-400' : 'text-zinc-400'}`}>
                    {game.homeScore}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-2 pt-2 border-t border-zinc-700">
              <span className="text-xs text-zinc-500">{game.period}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-zinc-800 text-center">
        <span className="text-xs text-zinc-500">
          Updates every 30 seconds • 
          <span className="text-emerald-400 ml-1 cursor-pointer hover:underline">View All</span>
        </span>
      </div>
    </div>
  );
}

export function LiveScoresTicker() {
  if (liveScores.length === 0) return null;

  return (
    <div className="bg-zinc-900 border-y border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-6 py-2 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-zinc-400 uppercase">Live</span>
          </div>
          
          {liveScores.map((game) => (
            <div 
              key={game.id}
              className="flex items-center gap-3 flex-shrink-0 px-3 py-1 bg-zinc-800/50 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors"
            >
              <Badge variant="outline" className="text-[10px] text-zinc-500 border-zinc-700 px-1.5 py-0">
                {game.league}
              </Badge>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-zinc-400">{game.awayTeam}</span>
                <span className={`font-mono font-semibold ${game.awayScore > game.homeScore ? 'text-emerald-400' : 'text-zinc-300'}`}>
                  {game.awayScore}
                </span>
                <span className="text-zinc-600">-</span>
                <span className={`font-mono font-semibold ${game.homeScore > game.awayScore ? 'text-emerald-400' : 'text-zinc-300'}`}>
                  {game.homeScore}
                </span>
                <span className="text-zinc-400">{game.homeTeam}</span>
              </div>
              <span className="text-[10px] text-zinc-500">{game.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
