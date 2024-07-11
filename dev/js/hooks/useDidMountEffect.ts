import {DependencyList, useEffect, useRef} from 'react';

export default function useDidMountEffect (func: () => any, deps: DependencyList) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
}