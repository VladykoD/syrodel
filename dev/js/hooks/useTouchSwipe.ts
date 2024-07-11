import {useEffect, useRef} from 'react';

type SwipeCallback = (e: {direction: 'up' | 'down'}) => void;

class Swipe {
  private readonly _el: HTMLElement;
  private readonly _doc: HTMLElement;
  private _callback: SwipeCallback;
  private _lastTouch?: Touch;
  private readonly onStart: (e: TouchEvent) => void;
  private readonly onMove: (e: TouchEvent) => void;
  private readonly onEnd: (e: TouchEvent) => void;

  constructor(callback: SwipeCallback = () => {}, el = document.documentElement) {
    this._el = el;
    this._doc = document.documentElement;
    this._callback = callback;

    this.onStart = (e: TouchEvent) => this._onStart(e);
    this.onMove = (e: TouchEvent) => this._onMove(e);
    this.onEnd = (e: TouchEvent) => this._onEnd(e);

    this.enable();
  }
  enable() {
    this._el.style.touchAction = 'none';
    this._el.addEventListener('touchstart', this.onStart, { passive: false });
    this._doc.addEventListener('touchmove', this.onMove, { passive: false });
    this._doc.addEventListener('touchend', this.onEnd, { passive: false });
  }
  disable() {
    this._el.style.touchAction = '';
    this._el.removeEventListener('touchstart', this.onStart);
    this._doc.removeEventListener('touchmove', this.onMove);
    this._doc.removeEventListener('touchend', this.onEnd);
  }
  private static _prevent(e: TouchEvent) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  private _onStart(e: TouchEvent) {
    // Swipe._prevent(e);
    this._lastTouch = e.touches[0];
  }
  private _onMove(e: TouchEvent) {
    if (!this._lastTouch) return;
    Swipe._prevent(e);

    const newTouch = e.touches[0];
    const diff = newTouch.clientY - this._lastTouch.clientY;

    if (Math.abs(diff) >= 2) {
      if (diff < 0) {
        this._callback({direction: 'up'});
      } else {
        this._callback({direction: 'down'});
      }

      this._lastTouch = undefined;
    }
  }
  private _onEnd(e: TouchEvent) {
    if (!this._lastTouch) return;
    // Swipe._prevent(e);
    this._lastTouch = undefined;
  }

  public set callback(callback: SwipeCallback) {
    this._callback = callback;
  }
}


export function useTouchSwipe(callback: (direction: 'up' | 'down') => void, container: HTMLElement | null, disabled?: boolean) {
  const swipeRef = useRef<Swipe>();

  useEffect(() => {
    if (!container || swipeRef.current) return;
    const swipe = new Swipe(({direction}) => callback(direction), container);
    swipeRef.current = swipe;

    return () => {
      swipe.disable();
    };
  }, [container]);

  useEffect(() => {
    if (swipeRef.current) swipeRef.current.callback = ({direction}) => callback(direction);
  }, [callback]);

  useEffect(() => {
    const {current: swipe} = swipeRef;
    if (!swipe) return;

    if (disabled) {
      swipe.disable();
    } else {
      swipe.enable();
    }
  }, [disabled]);
}