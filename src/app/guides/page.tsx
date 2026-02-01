import { guides, sportsbooks } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Betting Guides - Learn Sports Betting from Experts | Odds.cn',
  description: 'Master sports betting with our comprehensive guides. Learn about odds, spreads, bankroll management, parlays, and advanced betting strategies from experts.',
  keywords: 'betting guides, how to bet, sports betting 101, betting odds explained, point spread, bankroll management, parlay betting',
};

export default function GuidesPage() {
  const beginnerGuides = guides.filter(g => g.category === 'Beginner');
  const strategyGuides = guides.filter(g => g.category === 'Strategy');
  const advancedGuides = guides.filter(g => g.category === 'Advanced');
  const sportGuides = guides.filter(g => g.category === 'Sport-Specific');
  const topSportsbook = sportsbooks[0];

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
              <Link href="/guides/sports-betting-101">
                <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">
                  Start Learning →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Beginner Guides */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🎓</span>
            <h2 className="text-2xl font-bold text-white">Beginner Guides</h2>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Start Here</Badge>
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

        {/* Sport-Specific Guides */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🏆</span>
            <h2 className="text-2xl font-bold text-white">Sport-Specific Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sportGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

        {/* Advanced Guides */}
        {advancedGuides.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🚀</span>
              <h2 className="text-2xl font-bold text-white">Advanced Strategies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advancedGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {/* Calculators CTA */}
        <section className="mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🧮</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Betting Calculators</h2>
                  <p className="text-zinc-400">
                    Calculate parlays, convert odds, find implied probability, and more.
                  </p>
                </div>
              </div>
              <Link href="/calculators">
                <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">
                  Use Calculators →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TopicCard icon="📊" title="Understanding Odds" href="/guides/how-to-read-odds" />
            <TopicCard icon="🏈" title="NFL Betting" href="/guides/nfl-betting-guide" />
            <TopicCard icon="🏀" title="NBA Betting" href="/guides/nba-betting-guide" />
            <TopicCard icon="⚽" title="Soccer Betting" href="/guides/soccer-betting-guide" />
            <TopicCard icon="💰" title="Bankroll Tips" href="/guides/bankroll-management" />
            <TopicCard icon="📈" title="Line Shopping" href="/guides/line-shopping-guide" />
            <TopicCard icon="🎲" title="Prop Bets" href="/guides/player-props-guide" />
            <TopicCard icon="⚡" title="Live Betting" href="/guides/live-betting-strategies" />
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Start Betting?</h2>
                <p className="text-zinc-400">
                  Get {topSportsbook.bonusAmount} in bonus bets with {topSportsbook.name}.
                </p>
              </div>
              <div className="flex gap-4">
                <a href={topSportsbook.affiliateUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">
                    Claim Bonus →
                  </Button>
                </a>
                <Link href="/sportsbooks">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Compare All
                  </Button>
                </Link>
              </div>
            </div>
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
        <div className="flex items-center gap-2 mb-3">
          <Badge 
            variant="outline" 
            className={`${
              guide.category === 'Beginner' 
                ? 'text-blue-400 border-blue-500/30' 
                : guide.category === 'Strategy' 
                  ? 'text-purple-400 border-purple-500/30' 
                  : guide.category === 'Sport-Specific'
                    ? 'text-orange-400 border-orange-500/30'
                    : 'text-emerald-400 border-emerald-500/30'
            }`}
          >
            {guide.category}
          </Badge>
          {guide.readTime && (
            <span className="text-xs text-zinc-500">{guide.readTime}</span>
          )}
        </div>
        <Link href={`/guides/${guide.slug}`}>
          <h3 className="font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {guide.title}
          </h3>
        </Link>
        <p className="text-sm text-zinc-400 mb-4">{guide.excerpt}</p>
        <Link 
          href={`/guides/${guide.slug}`}
          className="text-sm text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
        >
          Read Guide <span>→</span>
        </Link>
      </CardContent>
    </Card>
  );
}

function TopicCard({ icon, title, href }: { icon: string; title: string; href: string }) {
  return (
    <Link 
      href={href}
      className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-xl p-4 text-center transition-colors group"
    >
      <span className="text-3xl block mb-2">{icon}</span>
      <h3 className="font-medium text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
    </Link>
  );
}
