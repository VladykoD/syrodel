import styles from './ProductsContacts.module.scss';
import React, {Fragment, useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {Primitives, PrimitivesProps} from "COMMON/content/primitives/Primitives";
import {Input, T_InputType, T_PropsCommon} from "COMPONENTS/ui/form/input/Input";
import translations from "COMMON/translations";
import {useSelector} from "STORE/store";

import {deliveryProps, MainDelivery} from "COMPONENTS/pages/Main/MainDelivery/MainDelivery";

export type Props = {
  productForm: productFormProps;
  productsDelivery?: deliveryProps;
}

export type productFormProps = {
  title?: string;
  form?: formProps;
}
type formProps = {
  action?: string;
  formFields: T_PropsCommon[];
  agreement: PrimitivesProps;
  submitBtn: string;
}


//TODO: сделать ответ на форму
export const ProductsContacts = ({productForm, productsDelivery}: Props) => {
  const lang = useSelector(state => state.cheesyState.lang)
  const langRef = useRef('ru')

  useEffect(() => {
    langRef.current = lang;
  }, [lang])

  const onChangeForm = () => {

  }
  const onSubmitForm = () => {

  }

  return <>
    <MainDelivery {...productsDelivery} />
    <section className={styles.contacts}>
      <div className="container">
        <div className={`row ${styles.contactsRow}`}>
          <div className={`col ${styles.leftCol}`}>
            <div>
              {productForm.title && <h3 className="title title-h2" dangerouslySetInnerHTML={{__html: productForm.title}}/>}
              <div className={`row ${styles.contactRow}`}>
                <div className={`col`}>
                  <a key={'ru_mail'} href={"mailto:" + translations.ru.menu.contacts.mail}
                     className="regular-link regular-link--underline">
                    {translations.ru.menu.contacts.mail}
                  </a>
                </div>
                <div className={`col ${styles.phones}`}>
                  {
                    translations.ru.menu.contacts.phones.map(phone => {
                      return (<a href={phone} key={phone}> {phone}</a>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className={`col ${styles.rightCol}`}>
            {
              productForm.form && <form
                onChange={onChangeForm}
                onSubmit={onSubmitForm}
                action={productForm.form.action}
                className={styles.form}>
                <div className={styles.formFields}>
                  {
                    productForm.form.formFields.map((field, i) => {
                      return <Fragment key={field.name}>
                        {field && <Input {...field} />}
                      </Fragment>
                    })
                  }
                </div>
                <div className={styles.formText}>
                  <Primitives {...productForm.form.agreement}/>
                </div>
                <button className="btn btn--filled" type="submit">
                  {productForm.form.submitBtn}
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  </>
}
