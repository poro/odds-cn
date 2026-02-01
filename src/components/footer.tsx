import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-white">
                odds<span className="text-emerald-400">.cn</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 mb-4">
              Compare odds from top sportsbooks. Find the best lines. Bet smarter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h3 className="font-semibold text-white mb-4">Sports</h3>
            <ul className="space-y-2">
              <li><Link href="/sports/nfl" className="text-sm text-zinc-400 hover:text-emerald-400">NFL Odds</Link></li>
              <li><Link href="/sports/nba" className="text-sm text-zinc-400 hover:text-emerald-400">NBA Odds</Link></li>
              <li><Link href="/sports/mlb" className="text-sm text-zinc-400 hover:text-emerald-400">MLB Odds</Link></li>
              <li><Link href="/sports/nhl" className="text-sm text-zinc-400 hover:text-emerald-400">NHL Odds</Link></li>
              <li><Link href="/sports/soccer" className="text-sm text-zinc-400 hover:text-emerald-400">Soccer Odds</Link></li>
              <li><Link href="/sports/mma" className="text-sm text-zinc-400 hover:text-emerald-400">UFC Odds</Link></li>
            </ul>
          </div>

          {/* Sportsbooks */}
          <div>
            <h3 className="font-semibold text-white mb-4">Sportsbooks</h3>
            <ul className="space-y-2">
              <li><Link href="/sportsbooks/draftkings" className="text-sm text-zinc-400 hover:text-emerald-400">DraftKings Review</Link></li>
              <li><Link href="/sportsbooks/fanduel" className="text-sm text-zinc-400 hover:text-emerald-400">FanDuel Review</Link></li>
              <li><Link href="/sportsbooks/betmgm" className="text-sm text-zinc-400 hover:text-emerald-400">BetMGM Review</Link></li>
              <li><Link href="/sportsbooks/caesars" className="text-sm text-zinc-400 hover:text-emerald-400">Caesars Review</Link></li>
              <li><Link href="/sportsbooks/bet365" className="text-sm text-zinc-400 hover:text-emerald-400">Bet365 Review</Link></li>
              <li><Link href="/sportsbooks" className="text-sm text-emerald-400 hover:text-emerald-300">All Sportsbooks →</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/guides" className="text-sm text-zinc-400 hover:text-emerald-400">Betting Guides</Link></li>
              <li><Link href="/guides/sports-betting-101" className="text-sm text-zinc-400 hover:text-emerald-400">Betting 101</Link></li>
              <li><Link href="/guides/how-to-read-odds" className="text-sm text-zinc-400 hover:text-emerald-400">How to Read Odds</Link></li>
              <li><Link href="/calculators" className="text-sm text-zinc-400 hover:text-emerald-400">Betting Calculators</Link></li>
              <li><Link href="/guides/bankroll-management" className="text-sm text-zinc-400 hover:text-emerald-400">Bankroll Tips</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-zinc-400 hover:text-emerald-400">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-400 hover:text-emerald-400">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-zinc-400 hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-400 hover:text-emerald-400">Terms of Service</Link></li>
              <li><Link href="/responsible-gambling" className="text-sm text-zinc-400 hover:text-emerald-400">Responsible Gambling</Link></li>
            </ul>
          </div>
        </div>

        {/* Best Sportsbooks Banner */}
        <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="font-semibold text-white mb-4">🏆 Top Rated Sportsbooks for 2025</h3>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://sportsbook.draftkings.com/?affiliate=oddscn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-emerald-500/20 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              DraftKings - $150 Bonus
            </a>
            <a 
              href="https://sportsbook.fanduel.com/?affiliate=oddscn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-emerald-500/20 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              FanDuel - $200 Bonus
            </a>
            <a 
              href="https://sports.betmgm.com/?affiliate=oddscn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-emerald-500/20 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              BetMGM - $1,500 Bonus
            </a>
            <a 
              href="https://sportsbook.caesars.com/?affiliate=oddscn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-emerald-500/20 border border-zinc-700 hover:border-emerald-500/50 rounded-lg text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              Caesars - $1,000 Bonus
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-500">
              © 2025 odds.cn. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 text-center md:text-right max-w-2xl">
              Gambling involves risk. Please gamble responsibly and only bet what you can afford to lose. 
              If you or someone you know has a gambling problem, call 1-800-GAMBLER. Must be 21+ to participate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
