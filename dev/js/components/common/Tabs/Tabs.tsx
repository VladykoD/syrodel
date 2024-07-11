import React, {useEffect, useState} from 'react';
import styles from './Tabs.module.scss'
import {infoTab} from 'COMPONENTS/pages/Products/ProdutsFilter/ProdutsFilter';
import clsx from 'clsx';

type Props = {
   tabsArr: infoTab[];
   className?: string;
}

export const Tabs = ({tabsArr, className}: Props) => {
  const [active, setActive] = useState(0)


  return <div className={clsx(styles.tabs, className || '')}>
    <div className={styles.tabHead}>
      {tabsArr.map((tab, i) => (
        <button
          key={tab.title}
          onClick={() => setActive(i)}
          className={`${styles.tabName}  ${active === i && styles.active}`}
        >
          {tab.title}
        </button>
      ))}
    </div>

    {tabsArr.map((tab, i) => (
        <div key={`${tab.text} ${tab.info}`} className={`${styles.tabBody} ${active === i && styles.active}`}>
          {tab.text && <div dangerouslySetInnerHTML={{ __html: tab.text}}/>}

          {tab.info && tab.info.map((el) => (
            <p key={el.caption} className={styles.listItem}>
              <span>{el.caption}</span>
              <span>{el.value}</span>
            </p>)
          )}
      </div>
    ))}
  </div>
}
