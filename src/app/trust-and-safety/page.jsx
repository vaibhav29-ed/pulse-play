"use client";
import React, { useState, useEffect } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(savedTheme === "dark" || (!savedTheme && prefersDark));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply theme to document
      document.documentElement.classList.toggle("dark", isDark);
      // Save preference
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold text-gray-900 dark:text-white font-inter"
              >
                Pulse Play
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter"
                >
                  About Us
                </a>
                <a
                  href="/team"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter"
                >
                  Team
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter"
                >
                  Contact
                </a>
                <a
                  href="/trust-and-safety"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter"
                >
                  Trust & Safety
                </a>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <i className="fas fa-sun text-xl"></i>
                  ) : (
                    <i className="fas fa-moon text-xl"></i>
                  )}
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 dark:text-white"
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a
                href="/"
                className="block text-gray-700 dark:text-gray-300 font-inter"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-gray-700 dark:text-gray-300 font-inter"
              >
                About Us
              </a>
              <a
                href="/team"
                className="block text-gray-700 dark:text-gray-300 font-inter"
              >
                Team
              </a>
              <a
                href="/contact"
                className="block text-gray-700 dark:text-gray-300 font-inter"
              >
                Contact
              </a>
              <a
                href="/trust-and-safety"
                className="block text-gray-700 dark:text-gray-300 font-inter"
              >
                Trust & Safety
              </a>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <i className="fas fa-sun text-xl"></i>
                  ) : (
                    <i className="fas fa-moon text-xl"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-inter">
                Trust &{" "}
                <span className="text-[#6366F1] dark:text-[#818CF8]">
                  Safety
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 font-inter max-w-3xl mx-auto">
                Your safety, privacy, and fair play are our top priorities.
                Learn about our comprehensive approach to protecting our
                community.
              </p>
            </div>
          </section>

          <section className="py-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <i className="fas fa-shield-alt text-4xl text-[#6366F1] dark:text-[#818CF8] mb-4"></i>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                  Data Protection
                </h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-inter">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>End-to-end encryption for all personal data</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Regular security audits and updates</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>GDPR and CCPA compliant data handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <i className="fas fa-balance-scale text-4xl text-[#6366F1] dark:text-[#818CF8] mb-4"></i>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                  Fair Play Guidelines
                </h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-inter">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Anti-cheating detection systems</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Fair competition matching</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    <span>Regular leaderboard audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
              <i className="fas fa-heartbeat text-4xl text-[#6366F1] dark:text-[#818CF8] mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                Fitness Safety Tips
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white font-inter mb-2">
                    Before Exercise
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-inter">
                    Always warm up and check your surroundings for safety
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white font-inter mb-2">
                    During Exercise
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-inter">
                    Stay hydrated and listen to your body's signals
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white font-inter mb-2">
                    After Exercise
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-inter">
                    Cool down properly and track your recovery
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-8">
                Community Standards
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                    Privacy Commitments
                  </h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-inter">
                    <li className="flex items-start">
                      <i className="fas fa-lock text-[#6366F1] dark:text-[#818CF8] mt-1 mr-2"></i>
                      <span>Your data is never sold to third parties</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-user-shield text-[#6366F1] dark:text-[#818CF8] mt-1 mr-2"></i>
                      <span>Control over your data sharing preferences</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-eye-slash text-[#6366F1] dark:text-[#818CF8] mt-1 mr-2"></i>
                      <span>Privacy-first approach to social features</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                    Security Measures
                  </h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-inter">
                    <li className="flex items-start">
                      <i className="fas fa-fingerprint text-[#6366F1] dark:text-[#818CF8] mt-1 mr-2"></i>
                      <span>Biometric authentication support</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-shield-virus text-[#6366F1] dark:text-[#818CF8] mt-1 mr-2"></i>
                      <span>24/7 fraud monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-server text-[#6366F1] dark:text-[#818CF8] mt-1 mr-2"></i>
                      <span>Secure cloud infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-inter mb-8">
                Need Help?
              </h2>
              <a
                href="/contact"
                className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-md font-inter hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </section>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
