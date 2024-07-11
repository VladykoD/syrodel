import styles from './MainAdvantages.module.scss';
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";


export type Props = {
  title?: string;
  description?: PrimitivesProps;
  advantagesList?: {
    key: string;
    svgIcon: string;
    title: string;
    description: string;
  }[];
}

export const MainAdvantages = ({title, description, advantagesList}: Props) => {

  return <section className={styles.advantages}>
    <div className={styles.wrap}>
      <div className={styles.left}>
        {title && <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>}
        {description &&  <Primitives {...description}/>}
      </div>
      {advantagesList && <ul className={`${styles.right} ${styles.list}`}>
        {
          advantagesList.map((item) => {
            return <li key={item.key} className={styles.listItem}>
              <svg className={styles.listIcon} aria-hidden="true">
                <use xlinkHref={'#' + item.svgIcon}></use>
              </svg>
              <div className={styles.listTitle} dangerouslySetInnerHTML={{__html: item.title}}/>
              <div className={styles.listText} dangerouslySetInnerHTML={{__html: item.description}}/>
            </li>
          })
        }
      </ul>}
    </div>
  </section>
}
