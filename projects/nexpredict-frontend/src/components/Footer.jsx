import React, { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribe:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0d0d12] border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-3">NexPredict</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Decentralized prediction markets on Algorand. Make predictions, place bets, win rewards.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  Browse Predictions
                </a>
              </li>
              <li>
                <a href="#/create-prediction" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  Create Prediction
                </a>
              </li>
              <li>
                <a href="#/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://github.com/S-Rushidhar-1999/NexPredict" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-10 pb-8">
          <div className="max-w-md">
            <h4 className="text-base font-medium text-white mb-2">Stay in the loop</h4>
            <p className="text-sm text-gray-500 mb-4">Get updates on new predictions and platform news.</p>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-[#1a1a20] border border-gray-700 rounded-md focus:outline-none focus:border-gray-600 text-white text-sm placeholder-gray-600"
                required
              />
              <button
                type="submit"
                className="px-5 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2026 NexPredict. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/S-Rushidhar-1999/NexPredict"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

