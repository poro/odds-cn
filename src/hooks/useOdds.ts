'use client';

import { useState, useEffect, useCallback } from 'react';

export interface OddsLine {
  sportsbook: string;
  spread: string;
  spreadOdds: number;
  moneyline: number;
  total: string;
  totalOdds: number;
}

export interface OddsGame {
  id: string;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  startTime: string;
  status: 'upcoming' | 'live' | 'final';
  odds: OddsLine[];
}

interface OddsResponse {
  source: string;
  sport: string;
  count: number;
  games: OddsGame[];
  lastUpdated: string;
}

interface UseOddsOptions {
  sport?: string;
  refreshInterval?: number; // ms, default 5 min
}

export function useOdds(options: UseOddsOptions = {}) {
  const { sport, refreshInterval = 5 * 60 * 1000 } = options;
  const [games, setGames] = useState<OddsGame[]>([]);
  const [source, setSource] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const params = sport ? `?sport=${sport}` : '';
      const res = await fetch(`/api/odds${params}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: OddsResponse = await res.json();
      setGames(data.games);
      setSource(data.source);
      setLastUpdated(new Date(data.lastUpdated));
      setError(null);
    } catch (err) {
      console.error('Error fetching odds:', err);
      setError('Failed to load odds');
    } finally {
      setIsLoading(false);
    }
  }, [sport]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [fetchData, refreshInterval]);

  return {
    games,
    source,
    isLoading,
    lastUpdated,
    error,
    refetch: fetchData,
  };
}
