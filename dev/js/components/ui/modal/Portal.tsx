import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

type T_Props = {
  children: React.ReactNode | null;
  className?: string;
  tag?: string;
  bg?: string;
}

export const Portal = ({ bg, children, className = 'root-portal', tag = 'div' }: T_Props) => {
  const [container] = useState(document.createElement(tag));

  container.className = className;
  if (bg) {
    container.style.background = bg;
  }

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    }
  }, []);

  return ReactDOM.createPortal(children, container);
}
