export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Real-time Inventory Tracking',
      description: 'Monitor stock levels across all channels instantly. Know exactly what you have, where you have it, and when it\'s running low.',
      items: ['Live stock updates', 'Multi-channel sync', 'Alert thresholds']
    },
    {
      icon: '🤖',
      title: 'AI Demand Forecasting',
      description: 'Predict future demand with ML algorithms. Understand seasonality, trends, and customer behavior before they impact your business.',
      items: ['Seasonal trends', 'Historical analysis', '90-day forecasts']
    },
    {
      icon: '🔔',
      title: 'Smart Reorder Alerts',
      description: 'Get notified before you run out. Automated alerts via WhatsApp, Slack, and Email keep you ahead of stockouts.',
      items: ['Multi-channel alerts', 'Customizable thresholds', 'Instant notifications']
    },
    {
      icon: '📈',
      title: 'Performance Dashboard',
      description: 'Beautiful, intuitive dashboard showing inventory health, sales trends, and actionable insights at a glance.',
      items: ['Real-time metrics', 'Trend visualization', 'Export reports']
    },
    {
      icon: '💬',
      title: 'AI Assistant (Coming Soon)',
      description: 'Ask questions naturally. "What should I restock?" "Which products are trending?" Get instant answers.',
      items: ['Natural language', 'Smart suggestions', 'Data insights']
    },
    {
      icon: '🔗',
      title: 'Shopify & Marketplace Integration',
      description: 'Connect your Shopify store, Amazon, eBay, and more. Unified inventory management across all platforms.',
      items: ['Shopify sync', 'Amazon integration', 'Multi-channel support']
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features Built for E-commerce</h2>
          <p className="section-subtitle text-gray-600">Everything you need to manage inventory like a COO</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}