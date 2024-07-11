import styles from './Footer.module.scss';

import {Link, NavLink} from 'react-router-dom';
import {useSelector} from 'STORE/store';
import translations from 'COMMON/translations';
import router from 'COMMON/router';
import {useEffect, useRef} from "react";

type Props = {
  base: string;
}

export const Footer = ({base}: Props) => {

  return <footer className={styles.footer}>
    <div className={styles.main}>
      <div className={styles.col}>
        <svg className={styles.logo} aria-hidden="true">
          <use xlinkHref="#logo__footer"></use>
        </svg>
      </div>
      <ul className={styles.nav}>
        {
          translations.ru.menu.primary.map(menuItem => {
            return (<li key={menuItem.key}>
              <NavLink to={menuItem.link}>{menuItem.title}</NavLink>
            </li>)
          })
        }
      </ul>
      <div className={`${styles.contacts} ${styles.mainContacts}`}>
        <a key={'ru_mail'} href={"mailto:" + translations.ru.menu.contacts.mail}
           className="regular-link regular-link--underline">
          {translations.ru.menu.contacts.mail}
        </a>
        <br/>
        {
          translations.ru.menu.contacts.phones.map(phone => {
                return (<p key={phone}> {phone}</p>)
              })
        }
      </div>
    </div>
    <div className={styles.secondary}>
      <div className={styles.copy}>
        <span>&copy;&nbsp;{translations.ru.copyright}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
      <div className={`${styles.contacts} ${styles.secondaryContact}`}>
        {<Link className="regular-link" to={translations.ru.policy.link}>{translations.ru.policy.title}</Link>}
      </div>
    </div>
  </footer>
}
