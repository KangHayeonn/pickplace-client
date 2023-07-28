import { useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 1,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold },
    );
    observer.observe(target);

    return () => {
      observer && observer.disconnect();
    };
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
