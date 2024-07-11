import styles from './MainContacts.module.scss';
import React, {Fragment, useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";
import {Input, T_InputType, T_PropsCommon} from "COMPONENTS/ui/form/input/Input";
import translations from "COMMON/translations";
import {useSelector} from "STORE/store";

import {Form} from "COMPONENTS/ui/form/Form";
import {addressProps, ContactMap} from "COMPONENTS/ui/ContactMap/ContactMap";

export type Props = {
  title?: string;
  address?: addressProps;
  form?: contactFormProps
}

export type contactFormProps = {
  action: string;
  title: string;
  formFields: T_PropsCommon[];
  agreement: PrimitivesProps;
  submitBtn: string;
}

//TODO: сделать ответ на форму
export const MainContacts = ({title, address, form}: Props) => {
  const lang = useSelector(state => state.cheesyState.lang)
  const langRef = useRef('ru')

  useEffect(() => {
    langRef.current = lang;
  }, [lang])


  return <section className={styles.contacts} id="contacts">
    {title && <h2 className="visually-hidden">{title}</h2>}
    <div className={styles.wrap}>

      {form &&
          <div className={styles.left}>
              <Form action={form.action} className={`${styles.form}`}>
                  <div className={styles.formTitle} dangerouslySetInnerHTML={{__html: form.title}}/>
                  <div className={styles.formFields}>
                    {
                      form.formFields.map((field, i) => {
                        return <Fragment key={field.name}>
                          {field && <Input {...field} />}
                        </Fragment>
                      })
                    }
                  </div>
                  <div className={styles.formText}>
                      <Primitives {...form.agreement}/>
                  </div>
                  <button className="btn btn--filled" type="submit">
                    {form.submitBtn}
                  </button>
              </Form>
          </div>
      }
      <div className={styles.right}>
        <div className={styles.title}>

          {
            address && <div className={styles.text}>
                  <small dangerouslySetInnerHTML={{__html: address.region}}/>
                  <div className={styles.titleAddress}>
                    <span dangerouslySetInnerHTML={{__html: address.city}}/>
                    <br/>
                    <span dangerouslySetInnerHTML={{__html: address.street}}/>
                  </div>

                <a key={'ru_mail'} href={"mailto:" + translations.ru.menu.contacts.mail}
                   className="regular-link regular-link--underline">
                  {translations.ru.menu.contacts.mail}
                </a>
              </div>
          }

          <div className={styles.phones}>
            {
              translations.ru.menu.contacts.phones.map(phone => {
                return (<p key={phone}> {phone}</p>)
              })
            }
          </div>
        </div>
        {
          address && <div className={styles.map} data-coords={address.coordinate}>
            <ContactMap address={address}/>
          </div>
        }
      </div>
    </div>
  </section>
}
