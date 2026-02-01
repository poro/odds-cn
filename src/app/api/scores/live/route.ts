import { NextResponse } from 'next/server';
import { fetchLiveGames } from '@/lib/espn';

export const dynamic = 'force-dynamic';
export const revalidate = 30; // Revalidate every 30 seconds for live games

export async function GET() {
  try {
    const games = await fetchLiveGames();
    
    return NextResponse.json({
      count: games.length,
      games,
      lastUpdated: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
      },
    });
  } catch (error) {
    console.error('Live scores API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch live scores' },
      { status: 500 }
    );
  }
}
