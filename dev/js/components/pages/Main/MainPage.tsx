import React from 'react';
import styles from './MainPage.module.scss';

import {Picture, PictureProps} from "COMMON/content/picture/Picture";
import {Link} from "react-router-dom";

import circle from './circle.png'

export type Props = {
  title?: string;
  mainImage?: PictureProps;
  asideBlock?: aside;
}
export type aside = {
  caption: string,
  link: string;
  image: PictureProps;
}

export const MainPage = ({title, mainImage, asideBlock}: Props) => {

  return <section className={styles.firstSection}>
    <div className={styles.wrap}>
      <div className={styles.left}>
        {
            asideBlock &&
            <Link to={asideBlock.link} className={styles.productionLink} >
                <Picture default={asideBlock.image.default}
                         webp={asideBlock.image.webp}
                         alt={asideBlock.image.alt}/>
                <span className="arrow-link">{asideBlock.caption}<span className="arrow-icon"></span></span>
            </Link>
        }
        {
          title && <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>
        }
      </div>
      <div className={styles.right}>
        {
          mainImage && <Picture default={mainImage.default} webp={mainImage.webp} alt={mainImage.alt}/>
        }
        <div className={styles.roundBlock}>
          <img src={circle}/>
        </div>
      </div>
    </div>
  </section>
}
