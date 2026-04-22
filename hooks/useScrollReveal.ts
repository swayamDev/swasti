import { useEffect, useState, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {},
): {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
} => {
  const { threshold = 0.1, rootMargin = "0px" } = options;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
