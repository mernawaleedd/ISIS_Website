// hooks/useScrollAnimation.js
import { useInView } from "react-intersection-observer";

export const useScrollAnimation = (options = { threshold: 0.2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    ...options,
  });

  return { ref, inView };
};
