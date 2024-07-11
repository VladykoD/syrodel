import styles from './ProdutsFilter.module.scss';
import React, {useRef, useState} from 'react';
import useQuery from 'HOOKS/useQuery';
import {Picture, PictureProps} from "COMMON/content/picture/Picture";
import {DownloadIcon} from "COMMON/buttons/DownloadIcon/DownloadIcon";
import {Filter} from "COMMON/Filter/Filter";
import {useLocation} from "react-router";
import {Tabs} from 'COMMON/Tabs/Tabs';
import {Primitives} from 'COMMON/content/primitives/Primitives';
import {Popup} from 'COMPONENTS/ui/popup/Popup';

// Удачи!

export type Props = {
  title?: string;
  infoLink?: linkType;
  quantityProducts?: string;
  filters: filterType[];
  products: productsType[];
  connectInfo: string;
}

export type linkType = {
  text: string,
  link: string,
  extension: string,
}
export type filterType = {
  name: string;
  filter: string;
  texts?: string[];
  subFilter: {
    name: string;
    filter: string;
  }[];
  selected?: boolean;
}
export type productsType = {
  filterId: string;
  subFilter: string[];
  id: number;
  techId: string;
  type: string;
  size?: string;
  name?: string;
  alignClass?: string;
  color?: string;
  image?: PictureProps;
  details?: detailsType[];
  content?: string;
  additionalInfo?: infoTab[];
}

export type infoTab = {
  title: string,
  info?: {
    caption: string,
    value: string
  }[];
  text?: string;
}

type detailsType = {
  caption: string;
  value: string;
}



export const ProductsFilter = ({title, infoLink, quantityProducts, filters, products, connectInfo}: Props) => {
  const wrapRef = useRef<any>(null)
  const {pathname, search} = useLocation()

  const groups: {[key: string]: productsType[]} = {};
  const filtersArray: string[] = [];
  const filtersNames: {[key: string]: string} = {};
  const filtersTexts: {[key: string]: string[]} = {};

  const searchFilter = useQuery().get('filter');
  const searchSubFilter = useQuery().get('subfilter');
  const selectedProductRef = useRef<productsType>(products[0])
  const [modalOpened, setModalOpened] = useState(false);

  //const textsObj:any;


  products.forEach((item) => {
    const {filterId} = item;
    if (!groups[filterId]) {
      groups[filterId] = [];
    }

    groups[filterId].push(item);
  })

  filters.forEach(({filter, name, texts}) => {
    filtersArray.push(filter);
    filtersNames[filter] = name;

    if (!filter && texts) {
      filtersTexts['type0'] = texts ;
    }

    if (texts) {
      filtersTexts[filter] = texts ;
    } else {
      filtersTexts[filter] = [];
    }
  })

  const getRandomArbitrary = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const sendToServer = (e:any) => {
    e.preventDefault();

    // search - отправляем на сервер
    // console.log(products)
  }

  const openModal = (id: number) => {
    selectedProductRef.current = products.filter((el) => el.id === id)[0];
    setModalOpened(true);
  }


  return <>
    <section className={styles.catalogPage}>
      <div className={styles.column}>
        <div>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.quantity}>
            {quantityProducts}
          </p>
        </div>

        {infoLink &&
          <div className={styles.download}>
            <DownloadIcon link={infoLink.link} extension={infoLink.extension} text={infoLink.text} />
          </div>
        }
      </div>
      <div className={styles.filterWrap}>
        <div className={styles.filter}>
          <Filter items={filters} pathname={pathname} filterName='filter'/>
        </div>
      </div>
    </section>

    <section className={styles.productsSection}>
      <div className={styles.productsWrap} ref={wrapRef}>
        {products
            .filter(n => searchFilter === null ? n.filterId : (n.filterId === searchFilter))
            .filter(n => searchSubFilter === null ? n.subFilter : (n.subFilter.includes(searchSubFilter)))
            .map((item, index) => {
              let elem = <div key={item.id}/>;

              if (products.length > 2  && (index === 3 || index === 7)) {
                if (!searchFilter && filtersTexts['type0']) {
                  elem = <div key={item.id} className={`${styles.productWrap} ${styles.productText}`}>
                    <div dangerouslySetInnerHTML={{__html: filtersTexts['type0'][getRandomArbitrary(0, filtersTexts['type0'].length - 1)]}}/>
                  </div>
                }

                if (searchFilter && filtersTexts[searchFilter]) {
                  elem = <div key={item.id} className={`${styles.productWrap} ${styles.productText}`}>
                    <div dangerouslySetInnerHTML={{__html: filtersTexts[searchFilter][getRandomArbitrary(0, filtersTexts[searchFilter].length - 1)]}}/>
                  </div>
                }

              } else {
                elem = <div key={item.id}>
                  <div className={`${styles.product}`} style={{backgroundColor: item.color}}>
                    <button onClick={() => openModal(item.id)} className={styles.productLink}/>
                    <div className={styles.productImage}>
                      {item.image && <Picture /*state={onLoad}*/ {...item.image}/>}
                    </div>
                    {item.name && <b className={styles.productName} dangerouslySetInnerHTML={{__html: item.name || ''}}/>}
                    {item.details && <dl className={styles.productDetails}>
                      {item.details.map((detail, i) => {
                        return <div key={item.id + i}>
                          <dt dangerouslySetInnerHTML={{__html: detail.caption}}/>
                          <dd dangerouslySetInnerHTML={{__html: detail.value}}/>
                        </div>
                      })}
                    </dl>}
                  </div>
                </div>
              }

              return elem
            })
        }
      </div>
      <button type="button" onClick={(e) => sendToServer(e)} className="catalog-page__load-more js-load-more" data-page="1">
        <span className="regular-link regular-link--underline ">
            {quantityProducts}
        </span>
        <svg width="15" height="18" aria-hidden="true">
          <use href="#icon-arrow"></use>
        </svg>
      </button>
    </section>


    <Popup color={selectedProductRef.current.color} active={modalOpened} onClose={() => setModalOpened(false)}>
      <div className={styles.modalWrap}>
        <div className={styles.modalImage}>
          {selectedProductRef.current.image && <Picture {...selectedProductRef.current.image}/>}
        </div>
        <div className={styles.modalInfo}>
          <p className={styles.modalTechId}>{selectedProductRef.current.techId}</p>
          {selectedProductRef.current.name && <div className={styles.modalName} dangerouslySetInnerHTML={{__html: selectedProductRef.current.name}}/>}
          <p className={styles.marketingInfo} dangerouslySetInnerHTML={{__html:connectInfo}}/>
          {selectedProductRef.current.additionalInfo && <Tabs className={styles.modalTabs} tabsArr={selectedProductRef.current.additionalInfo}/>}
        </div>
      </div>
    </Popup>
  </>
}
function useRouter(): { locale: any; } {
    throw new Error('Function not implemented.');
}
