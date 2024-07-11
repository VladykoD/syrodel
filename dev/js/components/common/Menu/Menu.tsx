import styles from './Menu.module.scss';
import React, {useState} from 'react';
import {useDispatch, useSelector} from "STORE/store";
import translations from 'COMMON/translations';
import {Link, NavLink} from "react-router-dom";
import {Picture} from "COMMON/content/picture/Picture";
import {setMenuOpened} from "STORE/slices/CheesyState";

export const Menu = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(state => state.cheesyState.menuIsOpened)

  const changeState = () => {
    dispatch(setMenuOpened(false));
  }

  return <>
    <div className={`${styles.mainMenu} ${openMenu && styles.activeMenu}`}>
      <div className={styles.menuInner}>
        <div className={styles.textWrap}>
          <nav className={styles.menu}>
            <ul className={styles.primary}>
              {
                translations.ru.menu.primary.map(menuItem => {
                  return (<li key={menuItem.key}>
                    <NavLink onClick={changeState} to={menuItem.link}>{menuItem.title}</NavLink>
                  </li>)})
              }
            </ul>


          </nav>
          <div className={styles.contacts}>
            <div className={styles.links}>
              <div className={styles.mail}>
                <a key={'ru_mail'} href={"mailto:" + translations.ru.menu.contacts.mail}
                   className="regular-link regular-link--underline">
                  {translations.ru.menu.contacts.mail}
                </a>
              </div>
              <div className={styles.phones}>
                {
                  translations.ru.menu.contacts.phones.map(phone => {
                    return (<p key={phone}> {phone}</p>)
                  })
                }
              </div>
            </div>

           <address className={styles.address} dangerouslySetInnerHTML={{__html: translations.ru.menu.contacts.address}}/>
          </div>
        </div>
        <div className={styles.image}>
          <Picture
              default={translations.common.imageMenu.default}
              webp={translations.common.imageMenu.webp}
              alt={translations.common.imageMenu.alt}/>
        </div>
      </div>
    </div>
  </>
}
