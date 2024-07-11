import React from 'react';
import styles from './ProductsTop.module.scss';
import {Picture, PictureProps} from "COMMON/content/picture/Picture";

export type Props = {
  image: PictureProps;
}

export const ProductsTop = ({image}: Props) => {

  return <section className={styles.section}>
    <Picture {...image}/>
  </section>
}
