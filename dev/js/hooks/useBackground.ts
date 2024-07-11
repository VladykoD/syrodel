import {useEffect} from 'react';

export default function useBackground(backgroundColor = '') {
  useEffect(()  => {
    document.documentElement.style.backgroundColor = backgroundColor;

    return () => {
      document.documentElement.style.backgroundColor = '';
    };
  });
}