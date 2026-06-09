import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The AI COO for <span className="text-blue-600">E-commerce</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Predict stockouts before they kill your profit. StockSense AI eliminates inventory guesswork with real-time tracking, AI forecasting, and smart reorder alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#signup" className="btn-primary text-center">
                Get Early Access
              </Link>
              <Link href="#features" className="btn-outline text-center">
                Learn More
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ✓ No credit card required • ✓ Free early access • ✓ Full feature access
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white mb-4 h-40 flex flex-col justify-between">
                <div>
                  <p className="text-sm opacity-80">Inventory Status</p>
                  <p className="text-3xl font-bold">87%</p>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Stock Alert</span>
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">Critical</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Reorder Needed</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">2 items</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Forecast Score</span>
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}