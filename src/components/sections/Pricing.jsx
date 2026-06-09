import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small sellers just getting started',
      features: [
        'Up to 100 SKUs',
        'Real-time inventory tracking',
        'Basic demand forecasting',
        'Email alerts',
        '7-day data history',
        'Standard support'
      ],
      highlight: false
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      description: 'For growing stores with advanced needs',
      features: [
        'Up to 1,000 SKUs',
        'Advanced AI forecasting',
        'WhatsApp + Slack alerts',
        'Seasonal trend analysis',
        '90-day data history',
        'API access',
        'Priority support'
      ],
      highlight: true
    },
    {
      name: 'Advanced',
      price: '$199',
      period: '/month',
      description: 'Enterprise-grade for high-volume sellers',
      features: [
        'Unlimited SKUs',
        'Full AI suite + assistant',
        'Multi-channel integration',
        'Email marketing automation',
        'Custom webhooks',
        'Advanced analytics',
        'Dedicated account manager'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle text-gray-600">Start free, upgrade anytime. No surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all ${plan.highlight ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105' : 'bg-white shadow-lg text-gray-900'} p-8`}
            >
              {plan.highlight && (
                <div className="bg-white bg-opacity-20 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3 className={`text-3xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>{plan.period}</span>
              </div>

              <Link
                href="#signup"
                className={`block text-center py-3 rounded-lg font-semibold mb-8 transition-all ${plan.highlight ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Get Started
              </Link>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`text-xl flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-green-500'}`}>
                      ✓
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Money-Back Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Try StockSense AI risk-free for 30 days. If you're not satisfied, we'll refund your money. No questions asked. Our goal is to prove we'll save you thousands in inventory costs.
          </p>
        </div>
      </div>
    </section>
  );
}