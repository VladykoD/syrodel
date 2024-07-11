import '../Field.scss';
import './Radio.scss';
import React, {useState} from 'react';
import {FormItemProps, getFormItemClassName} from 'COMPONENTS/ui/form/form-utils';

type T_Props = FormItemProps<string> & {
  label?: string;
  items: {label?: string, value: string}[];
}

export const Radio = ({items, defaultValue = items[0].value, name = `radio-${Math.random()}`, ...props}: T_Props) => {
  const [active, setActive] = useState(props.value || defaultValue);

  const a = props.value !== undefined ? props.value : active;

  const className = getFormItemClassName('field-wrapper radio-wrapper', {
    error: props.error,
    notice: !!props.notice,
    value: !!active
  });

  return <fieldset className={className}>
    <span className='field-label'>{props.label}</span>
    <div className='radio-inner'>
      {items.map((item, index) => {
        const itemLabel = item.label && <span className='radio-label'>{item.label}</span>

        const onChange = () => {
          setActive(item.value);

          if (props.onChange) props.onChange(item.value, true, name);
        }

        return <label key={`radio-item-${index}`} className='radio-item'>
          <input type='radio' disabled={props.disabled} checked={a === item.value} name={name} value={item.value} onChange={onChange}/>
          <span className='radio-image'/>
          {itemLabel}
        </label>
      })}
    </div>
  </fieldset>
}