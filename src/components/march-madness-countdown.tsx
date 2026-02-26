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

export function MarchMadnessCountdown({ targetDate }: CountdownProps) {
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
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-3">
        {['Days', 'Hours', 'Mins', 'Secs'].map((label) => (
          <div key={label} className="bg-zinc-800/80 backdrop-blur rounded-xl p-3 min-w-[70px] text-center border border-zinc-700/50">
            <div className="text-2xl md:text-3xl font-bold text-white">--</div>
            <div className="text-xs text-zinc-500 uppercase mt-1">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  const isPast = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isPast) {
    return (
      <div className="inline-block px-6 py-3 bg-orange-500/20 border border-orange-500/30 rounded-xl animate-pulse">
        <span className="text-2xl font-bold text-orange-400">🏀 TOURNAMENT TIME! 🏀</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' },
      ].map(({ value, label }) => (
        <div
          key={label}
          className="bg-zinc-800/80 backdrop-blur rounded-xl p-3 min-w-[70px] text-center border border-orange-500/20"
        >
          <div className="text-2xl md:text-3xl font-bold text-orange-400">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs text-zinc-500 uppercase mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}
