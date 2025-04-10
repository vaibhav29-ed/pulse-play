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
                About{" "}
                <span className="text-[#6366F1] dark:text-[#818CF8]">
                  Pulse Play
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 font-inter max-w-3xl mx-auto">
                Our mission is to transform fitness into an engaging adventure
                that motivates and rewards you every step of the way.
              </p>
            </div>
          </section>

          <section className="py-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <i className="fas fa-gamepad text-4xl text-[#6366F1] dark:text-[#818CF8] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                  Gamified Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-inter">
                  Turn your fitness journey into an exciting game with quests,
                  achievements, and rewards.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <i className="fas fa-users text-4xl text-[#6366F1] dark:text-[#818CF8] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                  Community Challenges
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-inter">
                  Compete with friends, join teams, and participate in global
                  fitness challenges.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <i className="fas fa-chart-line text-4xl text-[#6366F1] dark:text-[#818CF8] mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                  Progress Tracking
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-inter">
                  Advanced analytics and progress tracking to help you achieve
                  your fitness goals.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-inter mb-8">
                Ready to Start Your Journey?
              </h2>
              <a
                href="/app-debug.apk"
                download
                className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-md font-inter hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-download mr-2"></i>
                Download Android App
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
