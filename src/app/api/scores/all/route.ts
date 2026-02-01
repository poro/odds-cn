import { NextResponse } from 'next/server';
import { fetchAllScores } from '@/lib/espn';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function GET() {
  try {
    const games = await fetchAllScores();
    
    // Group by status
    const live = games.filter(g => g.isLive);
    const scheduled = games.filter(g => g.status === 'scheduled');
    const final = games.filter(g => g.status === 'final');
    
    return NextResponse.json({
      total: games.length,
      live: {
        count: live.length,
        games: live,
      },
      scheduled: {
        count: scheduled.length,
        games: scheduled.slice(0, 20), // Limit scheduled games
      },
      final: {
        count: final.length,
        games: final.slice(0, 10), // Limit completed games
      },
      lastUpdated: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('All scores API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scores' },
      { status: 500 }
    );
  }
}
