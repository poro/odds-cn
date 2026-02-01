import { Sportsbook } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SportsbookCardProps {
  sportsbook: Sportsbook;
  rank?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-zinc-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-zinc-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export function SportsbookCard({ sportsbook, rank }: SportsbookCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Rank & Logo */}
          <div className="flex items-center gap-4 p-6 md:w-1/4 bg-zinc-800/50">
            {rank && (
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {rank}
              </div>
            )}
            <div className="flex-1">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-emerald-400">
                  {sportsbook.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-white text-lg">{sportsbook.name}</h3>
              <StarRating rating={sportsbook.rating} />
            </div>
          </div>

          {/* Bonus */}
          <div className="flex-1 p-6 border-t md:border-t-0 md:border-l border-zinc-800">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-3">
              Welcome Bonus
            </Badge>
            <p className="text-2xl font-bold text-white mb-2">{sportsbook.bonus}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {sportsbook.features.slice(0, 3).map((feature) => (
                <Badge 
                  key={feature} 
                  variant="outline" 
                  className="text-xs text-zinc-400 border-zinc-700"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 border-t md:border-t-0 md:border-l border-zinc-800 flex flex-col justify-center md:w-1/4">
            <Button 
              asChild
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
            >
              <a href={sportsbook.affiliateUrl}>
                Claim Bonus →
              </a>
            </Button>
            <p className="text-xs text-zinc-500 text-center mt-2">
              21+ • T&Cs Apply
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SportsbookCardCompact({ sportsbook }: { sportsbook: Sportsbook }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-emerald-400">
              {sportsbook.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-white">{sportsbook.name}</h3>
            <StarRating rating={sportsbook.rating} />
          </div>
        </div>
        
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-3">
          <p className="text-sm text-emerald-400 font-medium">{sportsbook.bonus}</p>
        </div>

        <Button 
          asChild
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm"
        >
          <a href={sportsbook.affiliateUrl}>
            Get Bonus
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
