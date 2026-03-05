import { NextRequest, NextResponse } from 'next/server';
import { fetchOdds, fetchAllOdds, isOddsApiConfigured, ODDS_SPORT_MAP } from '@/lib/odds-api';
import { games as mockGames } from '@/lib/mock-data';

export const dynamic = 'force-dynamic';
export const revalidate = 300; // 5 minutes

export async function GET(request: NextRequest) {
  const sport = request.nextUrl.searchParams.get('sport');

  try {
    if (isOddsApiConfigured()) {
      // Use real odds API
      const games = sport ? await fetchOdds(sport) : await fetchAllOdds();
      return NextResponse.json({
        source: 'the-odds-api',
        sport: sport || 'all',
        count: games.length,
        games,
        lastUpdated: new Date().toISOString(),
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      });
    } else {
      // Fallback to mock data
      const filtered = sport
        ? mockGames.filter(g => {
            const sportMap: Record<string, string[]> = {
              nfl: ['NFL'],
              nba: ['NBA'],
              mlb: ['MLB'],
              nhl: ['NHL'],
              ncaaf: ['NCAAF'],
              ncaab: ['NCAAB'],
              soccer: ['Premier League', 'La Liga'],
              mma: ['UFC'],
            };
            return sportMap[sport]?.includes(g.league);
          })
        : mockGames;

      return NextResponse.json({
        source: 'mock',
        sport: sport || 'all',
        count: filtered.length,
        games: filtered,
        lastUpdated: new Date().toISOString(),
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      });
    }
  } catch (error) {
    console.error('Odds API route error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch odds', source: 'error' },
      { status: 500 }
    );
  }
}
