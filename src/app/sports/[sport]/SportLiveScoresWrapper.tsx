'use client';

import { SportLiveScores } from '@/components/live-scores';

interface SportLiveScoresWrapperProps {
  sport: string;
}

export function SportLiveScoresWrapper({ sport }: SportLiveScoresWrapperProps) {
  return <SportLiveScores sport={sport} />;
}
