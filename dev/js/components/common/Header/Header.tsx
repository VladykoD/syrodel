import styles from './Header.module.scss';

import React, {useState, useEffect, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "STORE/store";
import {Menu} from "COMMON/Menu/Menu";
import useGlobalDOMEvents from "HOOKS/useGlobalDOMEvents";
import {setLang, setMenuOpened} from "STORE/slices/CheesyState";


export const Header = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(state => state.cheesyState.menuIsOpened)

  const [isActive, setIsActive] = useState(openMenu);
  const lang = useSelector(state => state.cheesyState.lang)
  const langRef = useRef('ru')

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  useEffect(() => {
    langRef.current = lang;
  }, [lang])

  useEffect(() => {
    setIsActive(openMenu)
  }, [openMenu])

  useGlobalDOMEvents({
    keydown: (e) => {
      if (e.key.toLowerCase() === 'escape') {
        setIsActive(false);
      }
    }
  });

  useEffect(() => {
    dispatch(setMenuOpened(isActive));

    if (isActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isActive]);



  return <>
    <header className={styles.header}>
      <Link className={`${styles.header__logo} active`} to="/">
        <svg aria-hidden="true">
          <use xlinkHref="#logo__small"></use>
        </svg>
        <svg aria-hidden="true">
          <use xlinkHref="#logo__title"></use>
        </svg>
      </Link>
      <aside className={styles.header__aside}>

        <button className={`${styles.menuBtn} ${isActive ? styles.active : ''}`}
                onClick={() => {setIsActive(isActive => !isActive)}}>
          <div className={styles.icon}><span></span><span></span><span></span></div>
        </button>

        {/*<ul className={styles.langList}>
          <li className={styles.langListItem}>
            <Link key="ru"
                  className={langRef.current === 'ru' ? styles.active : ''}
                  to="/ru">Ru</Link>
          </li>
          <li className={styles.langListItem}>
            <Link key="en"
                  className={langRef.current === 'en' ? styles.active : ''}
                  to="/en">En</Link>
          </li>
        </ul>
        */}
        <div className={styles.bottomBlock}>
          <button className={styles.top} onClick={() => {toTop()}}>
            <span className="arrow-icon"></span>
          </button>

        </div>

      </aside>
    </header>

    <Menu/>
  </>
}
