import styles from './MainManufacture.module.scss';
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";
import {Picture, PictureProps} from "COMMON/content/picture/Picture";
import {Link} from "react-router-dom";


export type Props = {
  title?: string;
  description?: PrimitivesProps;
  asideImage?: PictureProps;
  mainImage?: PictureProps;
  linksArray?: {
    title: string;
    link: string;
  }[];
  chart?: chartProps
}

export type chartProps = {
  title?: string;
  chartArray: {
    caption: string;
    value: string;
  }[];
}


export const MainManufacture = ({title, description, asideImage, mainImage, linksArray, chart}: Props) => {
  let maxValue = useRef(0)

  useEffect(() => {
    if (!chart) return;
    let text = '';
    let number = 0;

    for (let key in chart.chartArray) {
      text = chart.chartArray[key].value

      text = text.replaceAll(/[a-zа-яё]/gi, "");
      number = parseFloat(text);
      if (maxValue.current < number)  maxValue.current = parseFloat(text)
    }

  }, [chart])


  return <section className={styles.section}>
    <div className={styles.manufacture}>
      {title && <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>}
      <div className={styles.descr}>
        <div className={styles.left}>
          {asideImage && <Picture {...asideImage} />}
        </div>
        <div className={styles.right}>
          {mainImage && <Picture {...mainImage} />}
          <div className={styles.text}>
            {description && <Primitives {...description}/>}
         </div>
        </div>
      </div>
      <div className={styles.info}>
        {
          linksArray && <ul className={styles.links}>
              {
                linksArray.map((link, i) => {
                return <li key={'la' + i}>
                  <Link className="arrow-link" to={link.link}>
                    {link.title}<span  className="arrow-icon"></span>
                  </Link>
                </li>})
              }
          </ul>
        }

        {
          chart &&
            <div className={styles.chart}>
                <div className={styles.svgWrap}>
                  {chart.chartArray && chart.chartArray.map((elem, i) => {
                    let number = parseFloat(elem.value.replaceAll(/[a-zа-яё]/gi, ""));
                    let deg = number * 270 / maxValue.current

                    return  <div key={elem.value} className={styles.circleItem}>
                      <div style={{background: `conic-gradient(hsl(240, 44%, ${24 + i * 8}%) ${deg}deg, #f6f7f9 ${deg}deg)`}}></div>
                    </div>
                  })}
                </div>
              {
                chart.title && <div className={styles.chartTitle}>
                  <span dangerouslySetInnerHTML={{__html: chart.title}}/>
                </div>
              }
              {
                chart.chartArray && <ul className={styles.chartList}>
                  {chart.chartArray.map((item, i) => {
                    return  <li key={'chart' + i}>
                      {item.caption}
                      <span>{item.value}</span>
                    </li>
                  })}
                </ul>
              }
            </div>
        }
      </div>
    </div>
  </section>
}
