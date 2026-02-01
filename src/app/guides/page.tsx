import { guides } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Betting Guides - Learn Sports Betting | Odds.cn',
  description: 'Master sports betting with our comprehensive guides. Learn about odds, spreads, bankroll management, and advanced betting strategies.',
};

export default function GuidesPage() {
  const beginnerGuides = guides.filter(g => g.category === 'Beginner');
  const strategyGuides = guides.filter(g => g.category === 'Strategy');
  const advancedGuides = guides.filter(g => g.category === 'Advanced' || g.category === 'Sport-Specific');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              📚 Free Learning Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Betting <span className="text-emerald-400">Guides</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              From beginner basics to advanced strategies. Learn everything you need to 
              become a smarter sports bettor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Quick Start */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">New to Sports Betting?</h2>
                <p className="text-zinc-400 max-w-xl">
                  Start with our beginner&apos;s guide to understand the fundamentals of sports betting, 
                  odds formats, and how to place your first bet.
                </p>
              </div>
              <Link 
                href="/guides/sports-betting-101"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Start Learning →
              </Link>
            </div>
          </div>
        </section>

        {/* Beginner Guides */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🎓</span>
            <h2 className="text-2xl font-bold text-white">Beginner Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beginnerGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

        {/* Strategy Guides */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🎯</span>
            <h2 className="text-2xl font-bold text-white">Betting Strategies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategyGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

        {/* Advanced & Sport-Specific */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <h2 className="text-2xl font-bold text-white">Advanced & Sport-Specific</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advancedGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

        {/* Topics Grid */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TopicCard icon="📊" title="Understanding Odds" count={3} />
            <TopicCard icon="🏈" title="NFL Betting" count={5} />
            <TopicCard icon="🏀" title="NBA Betting" count={4} />
            <TopicCard icon="⚽" title="Soccer Betting" count={6} />
            <TopicCard icon="💰" title="Bankroll Tips" count={2} />
            <TopicCard icon="📈" title="Line Shopping" count={2} />
            <TopicCard icon="🎲" title="Prop Bets" count={3} />
            <TopicCard icon="⚡" title="Live Betting" count={2} />
          </div>
        </section>
      </div>
    </div>
  );
}

function GuideCard({ guide }: { guide: typeof guides[0] }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-colors group">
      <CardContent className="p-6">
        <Badge 
          variant="outline" 
          className={`mb-3 ${
            guide.category === 'Beginner' 
              ? 'text-blue-400 border-blue-500/30' 
              : guide.category === 'Strategy' 
                ? 'text-purple-400 border-purple-500/30' 
                : 'text-orange-400 border-orange-500/30'
          }`}
        >
          {guide.category}
        </Badge>
        <h3 className="font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {guide.title}
        </h3>
        <p className="text-sm text-zinc-400 mb-4">{guide.excerpt}</p>
        <Link 
          href={`/guides/${guide.slug}`}
          className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
        >
          Read Guide →
        </Link>
      </CardContent>
    </Card>
  );
}

function TopicCard({ icon, title, count }: { icon: string; title: string; count: number }) {
  return (
    <Link 
      href="/guides"
      className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-xl p-4 text-center transition-colors group"
    >
      <span className="text-3xl block mb-2">{icon}</span>
      <h3 className="font-medium text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-xs text-zinc-500">{count} guides</p>
    </Link>
  );
}
