import React, { useEffect, useRef } from "react";

export default function Wrapper({ children, count, setCount }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCount(count);
          }
        });
      },
      {
        threshold: 0.2,
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
  return <div ref={containerRef}>{children}</div>;
}
