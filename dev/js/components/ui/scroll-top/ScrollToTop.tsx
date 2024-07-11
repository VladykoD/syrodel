import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function ScrollToTop() {
  const {pathname, search, state} = useLocation();

  useEffect(() => {
    let to = 0;
    if (state && typeof state === 'object') {
      const {className} = state as {className: string | undefined};
      if (typeof className === 'string') {
        const el = document.querySelector<HTMLDivElement>(`.${className}`);

        to = el?.offsetTop || 0;
      }
    }
    try {
      window.scroll({
        top: to,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(to, 0);
    }
  }, [pathname + search]);

  return null;
}