import { useEffect, useState } from 'react';

interface useViewportObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersectViewport: IntersectionObserverCallback;
}

const useViewportObserver = ({
  root,
  rootMargin = '0px',
  threshold = 0.5,
  onIntersectViewport,
}: useViewportObserverProps) => {
  const [shownCard, setShownCard] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!shownCard) return;

    const viewPostObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = parseInt(entry.target.id);

        if (!entry.isIntersecting) {
          document
            .querySelectorAll('.searchResult-card__component')
            [id].classList.remove('active');
          return;
        }

        document
          .querySelectorAll('.searchResult-card__component')
          [id].classList.add('active');
      });
    });

    document
      .querySelectorAll('.searchResult-card__component')
      .forEach((box) => {
        viewPostObserver.observe(box);
      });

    return () => {
      viewPostObserver && viewPostObserver.disconnect();
    };
  }, [onIntersectViewport, root, rootMargin, shownCard, threshold]);

  return { setShownCard };
};

export default useViewportObserver;
