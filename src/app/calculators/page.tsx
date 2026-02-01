'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              🧮 Free Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Betting <span className="text-emerald-400">Calculators</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Essential tools for smart bettors. Calculate payouts, convert odds, 
              and find value in any bet.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Tabs defaultValue="parlay" className="space-y-8">
          <TabsList className="bg-zinc-900 border border-zinc-800 p-1 w-full flex flex-wrap justify-start">
            <TabsTrigger value="parlay" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Parlay Calculator
            </TabsTrigger>
            <TabsTrigger value="converter" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Odds Converter
            </TabsTrigger>
            <TabsTrigger value="implied" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Implied Probability
            </TabsTrigger>
            <TabsTrigger value="hedge" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Hedge Calculator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="parlay">
            <ParlayCalculator />
          </TabsContent>

          <TabsContent value="converter">
            <OddsConverter />
          </TabsContent>

          <TabsContent value="implied">
            <ImpliedProbability />
          </TabsContent>

          <TabsContent value="hedge">
            <HedgeCalculator />
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="mt-12 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Ready to Place Your Bets?</h2>
              <p className="text-zinc-400">
                Get the best odds and bonuses at our top-rated sportsbooks.
              </p>
            </div>
            <Link href="/sportsbooks">
              <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">
                Compare Sportsbooks →
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function ParlayCalculator() {
  const [stake, setStake] = useState<number>(100);
  const [legs, setLegs] = useState<{ odds: string }[]>([{ odds: '-110' }, { odds: '-110' }]);

  const parseOdds = (odds: string): number => {
    const num = parseInt(odds);
    if (isNaN(num)) return 0;
    if (num > 0) return (num / 100) + 1;
    return (100 / Math.abs(num)) + 1;
  };

  const calculateParlay = () => {
    let multiplier = 1;
    for (const leg of legs) {
      const decimal = parseOdds(leg.odds);
      if (decimal > 0) multiplier *= decimal;
    }
    return multiplier;
  };

  const addLeg = () => {
    setLegs([...legs, { odds: '-110' }]);
  };

  const removeLeg = (index: number) => {
    if (legs.length > 2) {
      setLegs(legs.filter((_, i) => i !== index));
    }
  };

  const updateLeg = (index: number, odds: string) => {
    const newLegs = [...legs];
    newLegs[index] = { odds };
    setLegs(newLegs);
  };

  const multiplier = calculateParlay();
  const payout = stake * multiplier;
  const profit = payout - stake;

  const toAmericanOdds = (decimal: number): string => {
    if (decimal >= 2) {
      return '+' + Math.round((decimal - 1) * 100);
    }
    return '-' + Math.round(100 / (decimal - 1));
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          🎯 Parlay Calculator
        </h2>
        <p className="text-zinc-400 mb-6">
          Calculate potential payouts for multi-leg parlays. Add your odds and stake amount.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Stake Amount ($)</label>
              <input
                type="number"
                value={stake}
                onChange={(e) => setStake(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                placeholder="100"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-zinc-400">Parlay Legs (American Odds)</label>
              {legs.map((leg, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={leg.odds}
                    onChange={(e) => updateLeg(index, e.target.value)}
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white font-mono focus:border-emerald-500 focus:outline-none"
                    placeholder="-110"
                  />
                  <button
                    onClick={() => removeLeg(index)}
                    className="px-3 py-2 bg-zinc-800 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 rounded-lg transition-colors"
                    disabled={legs.length <= 2}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <Button onClick={addLeg} variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                + Add Leg
              </Button>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-zinc-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Parlay Results</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                <span className="text-zinc-400">Number of Legs</span>
                <span className="text-white font-semibold">{legs.length}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                <span className="text-zinc-400">Combined Odds</span>
                <span className="text-emerald-400 font-mono font-semibold">
                  {multiplier > 0 ? toAmericanOdds(multiplier) : '—'}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                <span className="text-zinc-400">Stake</span>
                <span className="text-white font-semibold">${stake.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                <span className="text-zinc-400">Potential Profit</span>
                <span className="text-emerald-400 font-semibold">
                  ${profit > 0 ? profit.toFixed(2) : '0.00'}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-emerald-500/10 rounded-lg px-4">
                <span className="text-white font-semibold">Total Payout</span>
                <span className="text-2xl text-emerald-400 font-bold">
                  ${payout > 0 ? payout.toFixed(2) : '0.00'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function OddsConverter() {
  const [american, setAmerican] = useState<string>('-110');
  const [decimal, setDecimal] = useState<string>('1.91');
  const [fractional, setFractional] = useState<string>('10/11');
  const [activeInput, setActiveInput] = useState<'american' | 'decimal' | 'fractional'>('american');

  const convertFromAmerican = (odds: string) => {
    const num = parseInt(odds);
    if (isNaN(num)) return;
    
    let dec: number;
    if (num > 0) {
      dec = (num / 100) + 1;
    } else {
      dec = (100 / Math.abs(num)) + 1;
    }
    
    setDecimal(dec.toFixed(2));
    
    // Convert to fractional
    const frac = dec - 1;
    const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
    const numerator = Math.round(frac * 100);
    const denominator = 100;
    const divisor = gcd(numerator, denominator);
    setFractional(`${numerator / divisor}/${denominator / divisor}`);
  };

  const convertFromDecimal = (odds: string) => {
    const num = parseFloat(odds);
    if (isNaN(num) || num <= 1) return;
    
    // Convert to American
    if (num >= 2) {
      setAmerican('+' + Math.round((num - 1) * 100));
    } else {
      setAmerican('-' + Math.round(100 / (num - 1)));
    }
    
    // Convert to fractional
    const frac = num - 1;
    const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
    const numerator = Math.round(frac * 100);
    const denominator = 100;
    const divisor = gcd(numerator, denominator);
    setFractional(`${numerator / divisor}/${denominator / divisor}`);
  };

  const convertFromFractional = (odds: string) => {
    const parts = odds.split('/');
    if (parts.length !== 2) return;
    const num = parseInt(parts[0]);
    const den = parseInt(parts[1]);
    if (isNaN(num) || isNaN(den) || den === 0) return;
    
    const dec = (num / den) + 1;
    setDecimal(dec.toFixed(2));
    
    // Convert to American
    if (dec >= 2) {
      setAmerican('+' + Math.round((dec - 1) * 100));
    } else {
      setAmerican('-' + Math.round(100 / (dec - 1)));
    }
  };

  const handleChange = (type: 'american' | 'decimal' | 'fractional', value: string) => {
    setActiveInput(type);
    if (type === 'american') {
      setAmerican(value);
      convertFromAmerican(value);
    } else if (type === 'decimal') {
      setDecimal(value);
      convertFromDecimal(value);
    } else {
      setFractional(value);
      convertFromFractional(value);
    }
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          🔄 Odds Converter
        </h2>
        <p className="text-zinc-400 mb-6">
          Convert between American, Decimal, and Fractional odds formats instantly.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">American Odds</label>
            <input
              type="text"
              value={american}
              onChange={(e) => handleChange('american', e.target.value)}
              className={`w-full bg-zinc-800 border rounded-lg px-4 py-3 text-white font-mono text-lg focus:outline-none transition-colors ${
                activeInput === 'american' ? 'border-emerald-500' : 'border-zinc-700 focus:border-emerald-500'
              }`}
              placeholder="-110"
            />
            <p className="text-xs text-zinc-500 mt-2">e.g., -110, +150</p>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Decimal Odds</label>
            <input
              type="text"
              value={decimal}
              onChange={(e) => handleChange('decimal', e.target.value)}
              className={`w-full bg-zinc-800 border rounded-lg px-4 py-3 text-white font-mono text-lg focus:outline-none transition-colors ${
                activeInput === 'decimal' ? 'border-emerald-500' : 'border-zinc-700 focus:border-emerald-500'
              }`}
              placeholder="1.91"
            />
            <p className="text-xs text-zinc-500 mt-2">e.g., 1.91, 2.50</p>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Fractional Odds</label>
            <input
              type="text"
              value={fractional}
              onChange={(e) => handleChange('fractional', e.target.value)}
              className={`w-full bg-zinc-800 border rounded-lg px-4 py-3 text-white font-mono text-lg focus:outline-none transition-colors ${
                activeInput === 'fractional' ? 'border-emerald-500' : 'border-zinc-700 focus:border-emerald-500'
              }`}
              placeholder="10/11"
            />
            <p className="text-xs text-zinc-500 mt-2">e.g., 10/11, 3/2</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-zinc-800/50 rounded-lg">
          <h3 className="font-semibold text-white mb-2">💡 Quick Reference</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-zinc-400">Even money:</p>
              <p className="text-white font-mono">+100 / 2.00 / 1/1</p>
            </div>
            <div>
              <p className="text-zinc-400">2-to-1 favorite:</p>
              <p className="text-white font-mono">-200 / 1.50 / 1/2</p>
            </div>
            <div>
              <p className="text-zinc-400">2-to-1 underdog:</p>
              <p className="text-white font-mono">+200 / 3.00 / 2/1</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ImpliedProbability() {
  const [odds, setOdds] = useState<string>('-110');
  
  const calculateImpliedProbability = (americanOdds: string): number => {
    const num = parseInt(americanOdds);
    if (isNaN(num)) return 0;
    
    if (num > 0) {
      return 100 / (num + 100) * 100;
    } else {
      return Math.abs(num) / (Math.abs(num) + 100) * 100;
    }
  };

  const impliedProb = calculateImpliedProbability(odds);
  const breakEvenProb = impliedProb;

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          📊 Implied Probability Calculator
        </h2>
        <p className="text-zinc-400 mb-6">
          Find out what the sportsbook thinks the chances of winning are based on the odds.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">American Odds</label>
            <input
              type="text"
              value={odds}
              onChange={(e) => setOdds(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white font-mono text-xl focus:border-emerald-500 focus:outline-none"
              placeholder="-110"
            />
            
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold text-white">Common Odds Reference</h3>
              <div className="space-y-2">
                {['-200', '-150', '-110', '+100', '+150', '+200', '+300'].map((o) => (
                  <button
                    key={o}
                    onClick={() => setOdds(o)}
                    className={`px-3 py-1 rounded text-sm font-mono mr-2 transition-colors ${
                      odds === o 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Results</h3>
            
            <div className="mb-6">
              <div className="text-sm text-zinc-400 mb-2">Implied Probability</div>
              <div className="text-4xl font-bold text-emerald-400">
                {impliedProb > 0 ? impliedProb.toFixed(1) : '—'}%
              </div>
            </div>

            {/* Visual Bar */}
            <div className="mb-6">
              <div className="h-4 bg-zinc-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${Math.min(impliedProb, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-zinc-500 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-zinc-700">
                <span className="text-zinc-400">Break-even Win Rate</span>
                <span className="text-white font-semibold">{breakEvenProb.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-700">
                <span className="text-zinc-400">True Odds (no vig)</span>
                <span className="text-white font-semibold">{(100 / impliedProb).toFixed(2)}x</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <p className="text-xs text-emerald-400">
                💡 <strong>Tip:</strong> If you think the real probability is higher than {impliedProb.toFixed(1)}%, 
                this bet has value!
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function HedgeCalculator() {
  const [originalStake, setOriginalStake] = useState<number>(100);
  const [originalOdds, setOriginalOdds] = useState<string>('+200');
  const [hedgeOdds, setHedgeOdds] = useState<string>('-150');

  const parseOdds = (odds: string): number => {
    const num = parseInt(odds);
    if (isNaN(num)) return 0;
    if (num > 0) return num / 100;
    return 100 / Math.abs(num);
  };

  const calculateHedge = () => {
    const origDecimal = parseOdds(originalOdds);
    const hedgeDecimal = parseOdds(hedgeOdds);
    
    if (origDecimal <= 0 || hedgeDecimal <= 0) {
      return { hedgeStake: 0, guaranteedProfit: 0, originalPayout: 0, hedgePayout: 0 };
    }

    const originalPayout = originalStake * (1 + origDecimal);
    const hedgeStake = originalPayout / (1 + hedgeDecimal);
    const hedgePayout = hedgeStake * (1 + hedgeDecimal);
    const guaranteedProfit = originalPayout - originalStake - hedgeStake;

    return {
      hedgeStake: Math.round(hedgeStake * 100) / 100,
      guaranteedProfit: Math.round(guaranteedProfit * 100) / 100,
      originalPayout: Math.round(originalPayout * 100) / 100,
      hedgePayout: Math.round(hedgePayout * 100) / 100,
    };
  };

  const results = calculateHedge();

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          ⚖️ Hedge Calculator
        </h2>
        <p className="text-zinc-400 mb-6">
          Lock in guaranteed profit by hedging your existing bet.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Original Stake ($)</label>
              <input
                type="number"
                value={originalStake}
                onChange={(e) => setOriginalStake(Number(e.target.value))}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                placeholder="100"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Original Bet Odds</label>
              <input
                type="text"
                value={originalOdds}
                onChange={(e) => setOriginalOdds(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white font-mono focus:border-emerald-500 focus:outline-none"
                placeholder="+200"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400 mb-2 block">Hedge Bet Odds (opposite side)</label>
              <input
                type="text"
                value={hedgeOdds}
                onChange={(e) => setHedgeOdds(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white font-mono focus:border-emerald-500 focus:outline-none"
                placeholder="-150"
              />
            </div>
          </div>

          <div className="bg-zinc-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Hedge Strategy</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Bet This Amount to Hedge</div>
                <div className="text-3xl font-bold text-emerald-400">${results.hedgeStake}</div>
              </div>

              <div className="flex justify-between py-3 border-b border-zinc-700">
                <span className="text-zinc-400">If Original Wins</span>
                <span className="text-white font-semibold">${results.originalPayout.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-700">
                <span className="text-zinc-400">If Hedge Wins</span>
                <span className="text-white font-semibold">${results.hedgePayout.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-zinc-700">
                <span className="text-zinc-400">Total Wagered</span>
                <span className="text-white font-semibold">${(originalStake + results.hedgeStake).toFixed(2)}</span>
              </div>
              
              <div className="p-4 bg-zinc-700/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Guaranteed Profit</span>
                  <span className={`text-2xl font-bold ${results.guaranteedProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    ${results.guaranteedProfit.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
