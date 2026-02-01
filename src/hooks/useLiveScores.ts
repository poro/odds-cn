'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { NormalizedGame } from '@/lib/espn';

interface UseLiveScoresOptions {
  sport?: string;
  pollInterval?: number; // milliseconds
  enabled?: boolean;
}

interface UseLiveScoresResult {
  games: NormalizedGame[];
  liveGames: NormalizedGame[];
  scheduledGames: NormalizedGame[];
  completedGames: NormalizedGame[];
  isLoading: boolean;
  error: Error | null;
  lastUpdated: Date | null;
  refetch: () => Promise<void>;
}

export function useLiveScores(options: UseLiveScoresOptions = {}): UseLiveScoresResult {
  const { 
    sport, 
    pollInterval = 30000, // 30 seconds default
    enabled = true 
  } = options;

  const [games, setGames] = useState<NormalizedGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  const fetchGames = useCallback(async () => {
    if (!enabled) return;

    try {
      const url = sport 
        ? `/api/scores/${sport.toLowerCase()}`
        : '/api/scores/all';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch scores: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!isMountedRef.current) return;

      // Handle different response formats
      if (sport) {
        setGames(data.games || []);
      } else {
        // Combined response from /api/scores/all
        const allGames = [
          ...(data.live?.games || []),
          ...(data.scheduled?.games || []),
          ...(data.final?.games || []),
        ];
        setGames(allGames);
      }
      
      setLastUpdated(new Date(data.lastUpdated || Date.now()));
      setError(null);
    } catch (err) {
      if (!isMountedRef.current) return;
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [sport, enabled]);

  // Initial fetch
  useEffect(() => {
    isMountedRef.current = true;
    fetchGames();

    return () => {
      isMountedRef.current = false;
    };
  }, [fetchGames]);

  // Polling - only when tab is visible and there are live games
  useEffect(() => {
    if (!enabled) return;

    const hasLiveGames = games.some(g => g.isLive);
    
    const startPolling = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Poll more frequently if there are live games
      const interval = hasLiveGames ? pollInterval : pollInterval * 2;
      
      intervalRef.current = setInterval(() => {
        if (document.visibilityState === 'visible') {
          fetchGames();
        }
      }, interval);
    };

    startPolling();

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchGames(); // Immediately fetch when tab becomes visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled, pollInterval, fetchGames, games]);

  // Categorize games
  const liveGames = games.filter(g => g.isLive);
  const scheduledGames = games.filter(g => g.status === 'scheduled');
  const completedGames = games.filter(g => g.status === 'final');

  return {
    games,
    liveGames,
    scheduledGames,
    completedGames,
    isLoading,
    error,
    lastUpdated,
    refetch: fetchGames,
  };
}

// Hook specifically for the ticker (live games only)
export function useLiveTicker() {
  const [games, setGames] = useState<NormalizedGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchLive = async () => {
      try {
        const response = await fetch('/api/scores/live');
        if (!response.ok) return;
        const data = await response.json();
        if (mounted) {
          setGames(data.games || []);
          setIsLoading(false);
        }
      } catch {
        if (mounted) setIsLoading(false);
      }
    };

    fetchLive();

    // Poll every 30 seconds
    intervalRef.current = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetchLive();
      }
    }, 30000);

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchLive();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      mounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return { games, isLoading };
}
