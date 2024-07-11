import './Pagination.scss';

import React, {useEffect, useRef, useState} from 'react';
import useGlobalDOMEvents from 'HOOKS/useGlobalDOMEvents';

type T_Props = {
  value?: number;
  length?: number;
  onChange: (value: number) => void;
}

export const Pagination = (props: T_Props) => {
  if (!props.length || props.length && props.length < 2) return null;

  const [value, setValue] = useState(props.value || 0);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const resize = () => {
    const container = ref.current;
    if (container) {
      // TODO: Доделать на ресайз
      //console.log(container.clientWidth);
      setWidth(width);
    }
  }

  useEffect(() => {
    if (props.value !== undefined && props.value !== value) {
      setValue(props.value);
    }
  }, [props.value]);

  useEffect(resize, []);

  useGlobalDOMEvents({resize});

  const onChange = (v: number) => {
    v = Math.max(0, v);
    v = Math.min(props.length! - 1, v);

    if (value === v) return;

    setValue(v);
    props.onChange(v);
  }

  const buttons = [];

  for (let i = 0; i < props.length; i++) {
    let className = 'pagination-button';
    if (i === value) className += ' active';

    buttons.push(<button type='button'
                         key={'pb-' + i}
                         className={className}
                         onClick={() => onChange(i)}
    >{i + 1}</button>);
  }


  return <div className='pagination' ref={ref}>
    <button type='button' className='pagination-prev' onClick={() => onChange(value - 1)}/>
    {buttons}
    <button type='button' className='pagination-next' onClick={() => onChange(value + 1)}/>
  </div>
}
