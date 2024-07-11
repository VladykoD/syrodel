import styles from './HTMLContent.module.scss';

import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useClassName} from 'HOOKS/useClassName';


type Props = {
  children?: string | string[];
  className?: string;
}

export const HTMLContent = ({children, className}: Props) => {
  const navigate = useNavigate();
  const c = useClassName(styles.container, className);

  if (!children) return null;

  const onClick = (e: React.MouseEvent) => {
    const {target} = e;

    if (target instanceof Element) {
      const targetLink = target.closest('a');
      if(!targetLink) return;
      e.preventDefault();

      const {href} = targetLink;
      const {origin} = window.location;

      if (href.includes(origin)) {
        navigate(targetLink.href.replace(window.location.origin, '') || '/');
      } else {
        window.open(href, '_blank');
      }
    }
  }

  let content = '';
  if (Array.isArray(children)) {
    content = children.join(' ')
  } else if (typeof children === 'string') {
    content = children;
  }

  return <div className={c} onClick={onClick} dangerouslySetInnerHTML={{__html: content}}/>
}