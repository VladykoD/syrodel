import styles from './Logo.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router";

type Props = {
  to: string;
  color: string;
  className?: string
}
const LogoSVG = ({fill, className}: {fill: string; className: string;}) => (
  <div data-animation="icon" className={styles.logoSvgWrap}>
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} fillRule="evenodd" d="M33.483 0H8.523C3.84 0 0 3.84 0 8.528v24.95C0 38.166 3.84 42 8.523 42h24.954C38.166 42 42 38.16 42 33.478V8.528C42.006 3.839 38.172 0 33.483 0ZM21.207 14.63 14.841 21l6.364 6.37a8.994 8.994 0 0 0 12.73 0 9.005 9.005 0 0 0 0-12.74 8.994 8.994 0 0 0-12.73 0Zm-17.891 0L9.681 21l-6.365 6.37a8.926 8.926 0 0 1-1.513 1.204V13.426a8.701 8.701 0 0 1 1.513 1.204Zm15.313 15.323-6.365-6.37-6.37 6.37c-2.13 2.129-2.956 5.084-2.503 7.847a6.712 6.712 0 0 0 5.138 2.39h11.863a9.004 9.004 0 0 0-1.763-10.237Zm-6.371-11.53-6.365-6.37c-2.123-2.129-2.95-5.09-2.507-7.847a6.698 6.698 0 0 1 5.137-2.397H20.38c1.594 3.345 1.012 7.475-1.757 10.244l-6.365 6.37Z"/>
    </svg>
  </div>
)

export const Logo = ({to, color}: Props) => {
  const location = useLocation()

  function setIndex() {
    if (location.pathname === '/') {
      window.location.reload();
    }
  }

  return <Link onClick={setIndex} to={to} className={styles.logo}>
    <LogoSVG fill={color} className={styles.logoSvg}/>
    <div>
      <span className={styles.logoTitle}>Vprok.tech</span>
      <span className={styles.logoSubtitle}>отдел it разработки Vprok.ru</span>
    </div>
  </Link>
}
