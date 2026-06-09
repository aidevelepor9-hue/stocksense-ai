'use client';

import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="signup" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-4">Get Early Access</h2>
        <p className="text-xl text-blue-100 mb-8">
          Be among the first to experience StockSense AI. Join 100+ early adopters and start optimizing your inventory today.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Joining...' : status === 'success' ? '✓ Joined!' : 'Join Now'}
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-4 text-green-200 font-medium">
              ✓ Check your email for early access details!
            </p>
          )}
        </form>

        <p className="text-sm text-blue-100">
          We'll never spam you. Unsubscribe anytime. Plus, get exclusive updates on new features.
        </p>
      </div>
    </section>
  );
}