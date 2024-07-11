import {useEffect} from 'react';

type Props = {
  [K in keyof WindowEventMap]?: (this: Window, ev: WindowEventMap[K]) => any;
};
type EV = WindowEventMap[keyof WindowEventMap]

export default function useGlobalDOMEvents(props: Props) {
  useEffect(() => {
    // for (let key in props) {
    //   if (!props.hasOwnProperty(key)) continue;
    //   const k = key as keyof WindowEventMap
    //   const func = props[k] as (this: Window, ev: EV) => any;
    //   window.addEventListener(k, func, false);
    // }
    for (let [key, func] of Object.entries(props)) {
      // @ts-ignore
      window.addEventListener(key, func, false);
    }
    return () => {
      for (let [key, func] of Object.entries(props)) {
        // @ts-ignore
        window.removeEventListener(key, func, false);
      }
    };
  }, []);
}