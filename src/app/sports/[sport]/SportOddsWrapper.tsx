'use client';

import { OddsComparison } from '@/components/OddsComparison';

interface SportOddsWrapperProps {
  sport: string;
}

export function SportOddsWrapper({ sport }: SportOddsWrapperProps) {
  return <OddsComparison sport={sport} limit={8} />;
}
