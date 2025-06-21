'use client'

export default function SubscribePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🚫 Trial Ended</h1>
      <p className="text-gray-600 text-lg mb-6 max-w-xl">
        Your 7-day free trial has expired. Choose a plan below to continue using InstaLanding AI and unlock your saved progress.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Starter Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">Starter</h2>
          <p className="text-gray-500 mb-4">Basic tools and AI Page Builder</p>
          <div className="text-3xl font-bold mb-4">$30<span className="text-base font-normal">/mo</span></div>
          <a
            href="https://www.paypal.com/ncp/payment/P-8J385431257693220NBJOFGY"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 block"
          >
            Subscribe to Starter
          </a>
        </div>

        {/* Pro Plan (Most Popular) */}
        <div className="border-2 border-green-600 rounded-xl p-6 shadow-lg relative bg-green-50 hover:shadow-xl transition">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              Most Popular
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 mt-6">Pro</h2>
          <p className="text-gray-600 mb-4">Everything in Starter + Marketing AI</p>
          <div className="text-3xl font-bold mb-4">$50<span className="text-base font-normal">/mo</span></div>
          <a
            href="https://www.paypal.com/ncp/payment/P-5KS970638V415520NNBJRZJI"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 block"
          >
            Subscribe to Pro
          </a>
        </div>

        {/* Empire Plan */}
        <div className="border rounded-xl p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">Empire</h2>
          <p className="text-gray-500 mb-4">Full access + EmpireGPT + Autopilot</p>
          <div className="text-3xl font-bold mb-4">$70<span className="text-base font-normal">/mo</span></div>
          <a
            href="https://www.paypal.com/ncp/payment/P-53664638YR292514XNBJRZ6A"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 block"
          >
            Subscribe to Empire
          </a>
        </div>
      </div>
    </div>
  )
}
