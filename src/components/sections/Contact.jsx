'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle text-gray-600">
              Have questions? Want to collaborate? We'd love to hear from you.
            </p>

            <div className="space-y-6 mt-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a href="mailto:hello@stocksense.ai" className="text-blue-600 hover:text-blue-700">
                  hello@stocksense.ai
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Social</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition">GitHub</a>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-700">
                  <strong>Interested in early access?</strong> The best way to get started is to fill out the form on the right or join our early access list above.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm font-medium">
                  ✓ Thanks for reaching out! We'll respond within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}