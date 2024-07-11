import {useEffect, useRef} from 'react';


// Хук для использования requestAnimationFrame
export const useAnimationFrame = (callback: () => any) => {
  const requestRef = useRef<number>();

  const animate = () => {
    callback()
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);
}