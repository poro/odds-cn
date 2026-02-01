import { sportsbooks, promos, games } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface SportsbookPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return sportsbooks.map((book) => ({
    id: book.id,
  }));
}

export async function generateMetadata({ params }: SportsbookPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = sportsbooks.find(s => s.id === id);
  if (!book) return {};
  
  return {
    title: `${book.name} Review 2025 - ${book.bonusAmount} Bonus | Odds.cn`,
    description: `${book.name} sportsbook review. Get ${book.bonus}. Read our expert analysis of odds, features, and user experience.`,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-zinc-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-lg text-zinc-300 ml-2">{rating.toFixed(1)}/5</span>
    </div>
  );
}

export default async function SportsbookPage({ params }: SportsbookPageProps) {
  const { id } = await params;
  const book = sportsbooks.find(s => s.id === id);
  
  if (!book) {
    notFound();
  }

  const bookPromos = promos.filter(p => p.sportsbook === book.name || p.sportsbook.toLowerCase().includes(book.id));
  const otherBooks = sportsbooks.filter(s => s.id !== id).slice(0, 3);

  // Sample games this sportsbook has odds for
  const bookGames = games.filter(g => g.odds.some(o => o.sportsbook === book.name)).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Logo & Rating */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-emerald-400">
                  {book.name.charAt(0)}
                </span>
              </div>
              {book.bestFor && (
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  🏆 {book.bestFor}
                </Badge>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {book.name} <span className="text-emerald-400">Review</span>
              </h1>
              <StarRating rating={book.rating} />
              <p className="text-zinc-400 mt-4 max-w-2xl">
                {book.description}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-xs text-zinc-500 uppercase">Founded</div>
                  <div className="text-white font-semibold">{book.founded}</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-xs text-zinc-500 uppercase">Min Deposit</div>
                  <div className="text-white font-semibold">{book.minDeposit}</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-xs text-zinc-500 uppercase">Payout Speed</div>
                  <div className="text-white font-semibold">{book.payoutSpeed}</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-xs text-zinc-500 uppercase">Rating</div>
                  <div className="text-yellow-400 font-semibold">{book.rating}/5</div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="w-full md:w-auto">
              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30">
                <CardContent className="p-6">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-3">
                    ⭐ Welcome Bonus
                  </Badge>
                  <p className="text-2xl font-bold text-white mb-2">{book.bonus}</p>
                  {book.bonusCode && (
                    <div className="bg-zinc-900 border border-dashed border-zinc-600 rounded-lg p-3 mb-4 text-center">
                      <div className="text-xs text-zinc-500 uppercase mb-1">Use Code</div>
                      <div className="text-lg font-mono font-bold text-emerald-400">{book.bonusCode}</div>
                    </div>
                  )}
                  <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                    <a href={book.affiliateUrl} target="_blank" rel="noopener noreferrer">
                      Claim {book.bonusAmount} Bonus →
                    </a>
                  </Button>
                  <p className="text-xs text-zinc-500 text-center mt-2">21+ • T&Cs Apply</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pros & Cons */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Pros & Cons</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                      <span className="text-xl">✅</span> Pros
                    </h3>
                    <ul className="space-y-3">
                      {book.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                      <span className="text-xl">❌</span> Cons
                    </h3>
                    <ul className="space-y-3">
                      {book.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-red-400 mt-0.5">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {book.features.map((feature, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-2">
                      {i === 0 ? '📺' : i === 1 ? '💰' : i === 2 ? '🎯' : '⭐'}
                    </span>
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Review */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Full Review</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                  <p className="text-zinc-400 mb-6">{book.description}</p>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">Welcome Bonus Details</h3>
                  <p className="text-zinc-400 mb-6">
                    New users at {book.name} can take advantage of the {book.bonus} promotion. 
                    {book.bonusCode && ` Use promo code ${book.bonusCode} when signing up to claim this offer.`}
                    {' '}This is one of the most competitive welcome offers in the industry, giving you 
                    extra value right from the start.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">Betting Experience</h3>
                  <p className="text-zinc-400 mb-6">
                    {book.name} offers a comprehensive betting experience with coverage across all major 
                    sports including NFL, NBA, MLB, NHL, soccer, and more. Their mobile app is highly 
                    rated and provides seamless betting on the go. Live betting options are extensive, 
                    and the interface makes it easy to find markets and place bets quickly.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">Banking & Payouts</h3>
                  <p className="text-zinc-400">
                    With a minimum deposit of {book.minDeposit} and average payout times of {book.payoutSpeed}, 
                    {book.name} provides reliable banking options. Multiple payment methods are accepted 
                    including credit/debit cards, PayPal, and bank transfers. VIP players may enjoy 
                    faster withdrawal processing.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Sample Odds */}
            {bookGames.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Current Odds at {book.name}</h2>
                <div className="space-y-4">
                  {bookGames.map(game => {
                    const bookOdds = game.odds.find(o => o.sportsbook === book.name);
                    if (!bookOdds) return null;
                    return (
                      <Card key={game.id} className="bg-zinc-900 border-zinc-800">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="text-xs">{game.league}</Badge>
                            <span className="text-xs text-zinc-500">
                              {new Date(game.startTime).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-medium">{game.awayTeam}</p>
                              <p className="text-white font-medium">@ {game.homeTeam}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-emerald-400 font-mono">
                                ML: {bookOdds.moneyline > 0 ? '+' : ''}{bookOdds.moneyline}
                              </p>
                              <p className="text-zinc-400 text-sm font-mono">
                                Spread: {bookOdds.spread} ({bookOdds.spreadOdds > 0 ? '+' : ''}{bookOdds.spreadOdds})
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <Link 
                  href="/"
                  className="block text-center text-sm text-emerald-400 hover:text-emerald-300 mt-4"
                >
                  View All Odds →
                </Link>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Promotions */}
            {bookPromos.length > 0 && (
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    🎁 Current Promotions
                  </h3>
                  <div className="space-y-4">
                    {bookPromos.map(promo => (
                      <div key={promo.id} className="border-b border-zinc-800 last:border-0 pb-4 last:pb-0">
                        <Badge 
                          className={`mb-2 ${
                            promo.type === 'exclusive' 
                              ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' 
                              : promo.type === 'welcome'
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                          }`}
                        >
                          {promo.type === 'exclusive' ? '⭐ Exclusive' : promo.type === 'welcome' ? '🎁 Welcome' : '🔄 Ongoing'}
                        </Badge>
                        <h4 className="font-semibold text-white text-sm">{promo.title}</h4>
                        <p className="text-xs text-zinc-400 mt-1">{promo.description}</p>
                        {promo.code && (
                          <div className="mt-2 bg-zinc-800 rounded px-2 py-1 inline-block">
                            <span className="text-xs text-zinc-400">Code: </span>
                            <span className="text-xs font-mono text-emerald-400">{promo.code}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Facts */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">📊 Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Rating</span>
                    <span className="text-yellow-400 font-semibold">{book.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Welcome Bonus</span>
                    <span className="text-emerald-400 font-semibold">{book.bonusAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Min Deposit</span>
                    <span className="text-white">{book.minDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Payout Speed</span>
                    <span className="text-white">{book.payoutSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Founded</span>
                    <span className="text-white">{book.founded}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Sportsbooks */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Compare Others</h3>
                <div className="space-y-3">
                  {otherBooks.map(other => (
                    <Link 
                      key={other.id}
                      href={`/sportsbooks/${other.id}`}
                      className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-emerald-400">{other.name.charAt(0)}</span>
                        </div>
                        <span className="text-white text-sm">{other.name}</span>
                      </div>
                      <span className="text-xs text-emerald-400">{other.bonusAmount}</span>
                    </Link>
                  ))}
                </div>
                <Link 
                  href="/sportsbooks"
                  className="block text-center text-sm text-emerald-400 hover:text-emerald-300 mt-4"
                >
                  View All Sportsbooks →
                </Link>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-bold text-white mb-2">Ready to Bet?</p>
                <p className="text-sm text-zinc-400 mb-4">Get {book.bonusAmount} with {book.name}</p>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <a href={book.affiliateUrl} target="_blank" rel="noopener noreferrer">
                    Claim Bonus Now →
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
