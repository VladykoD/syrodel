import {useCallback, useRef, useState} from 'react';


// Хук рефа с постобработкой того, что попало в реф
export function useStateRef<T = any>(processNode: (node: T) => any) {
  const [node, setNode] = useState<T>();
  const setRef = useCallback(newNode => {
    setNode(processNode(newNode));
  }, [processNode]);
  return [node, setRef];
}


// Хук рефа с коллбеками добавления/удаления в реф
export function useRefWithCallback<T = any>(onMount: (node: T) => void, onUnmount: (node: T) => void) {
  const nodeRef = useRef<T>();

  return useCallback(node => {
    if (nodeRef.current) {
      onUnmount(nodeRef.current);
    }

    nodeRef.current = node;

    if (nodeRef.current) {
      onMount(nodeRef.current);
    }
  }, [onMount, onUnmount]);
}