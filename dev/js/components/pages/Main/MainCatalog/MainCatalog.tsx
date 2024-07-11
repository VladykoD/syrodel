import styles from './MainCatalog.module.scss';
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {PrimitivesProps} from "COMMON/content/primitives/Primitives";
import {Picture, PictureProps} from "COMMON/content/picture/Picture";
import {Link} from "react-router-dom";
import {useClassName} from "HOOKS/useClassName";


export type Props = {
  title?: string;
  catalogList?: catalogItem[]
}

export type catalogItem = {
  key: string,
  title: string;
  link: string;
  amount: number;
  mainImage: PictureProps;
  minorImage: PictureProps;
}

export const MainCatalog = ({title, catalogList}: Props) => {
  const [el, setEl] = useState<HTMLElement | null>(null);
  const [parent, setParent] = useState<HTMLElement | null>(null);
  const ulList = useClassName(styles.catalogList, 'title-h3', el ? styles.listActive : '');
  const activeLi = useRef<HTMLElement | null>(null)

  const showImage = (e:any) => {
    e.currentTarget.className = styles.active
    setEl(e.currentTarget)
  }
  const hideImage = (e:any) => {
    setEl(null)
    e.currentTarget.className = ''
  }
  useEffect(() => {
    if (!el) return;


    setTimeout(() => {
    //  el.className = styles.active
    }, 200)

  }, [el])

  useEffect(() => {

    //console.log(activeLi.current)
  }, [parent])

  return <section className={styles.section}>
    {title && <h2 className="visually-hidden">{title}</h2>}
    <div className="container">
      {
        catalogList && <>
          <ul ref={setParent}  className={ulList}>
            {catalogList.map((item) => {
              return <li data-key={item.key}
                         onMouseEnter={(e) => showImage(e)}
                         onMouseLeave={(e) => hideImage(e)}
                  key={item.key}>
                <Link
                    to={item.link}
                    data-col={item.amount}
                    dangerouslySetInnerHTML={{__html: item.title}}
                  />
                <div className={styles.imageLarge}><Picture {...item.mainImage}/></div>
                <div className={styles.imageSmall}><Picture {...item.minorImage}/></div>
              </li>
            })}
          </ul>
        </>
      }
    </div>
  </section>
}
