import Head from "next/head";
import React, { useState, useEffect } from "react";

import Landing from "./Landing";
import Info from "./Info";
import Plans from "./Plans";
import Reviews from "./Reviews";
import Form from "./Form";
import Footer from "./Footer";

export default function Home() {
  // Define state for the theme mode (light or dark)
  const [mode, setMode] = useState<string>('dark'); // Default mode is 'dark'

  // Define state for Back to Top button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of Back to Top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply the stored mode from localStorage on page load
  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setMode(storedMode);
    } else {
      setMode('dark'); // Default to dark mode if no mode is found
    }
  }, []);

  // Set the `dark` class on the `html` element based on the mode
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (mode === 'dark') {
      htmlElement.classList.add('dark');
      localStorage.setItem("mode", 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem("mode", 'light');
    }
  }, [mode]);

  return (
    <>
      <Head>
        <title>NextGen</title>
        <meta name="description" content="NextGen landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white dark:bg-gray-900 transition-all duration-500 ease-in-out">
        <main className="flex flex-col items-center justify-center text-gray-900 dark:text-white">
          <div className="main-container">
            {/* Main content */}
            <Landing />
            <Info />
            <Plans />
            <Reviews />
            <Form />
            <Footer />

            {isVisible && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:translate-y-[-10px] transition-all ease-in-out duration-500"
                aria-label="scroll to top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </button>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
