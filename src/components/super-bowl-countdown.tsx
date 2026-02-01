'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function SuperBowlCountdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-4">
        {['Days', 'Hours', 'Mins', 'Secs'].map((label) => (
          <div key={label} className="bg-zinc-800/80 backdrop-blur rounded-xl p-4 min-w-[80px] text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">--</div>
            <div className="text-xs text-zinc-500 uppercase mt-1">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  const isGameTime = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isGameTime) {
    return (
      <div className="text-center">
        <div className="inline-block px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-xl animate-pulse">
          <span className="text-2xl font-bold text-red-400">🏈 GAME TIME! 🏈</span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Countdown to Kickoff</div>
      <div className="flex justify-center gap-4">
        <CountdownUnit value={timeLeft.days} label="Days" highlight={timeLeft.days <= 1} />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <CountdownUnit value={timeLeft.minutes} label="Mins" />
        <CountdownUnit value={timeLeft.seconds} label="Secs" pulse />
      </div>
    </div>
  );
}

function CountdownUnit({ 
  value, 
  label, 
  highlight = false,
  pulse = false 
}: { 
  value: number; 
  label: string; 
  highlight?: boolean;
  pulse?: boolean;
}) {
  return (
    <div 
      className={`
        bg-zinc-800/80 backdrop-blur rounded-xl p-4 min-w-[80px] text-center
        border ${highlight ? 'border-red-500/50' : 'border-zinc-700/50'}
        ${pulse ? 'animate-pulse' : ''}
      `}
    >
      <div className={`text-3xl md:text-4xl font-bold ${highlight ? 'text-red-400' : 'text-white'}`}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs text-zinc-500 uppercase mt-1">{label}</div>
    </div>
  );
}
