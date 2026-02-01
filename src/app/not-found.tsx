import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-emerald-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-zinc-400 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
            <Link href="/">View Live Odds</Link>
          </Button>
          <Button asChild variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
            <Link href="/sportsbooks">Compare Sportsbooks</Link>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500 mb-4">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sports/nfl" className="text-sm text-zinc-400 hover:text-emerald-400">NFL Odds</Link>
            <Link href="/sports/nba" className="text-sm text-zinc-400 hover:text-emerald-400">NBA Odds</Link>
            <Link href="/guides" className="text-sm text-zinc-400 hover:text-emerald-400">Betting Guides</Link>
            <Link href="/calculators" className="text-sm text-zinc-400 hover:text-emerald-400">Calculators</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
