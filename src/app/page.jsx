"use client";
import React, { useEffect, useCallback, useState } from "react";
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

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/pulse-play.apk";
    link.download = "pulse-play.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col transition-colors duration-200">
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
                <a
                  href="/trust-and-safety"
                  className="text-gray-700 dark:text-gray-300 font-inter"
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
          </div>
        )}
      </nav>

      <main className="pt-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-inter leading-tight">
                  Level Up Your
                  <span className="text-[#6366F1] dark:text-[#818CF8]">
                    {" "}
                    Fitness
                  </span>
                  <br />
                  Journey
                </h1>
                <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 font-inter">
                  Transform your workouts into an epic adventure. Track,
                  compete, and earn rewards while achieving your fitness goals.
                </p>
                <div className="mt-8 flex justify-center md:justify-start">
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center bg-[#6366F1] text-white px-12 py-4 rounded-full font-inter hover:bg-[#4F46E5] transition-colors text-lg"
                  >
                    <i className="fas fa-download text-xl mr-2"></i>
                    Download Now
                  </button>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img
                  src="https://ucarecdn.com/21c4f589-e282-4f04-bc19-1ff63023ad7d/-/format/auto/"
                  alt="Pulse Play App Interface"
                  className="w-full max-w-md rounded-3xl shadow-2xl float"
                />
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center">
                    <i className="fas fa-gamepad text-white text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">
                  Gamified Workouts
                </h3>
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-inter">
                  Turn your fitness routine into an exciting game with
                  challenges and rewards.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center">
                    <i className="fas fa-users text-white text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">
                  Social Features
                </h3>
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-inter">
                  Connect with friends, join challenges, and compete on global
                  leaderboards.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-16 h-16 bg-[#6366F1] rounded-full flex items-center justify-center">
                    <i className="fas fa-chart-line text-white text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">
                  Progress Tracking
                </h3>
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-inter">
                  Monitor your achievements and track your fitness journey with
                  detailed analytics.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <a href="/" className="text-xl font-bold">
                Pulse Play
              </a>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Corporate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/trust-and-safety"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/trust-and-safety"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Download App</h3>
              <div className="space-y-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center bg-[#6366F1] text-white px-8 py-3 rounded-full font-inter hover:bg-[#4F46E5] transition-colors w-full"
                >
                  <i className="fas fa-download text-xl mr-2"></i>
                  Download Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 Pulse Play. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400">Made with</span>
              <i className="fas fa-heart text-red-500 mx-2"></i>
              <span className="text-gray-400">in India</span>
            </div>
          </div>
        </div>
      </footer>

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

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        .color-transition * {
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
            border-color 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
