import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// * This is a custom hook to handle the reveal on scroll feature applied to each main page section.

const useObserver = (ref, action) => {
  // * dispatches change to the 'visibility' state of a specific component and launches an Observer to activate scroll effect
  const dispatch = useDispatch();

  useEffect(() => {
    const revealSection = (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      dispatch(action(entry.isIntersecting));

      observer.unobserve(ref.current);
    };

    const observer = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    observer.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useObserver;
