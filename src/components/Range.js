import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Range = ({ width, skill }) => {
  const theme = useSelector((store) => store.theme.theme);
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const rangeRef = useRef(null);

  useEffect(() => {
    const currentRef = rangeRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the progress bar
          const widthValue = typeof width === 'string' ? parseFloat(width.replace('%', '')) : width;
          setTimeout(() => {
            setAnimatedWidth(widthValue);
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [width]);

  return (
    <div ref={rangeRef} className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <span className={`text-base md:text-lg font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
          {skill}
        </span>
        <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          {animatedWidth}%
        </span>
      </div>
      <div className={`w-full h-3 md:h-4 rounded-full overflow-hidden ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-200"
      } shadow-inner`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${animatedWidth}%` }}
        >
          {animatedWidth > 0 && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Range;
