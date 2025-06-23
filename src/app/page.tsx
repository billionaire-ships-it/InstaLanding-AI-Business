import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Launch Your AI-Powered Online Empire
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          InstaLanding AI helps entrepreneurs, creators, and founders build, launch, and scale profitable online businesses — instantly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/signup"
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl text-sm font-medium border transition"
          >
            Start Free Trial
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">No credit card required. 7-day trial included.</p>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-semibold">What You Can Do with InstaLanding AI</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left text-gray-700">
            <div>
              <h3 className="text-xl font-semibold">⚡ AI Landing Page Generator</h3>
              <p className="mt-2 text-sm">Type your product idea, and we generate a high-converting landing page copy in seconds.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🎯 Marketing Copy AI</h3>
              <p className="mt-2 text-sm">Get ad copy, email subject lines, and product descriptions tailored to your niche.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">📊 Real-Time Analytics</h3>
              <p className="mt-2 text-sm">Track your landing page views, conversions, and campaign performance easily.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🧠 EmpireGPT Business AI</h3>
              <p className="mt-2 text-sm">Ask anything about launching, scaling, or monetizing — get expert-level AI responses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Explore InstaLanding AI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <Link href="/dashboard/builder" className="bg-white hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              🔧 AI Page Builder → Create landing pages instantly
            </Link>
            <Link href="/dashboard/marketing-ai" className="bg-white hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              🧲 Marketing AI → Generate ad & email content
            </Link>
            <Link href="/dashboard/analytics" className="bg-white hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              📈 Analytics → Track your empire’s progress
            </Link>
            <Link href="/dashboard/empire-gpt" className="bg-white hover:bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition">
              🧠 EmpireGPT → Ask AI anything about growth
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-white border-t border-gray-200 text-sm text-center text-gray-500">
        <p>Built by Jonathan Paul Johnson Mwanyika © {new Date().getFullYear()}</p>
        <p className="mt-1">InstaLanding AI — Your Empire Begins Now.</p>
      </footer>
    </main>
  );
}
