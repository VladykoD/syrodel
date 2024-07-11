import './Tabs.scss';

import React, {useState} from 'react';

type Props = {
  items: string[];
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  onChange?: (item: number) => void;
}

export const Tabs = ({items, onChange, defaultValue = 0, ...props}: Props) => {
  const [active, setActive] = useState(props.value || defaultValue);

  const a = props.value !== undefined ? props.value : active;

  return <div className='tabs-container border-bottom'>
    {items.map((item, index) => (
      <button type='button'
              disabled={props.disabled}
              key={item + index}
              className={`button${a === index ? ' active' : ''}`}
              onClick={(e) => {
                if (index === a) return;
                setActive(index);
                onChange && onChange(index);
              }}>
        {item}
      </button>))
    }
  </div>
}