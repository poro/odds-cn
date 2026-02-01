import { sportsbooks, promos } from '@/lib/mock-data';
import { SportsbookCard } from '@/components/sportsbook-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Sportsbooks 2025 - Compare Bonuses Up To $1,500 | Odds.cn',
  description: 'Compare the best online sportsbooks for 2025. Get exclusive welcome bonuses up to $1,500. Expert reviews, ratings, and detailed comparisons.',
  keywords: 'best sportsbooks, sportsbook reviews, betting sites, sportsbook bonuses, DraftKings bonus, FanDuel bonus, BetMGM bonus',
};

export default function SportsbooksPage() {
  const exclusivePromos = promos.filter(p => p.type === 'exclusive');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              🏆 Updated January 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Best <span className="text-emerald-400">Sportsbooks</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
              Expert-reviewed and ranked. Find the perfect sportsbook with the best odds, 
              bonuses, and features for your betting style.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$5,000+</span>
                <span className="text-zinc-400">in Total Bonuses</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">6</span>
                <span className="text-zinc-400">Top-Rated Books</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">100%</span>
                <span className="text-zinc-400">Legal & Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Promos Banner */}
      {exclusivePromos.length > 0 && (
        <section className="bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent border-b border-yellow-500/20">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  ⭐ Exclusive
                </Badge>
                <span className="text-white font-medium">{exclusivePromos[0].title}</span>
                <span className="text-zinc-400 text-sm hidden md:inline">- {exclusivePromos[0].description}</span>
              </div>
              {exclusivePromos[0].code && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-zinc-400">Code:</span>
                  <code className="bg-zinc-800 px-3 py-1 rounded font-mono text-emerald-400">{exclusivePromos[0].code}</code>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            🏆 Top Rated Sportsbooks
          </h2>
          <div className="space-y-4">
            {sportsbooks.map((book, index) => (
              <SportsbookCard key={book.id} sportsbook={book} rank={index + 1} />
            ))}
          </div>
        </section>

        {/* Bonus Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💰 Welcome Bonus Comparison</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">Sportsbook</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Welcome Bonus</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Promo Code</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Best For</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {sportsbooks.map((book) => (
                    <tr key={book.id} className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4">
                        <Link href={`/sportsbooks/${book.id}`} className="flex items-center gap-3 hover:text-emerald-400">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-emerald-400">{book.name.charAt(0)}</span>
                          </div>
                          <div>
                            <span className="font-medium text-white hover:text-emerald-400">{book.name}</span>
                            <div className="flex items-center gap-1 text-xs">
                              <span className="text-yellow-400">{book.rating}</span>
                              <span className="text-zinc-500">/5</span>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-emerald-400 font-semibold">{book.bonusAmount}</span>
                        <div className="text-xs text-zinc-500">{book.bonus}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {book.bonusCode ? (
                          <code className="bg-zinc-800 px-2 py-1 rounded text-sm font-mono text-emerald-400">
                            {book.bonusCode}
                          </code>
                        ) : (
                          <span className="text-zinc-500">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {book.bestFor && (
                          <Badge variant="outline" className="text-xs text-yellow-400 border-yellow-500/30">
                            {book.bestFor}
                          </Badge>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                          <a href={book.affiliateUrl} target="_blank" rel="noopener noreferrer">
                            Get Bonus →
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ongoing Promos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔥 Current Promotions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {promos.slice(0, 6).map((promo) => (
              <div 
                key={promo.id} 
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    className={`${
                      promo.type === 'exclusive' 
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' 
                        : promo.type === 'welcome'
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}
                  >
                    {promo.type === 'exclusive' ? '⭐ Exclusive' : promo.type === 'welcome' ? '🎁 Welcome' : '🔄 Ongoing'}
                  </Badge>
                  <span className="text-xs text-zinc-500">{promo.sportsbook}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{promo.title}</h3>
                <p className="text-sm text-zinc-400 mb-3">{promo.description}</p>
                {promo.code && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">Code:</span>
                    <code className="bg-zinc-800 px-2 py-1 rounded text-sm font-mono text-emerald-400">{promo.code}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Feature Comparison</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">Sportsbook</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Live Streaming</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Cash Out</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Same Game Parlay</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Min Deposit</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Payout Speed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {sportsbooks.map((book) => (
                    <tr key={book.id} className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4">
                        <span className="font-medium text-white">{book.name}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {book.features.some(f => f.toLowerCase().includes('streaming')) ? (
                          <span className="text-emerald-400">✓</span>
                        ) : (
                          <span className="text-zinc-500">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {book.features.some(f => f.toLowerCase().includes('cash')) ? (
                          <span className="text-emerald-400">✓</span>
                        ) : (
                          <span className="text-zinc-500">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {book.features.some(f => f.toLowerCase().includes('parlay')) ? (
                          <span className="text-emerald-400">✓</span>
                        ) : (
                          <span className="text-zinc-500">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-zinc-300">{book.minDeposit}</td>
                      <td className="px-6 py-4 text-center text-zinc-300">{book.payoutSpeed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How We Rate */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 How We Rate Sportsbooks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Odds Quality</h3>
              <p className="text-sm text-zinc-400">
                We compare odds across thousands of markets to ensure you get the best value on every bet.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bonuses & Promotions</h3>
              <p className="text-sm text-zinc-400">
                We evaluate welcome bonuses, ongoing promotions, and the fairness of wagering requirements.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">User Experience</h3>
              <p className="text-sm text-zinc-400">
                App quality, website design, ease of betting, and overall user satisfaction matter.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security & Trust</h3>
              <p className="text-sm text-zinc-400">
                Licensing, payout reliability, and customer support quality are all factored into our ratings.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">❓ Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">What is the best sportsbook overall?</h3>
              <p className="text-sm text-zinc-400">
                DraftKings consistently ranks as our top pick due to its excellent odds, user-friendly app, 
                and generous promotions. However, the best sportsbook for you depends on your specific needs and betting style.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Are online sportsbooks safe?</h3>
              <p className="text-sm text-zinc-400">
                Yes, all sportsbooks we recommend are licensed, regulated, and have proven track records. 
                They use industry-standard encryption and security measures to protect your data and funds.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Can I use multiple sportsbooks?</h3>
              <p className="text-sm text-zinc-400">
                Absolutely! In fact, we recommend having accounts at multiple sportsbooks. 
                This allows you to shop for the best odds and take advantage of multiple welcome bonuses.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">What is the best welcome bonus?</h3>
              <p className="text-sm text-zinc-400">
                BetMGM offers the highest welcome bonus at up to $1,500 in bonus bets. However, 
                DraftKings and FanDuel have easier-to-clear bonuses that may be better for casual bettors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
