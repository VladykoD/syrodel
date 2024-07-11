import './Popup.scss';

import React, {useEffect} from 'react';
import {Portal} from '../modal/Portal';
import {CloseButton} from '../buttons/CloseButton';
import useGlobalDOMEvents from "HOOKS/useGlobalDOMEvents";

type T_Props = {
  children: React.ReactNode | null;
  active?: boolean;
  onClose?: () => void;
  color?: string
}

export const Popup = (props: T_Props) => {

  useEffect(() => {
    let sections = document.querySelectorAll('.hideInOpenedModal');

    const handleEsc = (event:KeyboardEvent) => {
      if (event.keyCode === 27) {
        props.onClose && props.onClose()
      }
    };
    window.addEventListener('keydown', handleEsc);


    if (props.active) {
      document.documentElement.style.overflow = 'hidden';
      sections.forEach(el => {
        el.classList.add('hide')
      })
    } else {
      document.documentElement.style.overflow = '';
      sections.forEach(el => {
        el.classList.remove('hide')
      })
    }

    return () => {
      sections.forEach(el => {
        el.classList.remove('hide')
      })
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    }
  }, [props.active]);

  const onClose = () => props.onClose && props.onClose();

  let className = 'popup ';
  if (props.active) className += ' active';

  return <Portal bg={props.color} className={className}>
    <div style={{background: props.color || '#ffffff'}} className="container popup-wrapper">
      <CloseButton onClose={onClose}/>
      {props.children}
    </div>
  </Portal>
}
