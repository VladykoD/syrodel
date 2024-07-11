import '../Field.scss';
import './Select.scss';

import React, {useEffect, useState} from 'react';
import {isTouch} from 'a-utils';
import useGlobalDOMEvents from 'HOOKS/useGlobalDOMEvents';
import {errors, FormItemProps, getFormItemClassName} from 'COMPONENTS/ui/form/form-utils';
import { useFormContext } from '../context/FormContext';

const IS_TOUCH = isTouch();


type T_Props = FormItemProps<string[]> & {
  label?: string;
  items: {id: string; name: string;}[];
  multiple?: boolean;
}
type T_PropsItem = {
  children?: string;
  selected?: boolean;
  onClick: () => void;
}


const SelectItem = ({children = '', selected = false, onClick}: T_PropsItem) => {
  return <button type='button'
                 className={`select-item${selected ? ' selected' : ''}`}
                 onClick={onClick}
                 onKeyDown={(e) => e.key.toLowerCase() === 'enter' && onClick()}
  >
    <span className='checkbox-image'/>
    {children}
  </button>
}

export const Select = ({items, value = [], name, required,
                        onChange, onComplete, disabled, error, notice, ...props}: T_Props) => {
  const [selectedValues, setSelectedValues] = useState(props.defaultValue || value);
  const [isNative, setIsNative] = useState(IS_TOUCH);
  const [isOpen, setIsOpen] = useState(false);
  const [customClassName] = useState('select-wrapper-' + Math.round(Math.random() * 1000));
  const context = useFormContext();
  const setDefaultStateItem = context.setDefaultStateItem;

  if (context.isForm) {
    onChange = context.onChange;
    onComplete = context.onComplete;
    disabled = disabled || context.isSending;

    const contextItemState = context.state[name];
    if (contextItemState) {
      error = error || contextItemState.error;

      if (!notice && contextItemState.error) {
        if (contextItemState.notice) {
          notice = contextItemState.notice;
        } else {
          if (!selectedValues) {
            notice = errors['ru'].required;
          }
        }
      }
    }
  }


  /**
   * Рассчитываем ширину экрана для использования
   * нативного или кастомного селекта
   * Так же обработка пустого клика на документ
   */
  useGlobalDOMEvents({
    resize() {
      // if (window.innerWidth < 860) {
      //   setIsNative(true);
      // } else {
      //   setIsNative(false);
      // }
    },
    click(e) {
      const target = e.target as HTMLElement;

      if (!target.closest('.' + customClassName)) {
        setIsOpen(false);
      }
    },
    keydown(e) {
      if (e.code.toLowerCase() === 'escape') {
        setIsOpen(false);
      }
    }
  })

  /**
   * Обновление данных с пропсов
   */
  useEffect(() => {
    if (!value || !value.length) return;

    if (props.multiple) {
      setSelectedValues(value);
    } else {
      setSelectedValues([value[0]]);
    }
  }, [value]);

  useEffect(() => {
    if (setDefaultStateItem) {
      setDefaultStateItem(name, {
        value: selectedValues,
        error,
        required
      })
    }
  }, []);

  const htmlValue = items.map((item) => {
    return selectedValues.includes(item.id) && item.name;
  }).filter(Boolean).join(', ');
  let returned;
  let tabindex;

  if (isNative) {
    tabindex = -1;

    const options = items.map((item, index) => {
      return <option key={'select-item_' + index}
                     value={item.id}>{item.name}</option>
    });
    if (options.length < 2) {
      options.unshift(<option selected disabled>Please select</option>)
    }

    returned = <select multiple={props.multiple}
                       disabled={disabled}
                       value={props.multiple ? selectedValues : selectedValues[0]}
                       className='select-native'
                       onChange={(e) => {
                         const newSelected = Array.from<HTMLOptionElement>(e.target.selectedOptions).map((option) => {
                           return option.value;
                         })
                         setSelectedValues(newSelected);

                         onChange?.(newSelected, !!newSelected.length, name);
                       }}>
      {options}
    </select>
  } else {
    const check = (id: string) => {
      const index = selectedValues.indexOf(id);
      let newSelected: string[];

      if (index > -1) {
        if (props.multiple) {
          selectedValues.splice(selectedValues.indexOf(id), 1);
          newSelected = [...selectedValues];
        } else {
          newSelected = [];
        }
      } else {
        if (props.multiple) {
          newSelected = [...selectedValues, id];
        } else {
          newSelected = [id];
          setIsOpen(false);
        }
      }
      setSelectedValues(newSelected);

      onChange?.(newSelected, !!newSelected.length, name);
    }

    returned = <div className='select-items'>

        {items.map((item, index) => {
          const selected = selectedValues.includes(item.id);
          const sProps = {
            key: 'select-item_' + index,
            selected,
            onClick: () => check(item.id)
          }

          return <SelectItem {...sProps}>{item.name}</SelectItem>
        })}
    </div>
  }

  let className = getFormItemClassName('field-wrapper select-wrapper ' + customClassName, {
    notice: Boolean(notice),
    error,
    value: selectedValues?.length > 0
  });
  if (isOpen) className += ' active';

  return <div className={className}>
    {props.label && <span className='select-placeholder'>{props.label}</span>}
    <button type='button' disabled={disabled} className='select-button' tabIndex={tabindex} onClick={() => {
      setIsOpen(!isOpen)
    }} title={htmlValue}>
      <span className="select-values">{htmlValue}</span>
    </button>


    {returned}
    <span className='select-notice'>{notice}</span>
  </div>
}
