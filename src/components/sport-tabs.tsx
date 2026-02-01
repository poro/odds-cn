'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sportCategories } from '@/lib/mock-data';

interface SportTabsProps {
  activeLeague?: string;
}

export function SportTabs({ activeLeague }: SportTabsProps) {
  const pathname = usePathname();
  
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Link
        href="/"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
          pathname === '/'
            ? 'bg-emerald-500 text-white'
            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
        }`}
      >
        🔥 All Sports
      </Link>
      {sportCategories.map((sport) => (
        <Link
          key={sport.id}
          href={`/sports/${sport.id}`}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
            activeLeague === sport.league || pathname === `/sports/${sport.id}`
              ? 'bg-emerald-500 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
          }`}
        >
          <span>{sport.icon}</span>
          {sport.name}
        </Link>
      ))}
    </div>
  );
}
