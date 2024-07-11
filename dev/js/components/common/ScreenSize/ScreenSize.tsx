import React, {useEffect} from 'react';
import useGlobalDOMEvents from "HOOKS/useGlobalDOMEvents";

export const ScreenSize = () => {
  const resize = () => {
    document.documentElement.style.setProperty('--vh', window.innerHeight + 'px')
  }
  //чтобы выполнилось 1 раз при старте
  useEffect(resize, []);
  //обычная подписка на ресайзы
  useGlobalDOMEvents({
    resize
  });

  return null;
}
