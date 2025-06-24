import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full px-6 pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Build Your <span className="text-blue-600">Online Empire</span> with AI
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600">
            InstaLanding AI helps creators, entrepreneurs, and dreamers launch high-converting business pages — in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="/dashboard"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium border transition"
            >
              Go to Dashboard
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">7-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Why Use InstaLanding AI?</h2>
          <div className="grid sm:grid-cols-2 gap-10 text-left text-gray-700">
            <div>
              <h3 className="text-xl font-semibold">⚡ Instant AI Page Builder</h3>
              <p className="mt-2 text-sm">Type your idea. Click generate. Launch your business landing page in seconds — no design skills needed.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">📈 Real-Time Analytics</h3>
              <p className="mt-2 text-sm">Track page views, conversions, and launches. Know what works, tweak what doesn’t.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🎯 AI Marketing Tools</h3>
              <p className="mt-2 text-sm">Generate ad copy, email subject lines, and social media posts tailored to your product.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🧠 EmpireGPT Strategy AI</h3>
              <p className="mt-2 text-sm">Ask AI anything about business, growth, pricing, niches — and get strategic answers instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gray-50 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Try It Free. Unlock Your Empire Today.</h2>
          <p className="text-gray-600 mb-8">Launch faster. Convert better. Win bigger. Start with a 7-day free trial — and let AI handle the heavy lifting.</p>
          <Link
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-sm font-medium transition"
          >
            Create Your Empire
          </Link>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="px-6 py-20 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Explore the Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <Link href="/dashboard/builder" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              🔧 AI Builder → Instantly generate your landing page
            </Link>
            <Link href="/dashboard/marketing-ai" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              🧲 Marketing AI → Get ad, email & product copy
            </Link>
            <Link href="/dashboard/analytics" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              📊 Analytics → See what converts
            </Link>
            <Link href="/dashboard/empire-gpt" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              🧠 EmpireGPT → Get business growth answers
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-white border-t border-gray-200 text-sm text-center text-gray-500">
        <p>Built by Jonathan Paul Johnson Mwanyika © {new Date().getFullYear()}</p>
        <p className="mt-1">InstaLanding AI — The Business Empire Builder.</p>
      </footer>
    </main>
  );
}

