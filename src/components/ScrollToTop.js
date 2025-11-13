import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ScrollToTop = () => {
  const theme = useSelector((store) => store.theme.theme);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 rounded-full shadow-lg transition-all duration-300 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-0 pointer-events-none"
      } ${
        theme === "dark"
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/50"
          : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-blue-400/50"
      } hover:scale-110 active:scale-95`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;

