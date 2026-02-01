import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Odds.cn',
  description: 'Learn about Odds.cn, your trusted source for sports betting odds comparison, sportsbook reviews, and betting education.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Odds.cn</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Your trusted source for comparing sports betting odds, sportsbook reviews, 
            and expert betting education.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <p className="text-zinc-400">
                At Odds.cn, our mission is simple: help sports bettors make smarter decisions 
                by providing real-time odds comparison, honest sportsbook reviews, and comprehensive 
                betting education. We believe that every bettor deserves access to the best lines 
                and the knowledge to use them effectively.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-white mb-2">Odds Comparison</h3>
                <p className="text-sm text-zinc-400">
                  We aggregate odds from top sportsbooks in real-time, highlighting the best 
                  lines so you always get maximum value on every bet.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-3">⭐</div>
                <h3 className="text-lg font-semibold text-white mb-2">Sportsbook Reviews</h3>
                <p className="text-sm text-zinc-400">
                  Our team thoroughly reviews each sportsbook, evaluating bonuses, odds quality, 
                  user experience, and payout reliability.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-white mb-2">Betting Education</h3>
                <p className="text-sm text-zinc-400">
                  From beginner basics to advanced strategies, our guides help you develop 
                  the skills needed to bet smarter.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-3">🧮</div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Tools</h3>
                <p className="text-sm text-zinc-400">
                  Our calculators help you convert odds, calculate parlays, find implied 
                  probability, and hedge your bets effectively.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-emerald-400">Transparency</h3>
                <p className="text-sm text-zinc-400">
                  We clearly disclose our relationships with sportsbooks. Our reviews are honest 
                  and unbiased, highlighting both pros and cons.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-400">Accuracy</h3>
                <p className="text-sm text-zinc-400">
                  Our odds are updated in real-time and our information is regularly verified 
                  to ensure you&apos;re getting accurate data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-400">Responsible Gambling</h3>
                <p className="text-sm text-zinc-400">
                  We promote responsible gambling practices and provide resources for those 
                  who may need help with problem gambling.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-zinc-400 mb-6">
              Compare odds, claim bonuses, and start betting smarter today.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  View Live Odds
                </Button>
              </Link>
              <Link href="/sportsbooks">
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                  Compare Sportsbooks
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
