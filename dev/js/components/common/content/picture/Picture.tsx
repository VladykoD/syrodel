import styles from './Picture.module.scss';
import React, {ReactEventHandler} from 'react';

export type PictureProps = {
  default: string[];
  webp?: string[];
  alt?: string;
  className?: string;
  state?: ReactEventHandler<HTMLImageElement> | undefined;
}

export const Picture = (props: PictureProps) => {
  return <picture className={`${styles.item} ${props.className} `}>
    {props.webp && <source type="image/webp"
       srcSet={props.webp[0] + ' 1x, ' + (props.webp[1] ? props.webp[1] + ' 2x ' : '')}/>}
    {props.default && <source type="image/jpg"
       srcSet={props.default[0] + ' 1x, ' + (props.default[1] ? props.default[1] + ' 2x ' : '')}/>}
    <img onLoad={props.state} src={props.default[0]} alt={props.alt}/>
  </picture>
}
