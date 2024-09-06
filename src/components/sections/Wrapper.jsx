import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Wrapper({ children, count, setCount, className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector(`.${className}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCount(count);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className={twMerge("py-40", count === 1 && "pt-0", count === 7 && "pb-0")}
    >
      {children}
    </div>
  );
}
