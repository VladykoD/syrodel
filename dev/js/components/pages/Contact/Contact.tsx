import React, {useEffect, useRef} from 'react';
import styles from './Contact.module.scss';

import {ContactMap} from "COMPONENTS/ui/ContactMap/ContactMap";
import {useSelector} from "STORE/store";
import {DownloadIcon} from "COMMON/buttons/DownloadIcon/DownloadIcon";


export type Props = {
  title?: string;
  address?: any;
  contacts?: any;
  leftBlock?: any;
  rightBlock?: any;
  downloadLink?: any;
}

export const Contact = ({title, address, contacts, leftBlock, rightBlock, downloadLink}: Props) => {

  const lang = useSelector(state => state.cheesyState.lang)
  const langRef = useRef('ru')

  useEffect(() => {
    langRef.current = lang;
  }, [lang])

  return <section className={styles.section}>
    <h1 className="visually-hidden">{title}</h1>

    <div className={styles.container}>
      <div className={styles.colLeft}>
        {address &&
            <address className={styles.address}>
                <small className={styles.addressTitle} dangerouslySetInnerHTML={{__html: address.region}}/>
                <div className={styles.titleAddress}>
                    <span dangerouslySetInnerHTML={{__html: address.city}}/>
                    <br/>
                    <span dangerouslySetInnerHTML={{__html: address.street}}/>
                </div>
            </address>
        }

        <div className={styles.mainContacts}>
          <div>
            <a href={"mailto:" + contacts.mail}
               className={`${styles.mail} regular-link regular-link--underline`}>
              {contacts.mail}
            </a>
          </div>
          <div>
            {
                contacts && contacts.phones.map((phone: string, i:number) => {
                  return <a key={'mainC' + i} className="link" href={"tel:" + phone}>{phone}</a>
                })
            }
          </div>
        </div>

        <div className={styles.secondaryContact}>

          <dl className={`${styles.phonesList}`}>
            {
                leftBlock && leftBlock.map((block: { title: string; phone: string;},  i: number ) => {
                  return <div key={'left'+i}>
                    <dt>{block.title}</dt>
                    <dd>
                      <a className="link" href={"tel:" + block.phone}>{block.phone}</a>
                    </dd>
                  </div>
                })
            }
          </dl>

          {downloadLink &&
              <div className={styles.download}>
                <DownloadIcon link={downloadLink.link} extension={downloadLink.extension} text={downloadLink.text} size={downloadLink.size} />
              </div>
          }
        </div>
      </div>

      <div className={styles.colRight}>
        <div className={styles.map} >
          <ContactMap address={address}/>
        </div>

        <dl className={`${styles.phonesMap} ${styles.phonesList}`}>
          {
              rightBlock && rightBlock.map((block: { title: string; phone: string;}, i:number ) => {
                return <div key={'right' + i}>
                  <dt>{block.title}</dt>
                  <dd>
                    <a className="link" href={"tel:" + block.phone}>{block.phone}</a>
                  </dd>
                </div>
              })
          }
        </dl>
      </div>
    </div>
  </section>
}
