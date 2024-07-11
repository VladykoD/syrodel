import styles from './MainDelivery.module.scss';
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";
import {PictureProps} from "COMMON/content/picture/Picture";


export type deliveryProps = {
  title?: string;
  description?: PrimitivesProps;
  deliveryList?: {
    key: string;
    title: string;
    description: string
  }[]
}

import imgRus from './img/russia.jpg';
import imgAddr from './img/russia_addr.png';

export const MainDelivery = ({title, description, deliveryList}: deliveryProps) => {

  return <section className={styles.delivery}>
    <div className="container">
      <div className={styles.text}>
        <div className={styles.image}>
          <img className={styles.imgRus} src={imgRus}/>
          <img className={styles.imgAddr} src={imgAddr}/>
        </div>
        <div className={styles.textTitle}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <Primitives {...description}/>}
        </div>
        {deliveryList &&
            <ul className={styles.advantages}>
              {deliveryList.map((deliveryItem) => {
                  return  <li key={deliveryItem.key}>
                  <h3 className={styles.advantagesTitle} dangerouslySetInnerHTML={{__html: deliveryItem.title}}/>
                  <p className={styles.advantagesText} dangerouslySetInnerHTML={{__html: deliveryItem.description}}/>
                  </li>
                })}
            </ul>
        }
      </div>
    </div>
  </section>
}
