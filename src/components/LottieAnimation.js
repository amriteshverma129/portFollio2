import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({ 
  path, 
  className = "", 
  loop = true, 
  autoplay = true,
  speed = 1,
  onComplete,
  onLoopComplete,
  ...props 
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !path) return;

    // Clean up previous animation
    if (animationRef.current) {
      animationRef.current.destroy();
      animationRef.current = null;
    }

    // Load new animation
    try {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        path: path,
        renderer: "svg",
        loop: loop,
        autoplay: autoplay,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          clearCanvas: true,
        },
      });

      // Set animation speed
      if (animationRef.current && speed !== 1) {
        animationRef.current.setSpeed(speed);
      }

      // Event listeners
      if (onComplete && animationRef.current) {
        animationRef.current.addEventListener("complete", onComplete);
      }
      if (onLoopComplete && animationRef.current) {
        animationRef.current.addEventListener("loopComplete", onLoopComplete);
      }
    } catch (error) {
      console.error("Error loading Lottie animation:", error);
    }

    // Cleanup function
    return () => {
      if (animationRef.current) {
        if (onComplete) {
          animationRef.current.removeEventListener("complete", onComplete);
        }
        if (onLoopComplete) {
          animationRef.current.removeEventListener("loopComplete", onLoopComplete);
        }
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [path, loop, autoplay, speed, onComplete, onLoopComplete]);

  return (
    <div
      ref={containerRef}
      className={`lottie-container ${className}`}
      {...props}
    />
  );
};

export default LottieAnimation;

