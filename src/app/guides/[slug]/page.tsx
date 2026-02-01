import { guides, sportsbooks } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  if (!guide) return {};
  
  return {
    title: `${guide.title} | Odds.cn Betting Guides`,
    description: guide.excerpt,
  };
}

// Guide content templates
const guideContent: Record<string, { sections: { title: string; content: string }[] }> = {
  'sports-betting-101': {
    sections: [
      {
        title: 'What is Sports Betting?',
        content: `Sports betting is the act of placing a wager on the outcome of a sporting event. When you place a bet, you're essentially predicting what will happen in a game, match, or race, and risking money based on that prediction.

If your prediction is correct, you win money based on the odds offered by the sportsbook. If you're wrong, you lose your stake. It's that simple at its core, but there's a lot of nuance to becoming a successful sports bettor.`
      },
      {
        title: 'Understanding Odds',
        content: `Odds tell you two important things: the probability of an outcome occurring and how much you'll win if your bet is successful.

**American Odds** are the most common format in the US. Negative odds (like -150) show how much you need to bet to win $100. Positive odds (like +200) show how much you'll win on a $100 bet.

**Decimal Odds** (like 2.50) simply multiply your stake by the number. A $100 bet at 2.50 returns $250 total ($150 profit + $100 stake).

**Fractional Odds** (like 3/1) show profit relative to stake. 3/1 means you win $3 for every $1 bet.`
      },
      {
        title: 'Types of Bets',
        content: `**Moneyline**: The simplest bet - just pick the winner. No point spread involved.

**Point Spread**: The favorite must win by more than the spread, or the underdog must lose by less than the spread (or win outright).

**Totals (Over/Under)**: Bet on whether the combined score will be over or under a set number.

**Parlays**: Combine multiple bets into one. All selections must win for the parlay to pay out, but the potential payout is much higher.

**Props**: Bet on specific occurrences within a game, like "Will Player X score a touchdown?" or "How many points will Player Y score?"`
      },
      {
        title: 'Getting Started',
        content: `1. **Choose a reputable sportsbook** - Look for licensed operators with good reviews. Our top recommendations include DraftKings, FanDuel, and BetMGM.

2. **Start small** - Never bet more than you can afford to lose. Start with small stakes while you learn.

3. **Focus on sports you know** - You'll have better insight into sports you follow closely.

4. **Shop for the best lines** - Different sportsbooks offer different odds. Having accounts at multiple books lets you always get the best value.

5. **Keep records** - Track all your bets to understand what's working and what isn't.`
      }
    ]
  },
  'how-to-read-odds': {
    sections: [
      {
        title: 'American Odds Explained',
        content: `American odds are displayed as positive or negative numbers. Here's how to read them:

**Negative Odds (Favorites)**
- Example: -150
- This means you need to bet $150 to win $100
- The team/player is favored to win

**Positive Odds (Underdogs)**
- Example: +200
- This means a $100 bet wins you $200
- The team/player is the underdog

The larger the negative number, the bigger the favorite. The larger the positive number, the bigger the underdog.`
      },
      {
        title: 'Decimal Odds Explained',
        content: `Decimal odds are popular in Europe and are arguably the easiest to understand:

**How to calculate payouts:**
Simply multiply your stake by the decimal odds.

Example: $50 bet at 2.50 odds = $50 × 2.50 = $125 total return ($75 profit + $50 stake)

**Converting to probability:**
Implied probability = 1 / decimal odds × 100
Example: 2.50 odds = 1/2.50 × 100 = 40% implied probability`
      },
      {
        title: 'Fractional Odds Explained',
        content: `Fractional odds (common in UK) show profit relative to stake:

**How to read them:**
- 5/1 (five-to-one): Win $5 for every $1 staked
- 1/5 (one-to-five): Win $1 for every $5 staked

**The first number is your profit, the second is your stake.**

Examples:
- 3/1: Bet $10, profit $30 (total return $40)
- 1/2: Bet $10, profit $5 (total return $15)`
      },
      {
        title: 'Converting Between Formats',
        content: `**American to Decimal:**
- Positive: (American odds / 100) + 1
- Negative: (100 / |American odds|) + 1

**Decimal to American:**
- If decimal ≥ 2.00: (decimal - 1) × 100 = positive American
- If decimal < 2.00: -100 / (decimal - 1) = negative American

**Pro tip:** Use our free odds converter tool to instantly convert between any format!`
      }
    ]
  },
  'point-spreads-explained': {
    sections: [
      {
        title: 'What is a Point Spread?',
        content: `A point spread is a handicap given to the underdog to level the playing field. Instead of just picking a winner, you're betting on the margin of victory.

**Example:**
- Kansas City Chiefs -7 vs Buffalo Bills +7
- If you bet on the Chiefs, they must win by MORE than 7 points
- If you bet on the Bills, they must either win outright OR lose by LESS than 7 points`
      },
      {
        title: 'How Spreads Work',
        content: `**Covering the Spread**
When a team wins by more than the spread, they "cover." If the Chiefs win 28-17 (11-point margin), they covered the -7 spread.

**Pushing**
If the final margin exactly equals the spread, it's a "push" and all bets are refunded. Chiefs winning 24-17 (exactly 7 points) would be a push.

**Half-Point Spreads**
Spreads like -7.5 eliminate pushes. The favorite must win by 8+ points to cover.`
      },
      {
        title: 'The Juice (Vig)',
        content: `Standard spread bets are typically priced at -110 on both sides. This means you risk $110 to win $100.

This "juice" or "vig" is the sportsbook's commission. It ensures they profit regardless of the outcome as long as they have balanced action on both sides.

**Pro tip:** Shopping for -105 lines instead of -110 can significantly improve your long-term profits!`
      }
    ]
  },
  'bankroll-management': {
    sections: [
      {
        title: 'Why Bankroll Management Matters',
        content: `Your bankroll is the total amount of money you've set aside specifically for sports betting. Proper management is crucial because:

1. **It protects you from going broke** - Even good bettors have losing streaks
2. **It reduces emotional decisions** - Clear rules prevent chasing losses
3. **It maximizes long-term growth** - Consistent sizing compounds your edge

Without a plan, most bettors eventually bust their bankroll regardless of their handicapping skills.`
      },
      {
        title: 'The Unit System',
        content: `Most successful bettors use a "unit" system:

**1 Unit = 1-5% of your bankroll**

For a $1,000 bankroll:
- 1 unit = $10-50
- Standard bet = 1 unit
- Confident bet = 2 units
- Max bet = 3 units (rare!)

**Never bet more than 5% of your bankroll on a single wager.**`
      },
      {
        title: 'The Kelly Criterion',
        content: `The Kelly Criterion is a mathematical formula for optimal bet sizing:

**Kelly % = (bp - q) / b**

Where:
- b = decimal odds - 1
- p = your estimated probability of winning
- q = probability of losing (1 - p)

Example: If you estimate 55% chance of winning at -110 odds:
- b = 1.91 - 1 = 0.91
- p = 0.55, q = 0.45
- Kelly % = (0.91 × 0.55 - 0.45) / 0.91 = 5.5%

Most bettors use "fractional Kelly" (25-50% of the full Kelly amount) to reduce variance.`
      },
      {
        title: 'Golden Rules',
        content: `1. **Never bet money you can't afford to lose**
2. **Set a weekly/monthly loss limit and stick to it**
3. **Don't chase losses by increasing bet sizes**
4. **Keep detailed records of all bets**
5. **Separate your betting bankroll from living expenses**
6. **Take breaks after big wins or losses**
7. **Adjust unit size as your bankroll grows or shrinks**`
      }
    ]
  }
};

