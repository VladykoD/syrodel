import styles from './TextPage.module.scss';
import React from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";


export type Props = {
  title?: string;
  description?: PrimitivesProps;
}

export const TextPage = ({title, description}: Props) => {

  return <section className={styles.section}>
    <div className={styles.wrap}>
        {title && <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>}
      {description && <div className={styles.text}><Primitives {...description}/></div>}
    </div>
  </section>
}
