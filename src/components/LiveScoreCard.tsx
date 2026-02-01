'use client';

import { Badge } from '@/components/ui/badge';
import type { NormalizedGame } from '@/lib/espn';
import Image from 'next/image';
import Link from 'next/link';

interface LiveScoreCardProps {
  game: NormalizedGame;
  showOddsLink?: boolean;
}

export function LiveScoreCard({ game, showOddsLink = true }: LiveScoreCardProps) {
  const isLive = game.isLive;
  const isFinal = game.status === 'final';
  const isScheduled = game.status === 'scheduled';

  // Format start time for scheduled games
  const formatStartTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Format date for scheduled games
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    }
    if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    }
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Get sport slug for linking
  const getSportSlug = (league: string) => {
    const mapping: Record<string, string> = {
      'NFL': 'nfl',
      'NBA': 'nba',
      'MLB': 'mlb',
      'NHL': 'nhl',
      'NCAAF': 'ncaaf',
      'NCAAB': 'ncaab',
      'Premier League': 'soccer',
      'UFC': 'mma',
    };
    return mapping[league] || 'nfl';
  };

  return (
    <div 
      className={`
        bg-zinc-900 border rounded-xl p-4 transition-all
        ${isLive ? 'border-red-500/50 shadow-lg shadow-red-500/10' : 'border-zinc-800'}
        hover:border-zinc-700
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <Badge 
          variant="outline" 
          className={`text-xs ${isLive ? 'text-red-400 border-red-500/50' : 'text-zinc-400 border-zinc-700'}`}
        >
          {game.league}
        </Badge>
        
        <div className="flex items-center gap-2">
          {isLive && (
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-semibold text-red-400 uppercase">Live</span>
            </div>
          )}
          
          {isScheduled && (
            <span className="text-xs text-zinc-500">
              {formatDate(game.startTime)} • {formatStartTime(game.startTime)}
            </span>
          )}
          
          {isFinal && (
            <span className="text-xs text-zinc-500 font-medium">Final</span>
          )}
        </div>
      </div>

      {/* Teams */}
      <div className="space-y-2">
        {/* Away Team */}
        <TeamRow 
          team={game.awayTeam}
          isWinning={isLive && game.awayTeam.score !== null && game.homeTeam.score !== null && game.awayTeam.score > game.homeTeam.score}
          isWinner={isFinal && game.awayTeam.score !== null && game.homeTeam.score !== null && game.awayTeam.score > game.homeTeam.score}
          showScore={!isScheduled}
        />
        
        {/* Home Team */}
        <TeamRow 
          team={game.homeTeam}
          isWinning={isLive && game.homeTeam.score !== null && game.awayTeam.score !== null && game.homeTeam.score > game.awayTeam.score}
          isWinner={isFinal && game.homeTeam.score !== null && game.awayTeam.score !== null && game.homeTeam.score > game.awayTeam.score}
          showScore={!isScheduled}
        />
      </div>

      {/* Footer - Game Clock / Status */}
      <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isLive && game.clock && (
            <>
              <span className="text-xs text-zinc-400">{game.period}</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs font-mono text-emerald-400">{game.clock}</span>
            </>
          )}
          {isLive && !game.clock && game.period && (
            <span className="text-xs text-zinc-400">{game.period}</span>
          )}
          {game.status === 'halftime' && (
            <span className="text-xs text-yellow-400 font-medium">Halftime</span>
          )}
          {isScheduled && game.venue && (
            <span className="text-xs text-zinc-500 truncate max-w-[200px]">{game.venue}</span>
          )}
          {isFinal && (
            <span className="text-xs text-zinc-500">{game.statusDetail}</span>
          )}
        </div>
        
        {showOddsLink && (
          <Link 
            href={`/sports/${getSportSlug(game.league)}`}
            className="text-xs text-emerald-400 hover:text-emerald-300 hover:underline"
          >
            View Odds →
          </Link>
        )}
      </div>
    </div>
  );
}

interface TeamRowProps {
  team: {
    name: string;
    shortName: string;
    abbreviation: string;
    logo: string;
    score: number | null;
  };
  isWinning: boolean;
  isWinner: boolean;
  showScore: boolean;
}

function TeamRow({ team, isWinning, isWinner, showScore }: TeamRowProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 relative flex-shrink-0">
          <Image
            src={team.logo}
            alt={team.name}
            fill
            className="object-contain"
            unoptimized // ESPN images are external
          />
        </div>
        <span className={`text-sm font-medium ${isWinning || isWinner ? 'text-white' : 'text-zinc-300'}`}>
          {team.shortName}
        </span>
      </div>
      
      {showScore && (
        <span 
          className={`
            text-lg font-mono font-bold tabular-nums
            ${isWinning ? 'text-emerald-400' : ''}
            ${isWinner ? 'text-white' : ''}
            ${!isWinning && !isWinner ? 'text-zinc-400' : ''}
          `}
        >
          {team.score ?? '-'}
        </span>
      )}
    </div>
  );
}

// Compact version for ticker
export function LiveScoreCardCompact({ game }: { game: NormalizedGame }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 bg-zinc-800/50 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors">
      <Badge 
        variant="outline" 
        className="text-[10px] text-zinc-500 border-zinc-700 px-1.5 py-0"
      >
        {game.league}
      </Badge>
      
      <div className="flex items-center gap-2 text-xs">
        {/* Away Team */}
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 relative">
            <Image
              src={game.awayTeam.logo}
              alt={game.awayTeam.abbreviation}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="text-zinc-400">{game.awayTeam.abbreviation}</span>
          <span 
            className={`font-mono font-semibold ${
              game.awayTeam.score !== null && game.homeTeam.score !== null && game.awayTeam.score > game.homeTeam.score 
                ? 'text-emerald-400' 
                : 'text-zinc-300'
            }`}
          >
            {game.awayTeam.score ?? 0}
          </span>
        </div>
        
        <span className="text-zinc-600">-</span>
        
        {/* Home Team */}
        <div className="flex items-center gap-1.5">
          <span 
            className={`font-mono font-semibold ${
              game.homeTeam.score !== null && game.awayTeam.score !== null && game.homeTeam.score > game.awayTeam.score 
                ? 'text-emerald-400' 
                : 'text-zinc-300'
            }`}
          >
            {game.homeTeam.score ?? 0}
          </span>
          <span className="text-zinc-400">{game.homeTeam.abbreviation}</span>
          <div className="w-4 h-4 relative">
            <Image
              src={game.homeTeam.logo}
              alt={game.homeTeam.abbreviation}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
      
      {game.clock && (
        <span className="text-[10px] font-mono text-emerald-400">{game.clock}</span>
      )}
    </div>
  );
}
