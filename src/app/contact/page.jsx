"use client";
import React, { useState, useEffect } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/vaibhavsingh292005@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
      );

      if (response.ok) {
        setShowSuccessMessage(true);
        e.target.reset();
        setTimeout(() => setShowSuccessMessage(false), 5000); // Hide message after 5 seconds
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Sorry, there was an error submitting your form. Please try again."
      );
    }
  };

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
                Get in{" "}
                <span className="text-[#6366F1] dark:text-[#818CF8]">
                  Touch
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 font-inter max-w-3xl mx-auto">
                Have questions or feedback? We're here to help you on your
                fitness journey.
              </p>
            </div>
          </section>

          <section className="py-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-6">
                  Send us a Message
                </h2>

                {showSuccessMessage && (
                  <div className="absolute top-4 right-4 left-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 p-4 rounded-md shadow-lg animate-fade-in">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle mr-2"></i>
                        <span>Message sent successfully!</span>
                      </div>
                      <button
                        onClick={() => setShowSuccessMessage(false)}
                        className="text-green-700 dark:text-green-100 hover:opacity-70"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-inter"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-inter"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-inter"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-md font-inter hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-6">
                    Office Location
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white font-inter">
                        Kurukshetra, India
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-inter">
                        Thanesar, Haryana 136119
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-6">
                    Support Channels
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-[#6366F1] dark:text-[#818CF8] mr-3"></i>
                      <a
                        href="mailto:vaibhavsingh292005@gmail.com"
                        className="text-gray-700 dark:text-gray-300 font-inter hover:text-[#6366F1] dark:hover:text-[#818CF8]"
                      >
                        vaibhavsingh292005@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-6">
                    Follow Us
                  </h2>
                  <div className="flex space-x-6">
                    <a
                      href="https://www.linkedin.com/company/106835810/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6366F1] dark:text-[#818CF8] text-2xl hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <i className="fab fa-linkedin"></i>
                      <span className="ml-2 text-base">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white font-inter">
                    How do I get started with FitQuest?
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 font-inter">
                    Download the app from your device's app store, create an
                    account, and start your fitness journey!
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white font-inter">
                    What devices are supported?
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 font-inter">
                    FitQuest is available on iOS and Android devices running the
                    latest operating systems.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white font-inter">
                    How do achievements work?
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 font-inter">
                    Complete workouts and challenges to earn points and unlock
                    achievements. Track your progress in the achievements tab.
                  </p>
                </div>
              </div>
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
