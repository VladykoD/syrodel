import './Filter.scss';

import React from 'react';
import {Link, To, useSearchParams} from 'react-router-dom';
import styles from "COMPONENTS/pages/Products/ProdutsFilter/ProdutsFilter.module.scss";


type LocalItem = {
  name: string;
  filter: string;
  filterName?: string;
  pathname: string;
  count?: number;
  texts?: string[];
  subFilter: {
    name: string;
    filter: string;
  }[]
}

export type Item = Omit<LocalItem, 'pathname' | 'filterName'>;
export type Props = {
  items: Item[];
  filterName?: string;
  className?: string;
  pathname: string;
}

export const normalizeUrl = (url: string) =>
  url
    .replace(/(\?)?$/igm, '')
    .replace(/(\/)?$/igm, '');


export const Filter = ({items, className, filterName, pathname}: Props) => {
  let c = 'filter';
  if (className) c = `${c} ${className}`;
  pathname = normalizeUrl(pathname);

  let subfilter = [{
    name: '',
    filter: '',
  }];
  let subfilterPath: To;
  let [searchParams] = useSearchParams();
  const searchFilter = searchParams.get('filter');
  const searchSubFilter = searchParams.get('subfilter');


  return <>
    <div className={c}>
    {
      items.map((item, i) => {
      const to = `${pathname}${item.filter ? `?${filterName}=${item.filter}` : ''}`;

      let c = 'button';
      if (searchFilter ? searchFilter === item.filter : !!searchFilter === !!item.filter) {
        c += ' active';
        subfilter = item.subFilter
        subfilterPath = to
      }

      return <Link key={'fi-' + item.filter} className={c} to={to} state={{className: 'filter'}}>
          {item.name}
        </Link>
    })}
  </div>

    <div className={styles.selectedList}>
      {subfilter && subfilter.map((subitem) => {
        let cSub = styles.selectedItem;


        if (searchSubFilter === subitem.filter) {
          cSub += ' ' + styles.active;
        }

          return <Link key={'fi-' + subitem.filter}
                       className={cSub}
                       to={ searchSubFilter === subitem.filter ? subfilterPath : subfilterPath + '&subfilter=' + subitem.filter}
                       state={{className: 'filter'}}>
            {subitem.name}
          </Link>
        })
      }
    </div>
  </>
}