// Default content for guides without specific content
const defaultContent = {
  sections: [
    {
      title: 'Overview',
      content: `This comprehensive guide will help you understand the key concepts and strategies for successful sports betting. Whether you're a beginner or looking to improve your skills, you'll find valuable insights here.`
    },
    {
      title: 'Key Concepts',
      content: `Understanding the fundamentals is crucial before placing any bets. Take time to learn the terminology, different bet types, and how odds work. This foundation will serve you well throughout your betting journey.`
    },
    {
      title: 'Strategies for Success',
      content: `The most successful bettors combine knowledge of their sport with disciplined bankroll management and a systematic approach to finding value. Don't chase losses, stay patient, and always look for the best available odds.`
    },
    {
      title: 'Getting Started',
      content: `Ready to put this knowledge into practice? Start by signing up at a reputable sportsbook with a good welcome bonus. Practice with small stakes while you develop your skills, and always gamble responsibly.`
    }
  ]
};

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  
  if (!guide) {
    notFound();
  }

  const content = guideContent[slug] || defaultContent;
  const relatedGuides = guides.filter(g => g.category === guide.category && g.id !== guide.id).slice(0, 3);
  const topSportsbooks = sportsbooks.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/guides" className="text-zinc-400 hover:text-emerald-400 text-sm">
              ← All Guides
            </Link>
          </div>
          <Badge 
            className={`mb-4 ${
              guide.category === 'Beginner' 
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
                : guide.category === 'Strategy' 
                  ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' 
                  : guide.category === 'Sport-Specific'
                    ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
            }`}
          >
            {guide.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            {guide.excerpt}
          </p>
          {guide.readTime && (
            <p className="text-sm text-zinc-500 mt-4">
              📖 {guide.readTime} read
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-2 prose prose-invert max-w-none">
            {content.sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-zinc-300 mb-4 last:mb-0 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Betting?</h3>
              <p className="text-zinc-400 mb-6">
                Put your knowledge into practice with a welcome bonus from a top sportsbook.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sportsbooks">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto">
                    Get Best Bonus →
                  </Button>
                </Link>
                <Link href="/calculators">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 w-full sm:w-auto">
                    Try Our Calculators
                  </Button>
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Bonus CTA */}
            <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30">
              <CardContent className="p-6 text-center">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-3">
                  ⭐ Top Pick
                </Badge>
                <h3 className="text-lg font-bold text-white mb-2">
                  {topSportsbooks[0].name}
                </h3>
                <p className="text-2xl font-bold text-emerald-400 mb-4">
                  {topSportsbooks[0].bonus}
                </p>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <a href={topSportsbooks[0].affiliateUrl} target="_blank" rel="noopener noreferrer">
                    Claim Bonus →
                  </a>
                </Button>
                <p className="text-xs text-zinc-500 mt-2">21+ • T&Cs Apply</p>
              </CardContent>
            </Card>

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
                  <div className="space-y-4">
                    {relatedGuides.map(related => (
                      <Link 
                        key={related.id}
                        href={`/guides/${related.slug}`}
                        className="block p-3 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg transition-colors"
                      >
                        <h4 className="font-medium text-white text-sm hover:text-emerald-400">
                          {related.title}
                        </h4>
                        <p className="text-xs text-zinc-500 mt-1">{related.readTime} read</p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tools */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">🧮 Betting Tools</h3>
                <div className="space-y-3">
                  <Link 
                    href="/calculators"
                    className="flex items-center gap-3 p-3 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <span className="text-xl">🎯</span>
                    <div>
                      <div className="font-medium text-white text-sm">Parlay Calculator</div>
                      <div className="text-xs text-zinc-500">Calculate multi-bet payouts</div>
                    </div>
                  </Link>
                  <Link 
                    href="/calculators"
                    className="flex items-center gap-3 p-3 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <span className="text-xl">🔄</span>
                    <div>
                      <div className="font-medium text-white text-sm">Odds Converter</div>
                      <div className="text-xs text-zinc-500">Convert between formats</div>
                    </div>
                  </Link>
                  <Link 
                    href="/calculators"
                    className="flex items-center gap-3 p-3 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <span className="text-xl">📊</span>
                    <div>
                      <div className="font-medium text-white text-sm">Implied Probability</div>
                      <div className="text-xs text-zinc-500">Find hidden value</div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* All Guides Link */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">📚 More Guides</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Explore our complete library of betting guides and strategies.
                </p>
                <Link href="/guides">
                  <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    View All Guides →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
