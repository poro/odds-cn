import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Responsible Gambling - Odds.cn',
  description: 'Learn about responsible gambling practices and find resources for help with problem gambling.',
};

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
            🤝 We Care
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Responsible Gambling
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Sports betting should be fun. We&apos;re committed to promoting responsible gambling 
            and providing resources for those who need help.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Emergency Help */}
          <section className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🆘 Need Help Now?
            </h2>
            <p className="text-zinc-300 mb-4">
              If you or someone you know has a gambling problem, help is available 24/7.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="tel:1-800-522-4700"
                className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 hover:border-red-500/50 transition-colors"
              >
                <div className="font-bold text-white">National Council on Problem Gambling</div>
                <div className="text-red-400 font-mono">1-800-522-4700</div>
              </a>
              <a 
                href="tel:1-800-426-2537"
                className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 hover:border-red-500/50 transition-colors"
              >
                <div className="font-bold text-white">Gamblers Anonymous</div>
                <div className="text-red-400 font-mono">1-800-426-2537</div>
              </a>
            </div>
          </section>

          {/* Tips */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">📋 Responsible Gambling Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-emerald-400 font-semibold mb-2">✓ Set a Budget</div>
                <p className="text-sm text-zinc-400">
                  Only bet what you can afford to lose. Set a weekly or monthly limit and stick to it.
                </p>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-emerald-400 font-semibold mb-2">✓ Set Time Limits</div>
                <p className="text-sm text-zinc-400">
                  Don&apos;t let betting take over your life. Set limits on how long you spend betting.
                </p>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-emerald-400 font-semibold mb-2">✓ Don&apos;t Chase Losses</div>
                <p className="text-sm text-zinc-400">
                  Accept losses as part of betting. Never try to win back lost money by betting more.
                </p>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-emerald-400 font-semibold mb-2">✓ Take Breaks</div>
                <p className="text-sm text-zinc-400">
                  Step away regularly. Taking breaks helps you maintain perspective and control.
                </p>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-emerald-400 font-semibold mb-2">✓ Never Bet Under Influence</div>
                <p className="text-sm text-zinc-400">
                  Avoid betting when drinking or using substances. It impairs your judgment.
                </p>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-emerald-400 font-semibold mb-2">✓ Keep It Fun</div>
                <p className="text-sm text-zinc-400">
                  Betting should be entertainment. If it stops being fun, it&apos;s time to stop.
                </p>
              </div>
            </div>
          </section>

          {/* Warning Signs */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">⚠️ Warning Signs of Problem Gambling</h2>
            <p className="text-zinc-400 mb-4">
              You may have a gambling problem if you experience any of these signs:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Spending more money or time on gambling than you can afford</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Difficulty controlling, stopping, or cutting back on gambling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Feeling restless or irritable when trying to stop gambling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Gambling to escape problems or relieve negative feelings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Chasing losses by gambling more to try to win back money</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Lying to family or friends about gambling habits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Borrowing money or selling possessions to gamble</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span className="text-zinc-300">Neglecting work, school, or family responsibilities due to gambling</span>
              </li>
            </ul>
          </section>

          {/* Self-Exclusion */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">🚫 Self-Exclusion Options</h2>
            <p className="text-zinc-400 mb-4">
              All reputable sportsbooks offer self-exclusion options. You can:
            </p>
            <ul className="space-y-2 text-zinc-300 mb-6">
              <li>• Set deposit limits</li>
              <li>• Set loss limits</li>
              <li>• Set session time limits</li>
              <li>• Take a temporary timeout (24 hours to 30 days)</li>
              <li>• Self-exclude for an extended period (6 months to permanently)</li>
            </ul>
            <p className="text-sm text-zinc-500">
              Contact the sportsbook&apos;s customer support or visit their responsible gambling page 
              to set up these features.
            </p>
          </section>

          {/* Resources */}
          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">📚 Resources</h2>
            <div className="space-y-4">
              <a 
                href="https://www.ncpgambling.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <div className="font-semibold text-white">National Council on Problem Gambling</div>
                <div className="text-sm text-zinc-400">ncpgambling.org</div>
              </a>
              <a 
                href="https://www.gamblersanonymous.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <div className="font-semibold text-white">Gamblers Anonymous</div>
                <div className="text-sm text-zinc-400">gamblersanonymous.org</div>
              </a>
              <a 
                href="https://www.gam-anon.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <div className="font-semibold text-white">Gam-Anon (for family members)</div>
                <div className="text-sm text-zinc-400">gam-anon.org</div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
