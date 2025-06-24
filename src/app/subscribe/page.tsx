
const plans = [
  {
    id: process.env.NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_ID_STARTER_TIER,
    name: "Starter",
    price: "$30/mo",
    features: [
      "AI Builder (limited)",
      "Marketing AI (basic prompts)",
      "Basic analytics",
    ],
    popular: false,
  },
  {
    id: process.env.NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_ID_PRO_TIER,
    name: "Pro",
    price: "$50/mo",
    features: [
      "AI Builder (full access)",
      "Marketing AI (advanced)",
      "Full analytics dashboard",
    ],
    popular: true,
  },
  {
    id: process.env.NEXT_PUBLIC_PAYPAL_SUBSCRIPTION_ID_EMPIRE_TIER,
    name: "Empire",
    price: "$70/mo",
    features: [
      "All Pro features",
      "EmpireGPT (unlimited)",
      "Priority support",
    ],
    popular: false,
  },
];

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Choose Your Plan</h1>
        <p className="mt-4 text-gray-600 text-lg">Upgrade to unlock full access to InstaLanding AI. Your empire begins here.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-6 shadow-md border ${
              plan.popular ? "border-blue-600 ring-2 ring-blue-500" : "border-gray-200"
            } bg-white flex flex-col`}
          >
            {plan.popular && (
              <span className="mb-2 inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
            <p className="text-3xl font-extrabold mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 flex-1">
              {plan.features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
              ))}
            </ul>

            <form action={`https://www.paypal.com/checkoutnow?subscription_id=${plan.id}`} method="get" className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe with PayPal
              </button>
            </form>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-gray-500">
        Already subscribed? <a href="/dashboard" className="text-blue-600 font-medium hover:underline">Go to your dashboard</a>
      </p>
    </main>
  );
}

