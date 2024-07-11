import {useEffect, useRef} from 'react';
import Indicator from 'wheel-indicator';


export function useMouseWheelIndicator(callback: (direction: 'up' | 'down') => void, container: HTMLElement | null, disabled?: boolean) {
  const indicatorRef = useRef<Indicator>();

  useEffect(() => {
    if (!container || indicatorRef.current) return;
    indicatorRef.current = new Indicator({
      elem: container,
      callback: ({direction}) => callback(direction)
    });

    return () => {
      indicatorRef.current?.destroy();
    };
  }, [container]);

  useEffect(() => {
    indicatorRef.current?.setOptions({
      callback: ({direction}) => callback(direction)
    });
  }, [callback]);

  useEffect(() => {
    const {current: indicator} = indicatorRef;
    if (!indicator) return;

    if (disabled) {
      indicator.turnOff();
    } else {
      indicator.turnOn();
    }
  }, [disabled]);
}