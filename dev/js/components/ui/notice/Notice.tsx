import styles from './Notice.module.scss';

import React, {useEffect, useRef} from 'react';
import {useClassName} from 'HOOKS/useClassName';
import {Portal} from '../modal/Portal';
import {useDispatch, useSelector} from 'STORE/store';
import {removeNotice} from 'STORE/slices/Options';

type T_PropsItem = {
  text: string;
  status?: 'error' | 'normal';
  onClose: () => void;
}

const NoticeItem = (props: T_PropsItem) => {
  const timer = useRef(setTimeout(() => props.onClose(), 5000));

  useEffect(() => (() => clearTimeout(timer.current)));

  const className = useClassName(styles.item, props.status === 'error' && styles.error);

  return <div className={className}>
    <p className={styles.inner}>
      {props.text}
    </p>
  </div>
}

export const NoticeWrapper = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.options.notices);

  const notices = items.map((item, index) => (
    <NoticeItem {...item} key={'n-' + index} onClose={() => dispatch(removeNotice(item.id))}/>
  ))

  return <Portal className={styles.wrapper}>
    {notices}
  </Portal>
}
