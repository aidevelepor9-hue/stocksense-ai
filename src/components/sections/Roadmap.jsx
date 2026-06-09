export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Data Pulse',
      status: 'Current',
      color: 'bg-blue-600',
      items: [
        'Shopify integration',
        'Inventory dashboard',
        'Sales tracking',
        'Basic alerts'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'AI Forecaster',
      status: 'Q3 2026',
      color: 'bg-purple-600',
      items: [
        'ML demand prediction',
        'Seasonal analysis',
        'Smart reorder alerts',
        'Performance insights'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Growth Agent',
      status: 'Q4 2026',
      color: 'bg-green-600',
      items: [
        'AI-generated ad copy',
        'Email marketing automation',
        'Pricing optimization',
        'Customer analytics'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Product Roadmap</h2>
          <p className="section-subtitle text-gray-600">Our vision to build the complete AI COO for e-commerce</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-gray-50 rounded-xl p-8 h-full border-2 border-gray-200">
                <div className={`${phase.color} text-white inline-block px-4 py-2 rounded-lg mb-4 text-sm font-semibold`}>
                  {phase.phase}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600 mb-6 font-medium">{phase.status}</p>
                
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`${phase.color} text-white text-sm font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow to next phase */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="text-gray-400 text-3xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Long-term Vision</h4>
          <p className="text-gray-700">
            Build a fully autonomous AI agent that manages inventory decisions for e-commerce businesses — saving time, increasing profit, and eliminating guesswork.
          </p>
        </div>
      </div>
    </section>
  );
}