import { sportCategories, sportsbooks } from '@/lib/mock-data';
import { SportsbookCardCompact } from '@/components/sportsbook-card';
import { SportTabs } from '@/components/sport-tabs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SportLiveScoresWrapper } from './SportLiveScoresWrapper';

interface SportPageProps {
  params: Promise<{ sport: string }>;
}

export async function generateStaticParams() {
  return sportCategories.map((sport) => ({
    sport: sport.id,
  }));
}

export async function generateMetadata({ params }: SportPageProps) {
  const { sport } = await params;
  const category = sportCategories.find(s => s.id === sport);
  if (!category) return {};
  
  return {
    title: `${category.name} Scores & Odds - Live ${category.name} Betting Lines | Odds.cn`,
    description: `Live ${category.name} scores and betting odds from top sportsbooks. Find the best ${category.name} lines, spreads, and moneylines.`,
  };
}

export default async function SportPage({ params }: SportPageProps) {
  const { sport } = await params;
  const category = sportCategories.find(s => s.id === sport);
  
  if (!category) {
    notFound();
  }

  const topSportsbooks = sportsbooks.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {category.name} <span className="text-emerald-400">Live Scores</span>
              </h1>
              <p className="text-zinc-400">
                Real-time scores and betting odds from top sportsbooks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sport Tabs */}
        <div className="mb-8">
          <SportTabs activeLeague={category.league} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Scores Section */}
          <div className="lg:col-span-2">
            <SportLiveScoresWrapper sport={sport} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Top Sportsbooks */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                🏆 Best for {category.name}
              </h3>
              <div className="space-y-4">
                {topSportsbooks.map((book) => (
                  <SportsbookCardCompact key={book.id} sportsbook={book} />
                ))}
              </div>
              <Link 
                href="/sportsbooks"
                className="block text-center text-sm text-emerald-400 hover:text-emerald-300 mt-4"
              >
                View All Sportsbooks →
              </Link>
            </div>

            {/* Sport-specific info */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {category.icon} {category.name} Betting Tips
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Compare odds across multiple sportsbooks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Look for the best value on spreads
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Consider totals when scoring trends favor over/under
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Track line movements for sharp action
                </li>
              </ul>
            </div>

            {/* Betting Guide Link */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                📚 {category.name} Betting Guide
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                Master {category.name} betting with our comprehensive guide covering strategies, 
                key stats, and expert tips.
              </p>
              <Link
                href="/guides"
                className="block w-full text-center py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                Read Guide →
              </Link>
            </div>

            {/* DFS Lineup Builder CTA */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                📋 Build Your {category.name} Lineup
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                Playing DFS? Build optimal lineups for DraftKings & FanDuel with our free lineup optimizer.
              </p>
              <a
                href="https://lineup.guru"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
              >
                Build Lineup →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
