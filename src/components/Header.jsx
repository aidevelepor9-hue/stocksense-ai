import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-gray-900">StockSense AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">
            Features
          </Link>
          <Link href="#roadmap" className="text-gray-600 hover:text-gray-900 transition">
            Roadmap
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
            Pricing
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4">
          <Link href="#signup" className="btn-primary">
            Early Access
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="#features" className="block text-gray-600 hover:text-gray-900 py-2">
              Features
            </Link>
            <Link href="#roadmap" className="block text-gray-600 hover:text-gray-900 py-2">
              Roadmap
            </Link>
            <Link href="#pricing" className="block text-gray-600 hover:text-gray-900 py-2">
              Pricing
            </Link>
            <Link href="#contact" className="block text-gray-600 hover:text-gray-900 py-2">
              Contact
            </Link>
            <Link href="#signup" className="block btn-primary mt-4 text-center">
              Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}