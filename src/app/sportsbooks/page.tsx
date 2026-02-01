import { sportsbooks } from '@/lib/mock-data';
import { SportsbookCard } from '@/components/sportsbook-card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Sportsbooks 2025 - Top Online Betting Sites Reviewed | Odds.cn',
  description: 'Compare the best online sportsbooks. Expert reviews, exclusive bonuses, and detailed ratings to help you find the perfect betting site.',
};

export default function SportsbooksPage() {
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
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Expert-reviewed and ranked. Find the perfect sportsbook with the best odds, 
              bonuses, and features for your betting style.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Top Rated Sportsbooks</h2>
          <div className="space-y-4">
            {sportsbooks.map((book, index) => (
              <SportsbookCard key={book.id} sportsbook={book} rank={index + 1} />
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Comparison</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-zinc-300">Sportsbook</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Rating</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Welcome Bonus</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-zinc-300">Top Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {sportsbooks.map((book) => (
                    <tr key={book.id} className="hover:bg-zinc-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-emerald-400">
                              {book.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium text-white">{book.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-yellow-400">{book.rating}</span>
                        <span className="text-zinc-500">/5</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-emerald-400 font-medium">{book.bonusAmount}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="outline" className="text-zinc-400 border-zinc-700">
                          {book.features[0]}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How We Rate */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How We Rate Sportsbooks</h2>
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
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
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
          </div>
        </section>
      </div>
    </div>
  );
}
