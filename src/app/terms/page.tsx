import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Odds.cn',
  description: 'Terms of service for Odds.cn. Please read these terms carefully before using our website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Badge className="bg-zinc-700 text-zinc-300 border-zinc-600 mb-4">
            Legal
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-400">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-zinc-400">
              By accessing and using Odds.cn, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Age Requirement</h2>
            <p className="text-zinc-400">
              You must be at least 21 years of age to use this website. By using Odds.cn, you represent 
              and warrant that you are at least 21 years old. Sports betting is not legal in all 
              jurisdictions. It is your responsibility to ensure that you comply with all applicable 
              laws in your jurisdiction.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">No Gambling Services</h2>
            <p className="text-zinc-400">
              Odds.cn does not offer gambling services. We are an informational website that provides 
              odds comparison, sportsbook reviews, and betting education. We do not accept bets, 
              process payments, or operate as a sportsbook in any capacity.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Affiliate Disclosure</h2>
            <p className="text-zinc-400">
              Odds.cn participates in affiliate programs with various sportsbooks. This means we may 
              earn a commission when you click on links to sportsbooks and sign up or make a deposit. 
              This does not affect our reviews or recommendations, which are based on thorough, 
              independent evaluation.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Disclaimer</h2>
            <p className="text-zinc-400 mb-4">
              The information provided on Odds.cn is for general informational purposes only. While we 
              strive to keep the information up to date and accurate, we make no representations or 
              warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
              suitability, or availability of the information.
            </p>
            <p className="text-zinc-400">
              Gambling involves risk. Please gamble responsibly and only bet what you can afford to lose. 
              If you or someone you know has a gambling problem, call 1-800-GAMBLER.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-zinc-400">
              All content on Odds.cn, including text, graphics, logos, and software, is the property of 
              Odds.cn or its content suppliers and is protected by intellectual property laws. You may 
              not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-zinc-400">
              In no event shall Odds.cn be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses, resulting from your access to or use of or inability to 
              access or use the website.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-zinc-400">
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes by posting the new Terms of Service on this page with an updated 
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-zinc-400">
              If you have any questions about these Terms of Service, please contact us at 
              legal@odds.cn.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
