'use client';

import Link from 'next/link';
import { useState } from 'react';
import { sportCategories } from '@/lib/mock-data';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold text-white">
              odds<span className="text-emerald-400">.cn</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Live Odds
            </Link>
            
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-1">
                Sports
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {sportCategories.map((sport) => (
                  <Link
                    key={sport.id}
                    href={`/sports/${sport.id}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 first:rounded-t-lg last:rounded-b-lg"
                  >
                    <span>{sport.icon}</span>
                    {sport.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/sportsbooks" 
              className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Sportsbooks
            </Link>
            
            <Link 
              href="/guides" 
              className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Guides
            </Link>

            <Link 
              href="/calculators" 
              className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Calculators
            </Link>
          </nav>

          {/* Super Bowl CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/super-bowl"
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              🏈 Super Bowl →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <nav className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live Odds
              </Link>
              <div className="px-4 py-2 text-xs uppercase text-zinc-500 font-semibold">Sports</div>
              {sportCategories.slice(0, 6).map((sport) => (
                <Link
                  key={sport.id}
                  href={`/sports/${sport.id}`}
                  className="px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{sport.icon}</span>
                  {sport.name}
                </Link>
              ))}
              <Link 
                href="/sportsbooks" 
                className="px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sportsbooks
              </Link>
              <Link 
                href="/guides" 
                className="px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link 
                href="/calculators" 
                className="px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calculators
              </Link>
              <Link
                href="/super-bowl"
                className="mx-4 mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg text-center flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                🏈 Super Bowl Odds →
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
