import styles from './NoPage.module.scss'

import React from 'react';

export const NoPage = () => {
  return <section className={styles.section} >
    <h1 className={styles.title}>
      4
      <svg className={styles.image} aria-hidden="true">
        <use xlinkHref="#logo__small"></use>
      </svg>
      4
    </h1>
  </section>
}
