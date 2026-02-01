import { NextRequest, NextResponse } from 'next/server';
import { fetchScores, SPORT_CONFIG } from '@/lib/espn';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sport: string }> }
) {
  try {
    const { sport } = await params;
    const sportKey = sport.toLowerCase();
    
    // Validate sport
    if (!SPORT_CONFIG[sportKey]) {
      return NextResponse.json(
        { 
          error: 'Invalid sport', 
          validSports: Object.keys(SPORT_CONFIG) 
        },
        { status: 400 }
      );
    }
    
    const games = await fetchScores(sportKey);
    
    return NextResponse.json({
      sport: sportKey,
      league: SPORT_CONFIG[sportKey].league,
      count: games.length,
      games,
      lastUpdated: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Scores API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scores' },
      { status: 500 }
    );
  }
}
