import './Spoiler.scss';

import React, {useEffect, useRef, useState} from 'react';

type SpoilerProps = React.PropsWithChildren<{
  button?: React.ReactNode;
  active?: boolean;
  className?: string;
}>;

export const Spoiler = ({button, active, children, className}: SpoilerProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(!!active);

  useEffect(() => {
    setIsActive(!!active);
  }, [active]);

  useEffect(() => {
    if (!contentRef.current) return;

  }, [isActive]);

  let c = 'spoiler';
  if (className) c = `${c} ${className}`;

  return <div className={c}>
    <button className='spoiler-button h4'>{button}</button>
    <div className='spoiler-content' ref={contentRef}>
      {children}
    </div>
  </div>
}