import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Odds.cn',
  description: 'Privacy policy for Odds.cn. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Badge className="bg-zinc-700 text-zinc-300 border-zinc-600 mb-4">
            Legal
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-zinc-400 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Contact information (email address)</li>
              <li>Usage data (pages visited, features used)</li>
              <li>Device information (browser type, operating system)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-zinc-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you updates, newsletters, and promotional materials</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="text-zinc-400">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. 
              This does not include trusted third parties who assist us in operating our website, 
              conducting our business, or servicing you, so long as those parties agree to keep this 
              information confidential.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Cookies</h2>
            <p className="text-zinc-400">
              We use cookies to understand and save your preferences for future visits, compile 
              aggregate data about site traffic and site interaction so that we can offer better 
              site experiences and tools in the future.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Third-Party Links</h2>
            <p className="text-zinc-400">
              Our website contains links to third-party websites, including sportsbooks. These 
              third-party sites have separate and independent privacy policies. We have no 
              responsibility or liability for the content and activities of these linked sites.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-zinc-400">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@odds.cn.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
