import styles from './MainJournal.module.scss';
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";
import {Picture, PictureProps} from "COMMON/content/picture/Picture";
import {Link} from "react-router-dom";
import {DownloadIcon} from "COMMON/buttons/DownloadIcon/DownloadIcon";


export type Props = {
  title?: string;
  description?: PrimitivesProps;
  journalImage?: PictureProps;
  journalBg?: PictureProps;
  onlineLink?: {
    text: string;
    link: string;
  };
  downloadLink?: {
    text: string;
    size: string;
    link: string;
    extension: string;
  }
}

export const MainJournal = ({title, description, journalImage, journalBg, onlineLink, downloadLink}: Props) => {
  return <section className={styles.catalog}>
    <div className={styles.wrap}>
      <div className={styles.left}>
        {journalBg &&
            <div className={styles.catalogBg}>
                <Picture {...journalBg}/>
            </div>}
        {journalImage &&
            <div className={styles.catalogImage}>
                <Picture {...journalImage} />
            </div>}
      </div>
      <div className={styles.right}>
        <div className={styles.textBlock}>
          {title && <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>}
          {description && <div className={styles.textContent}><Primitives {...description}/></div> }
        </div>
        <div className={styles.links}>
          {onlineLink &&
              <Link to={onlineLink.link} className="regular-link regular-link--underline"  target="_blank" rel="noopener noreferrer">
                {onlineLink.text}
              </Link>
          }
          {onlineLink && downloadLink && <br/>}
          {downloadLink &&
            <DownloadIcon link={downloadLink.link} extension={downloadLink.extension} text={downloadLink.text} size={downloadLink.size} />
          }
        </div>
      </div>
    </div>
  </section>
}
