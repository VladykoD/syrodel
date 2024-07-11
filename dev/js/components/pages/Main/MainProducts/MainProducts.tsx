import styles from './MainProducts.module.scss';
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";
import {Picture, PictureProps} from "COMMON/content/picture/Picture";
import {useClassName} from "HOOKS/useClassName";
import {Link} from "react-router-dom";
import {useSelector} from "STORE/store";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/scss/navigation';
import {Navigation, A11y} from "swiper";

export type Props = {
  title?: string;
  allProducts?: string;
  productsArray?: productItem[];
}

export type productItem = {
  id: number;
  key: string;
  title: string;
  description: PrimitivesProps;
  color: string;
  details: {
    caption: string;
    value: string;
  }[];
  image: PictureProps;
  aboutLink: {
    title: string;
    link: string
  }
}

const Slide = ({active, item}: { active: boolean; item: productItem; }) => {
  const className = useClassName(styles.componentWrap, active && styles.active)

  // className={className}

  return <div key={item.key} className={styles.slideItem}>
      <div className={styles.image} style={{backgroundColor: item.color}}>
        {item.image && <Picture {...item.image}/>}
      </div>
      <div className={`${styles.leftBlock} ${styles.text}`}>
        <h3 className={styles.title} dangerouslySetInnerHTML={{__html: item.title}}/>
        {item.description && <Primitives {...item.description}/>}
        <ul className={styles.about}>
          {item.details && item.details.map((detailsItem) => {
            return <li key={detailsItem.value}>
              <b dangerouslySetInnerHTML={{__html: detailsItem.value}}/>
              <small dangerouslySetInnerHTML={{__html: detailsItem.caption}}/>
            </li>
          })}
        </ul>
        <div className={styles.links}>
          <Link to={item.aboutLink.link} className="regular-link regular-link--underline">
            {item.aboutLink.title}
          </Link>
        </div>
      </div>
    </div>
}


export const MainProducts = ({title, allProducts, productsArray}: Props) => {
  let active = 0;
  const lang = useSelector(state => state.cheesyState.lang)
  const langRef = useRef('ru')
  const [index, setIndex] = useState(1)

  useEffect(() => {
    langRef.current = lang;
  }, [lang])

  return <section className={styles.products}>
    <h2 className="visually-hidden">{title}</h2>
    {productsArray &&
        <div className={styles.slider}>
            <div className={`${styles.container} ${styles.wrap}`}>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    speed={400}
                    slidesPerView={1.1}
                    navigation={{
                      prevEl: '.prev',
                      nextEl: '.next',
                    }}
                    keyboard={true}
                    loop={true}
                    onSlideChange={(swiper) => {
                      setIndex( swiper.realIndex + 1 )
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {productsArray.map((SlideItem: productItem, i: number) =>
                    <SwiperSlide key={'slide' + i}>
                      {({ isActive }) => (
                        <Slide  active={isActive} item={SlideItem}/>
                      )}
                    </SwiperSlide>
                )}
                </Swiper>
            </div>

            <div className={`${styles.container} ${styles.navContainer}`}>
                <div className={styles.navWrap}>
                  <div className={styles.image}></div>
                  <div className={`${styles.leftBlock} ${styles.text} ${styles.navigation}`}>

                          <div className={styles.btnsWrap}>
                              <button className={`${styles.btn} ${styles.prev} prev`} type="button" aria-label="Предыдущий товар">
                                  <span className="arrow-icon"></span>
                              </button>
                              <button className={`${styles.btn} ${styles.next} next`} type="button" aria-label="Следующий товар">
                                  <span className="arrow-icon"></span>
                              </button>
                          </div>
                          <div className={styles.slideNumber}>
                              <div className={styles.current}>{active < 10 ? '0' + index : index}</div>
                              <div className={styles.all}>{productsArray && productsArray?.length < 10 ? '0' + productsArray?.length : productsArray?.length}</div>
                          </div>
                          <Link to='/products' className="regular-link regular-link--underline">
                            {allProducts}
                          </Link>

                  </div>
                </div>
            </div>
        </div>
    }
  </section>
}
