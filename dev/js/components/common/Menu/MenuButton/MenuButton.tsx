import React from 'react';
import styles from './MenuButton.module.scss';

type Props = {
  active?: boolean;
  onClick?: () => void;
};

//TODO: меню закрывать по кнопке
export const MenuButton = ({active, onClick}: Props) => {
  return <button className={`${styles.menuBtn} ${active ? styles.active : ''}`} onClick={onClick}>
    <div className={styles.icon}><span></span><span></span><span></span></div>
  </button>
}
