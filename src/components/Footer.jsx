import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold">StockSense AI</span>
            </div>
            <p className="text-sm text-gray-400">
              The AI COO for E-commerce — Predict stockouts before they kill your profit.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="#roadmap" className="hover:text-white transition">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#privacy" className="hover:text-white transition">Privacy</Link></li>
              <li><Link href="#terms" className="hover:text-white transition">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2026 StockSense AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}