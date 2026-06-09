export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">The Challenge E-commerce Sellers Face</h2>
          <p className="section-subtitle text-gray-600">Two critical problems that damage your profit every single day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem 1 */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <div className="mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center text-2xl">❌</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Out-of-Stock Trap</h3>
            <p className="text-gray-700 mb-6">
              Running out of products leads to lost sales, lower rankings, missed opportunities, and frustrated customers. One stockout can cost weeks of lost revenue.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Lost sales and revenue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Decreased search rankings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Unhappy customers</span>
              </li>
            </ul>
          </div>

          {/* Problem 2 */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8">
            <div className="mb-4">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">💰</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Dead Capital Trap</h3>
            <p className="text-gray-700 mb-6">
              Overstocking ties up cash in unsold inventory, limiting your ability to grow, market, or invest in new opportunities. Money stuck in storage is money not growing.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Wasted capital in storage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Reduced marketing budget</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">Slower business growth</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <p className="text-lg text-gray-800">
            <strong>The Result?</strong> Most sellers manually manage inventory, making guesses based on gut feeling. They miss the data, miss the trends, and miss the profit.
          </p>
        </div>
      </div>
    </section>
  );
}