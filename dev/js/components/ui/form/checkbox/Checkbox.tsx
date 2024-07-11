import './Checkbox.scss';

import React, {useEffect, useState} from 'react';
import {FormItemProps, getFormItemClassName, errors} from 'COMPONENTS/ui/form/form-utils';
import {useFormContext} from 'COMPONENTS/ui/form/context/FormContext';
import useDidMountEffect from 'HOOKS/useDidMountEffect';
import {useSelector} from 'STORE/store';

type T_Props = React.PropsWithChildren<FormItemProps<boolean>>



export const Checkbox = ({defaultValue, name, required, value,
                           error, notice, disabled,
                           onChange, onComplete,
                           ...props}: T_Props) => {

  const [isChecked, setChecked] = useState<boolean>(defaultValue !== undefined ? defaultValue : Boolean(value));

  const context = useFormContext();

  const setDefaultStateItem = context.setDefaultStateItem;
  if (context.isForm) {
    onChange = context.onChange;
    onComplete = context.onComplete;
    disabled = disabled || context.isSending;

    const contextItemState = context.state[name];
    if (contextItemState) {
      error = error || contextItemState.error;
      notice = notice || (contextItemState.error && (contextItemState.notice || errors['ru'].required));
    }
  }

  useEffect(() => {
    if (setDefaultStateItem) {
      setDefaultStateItem(name, {
        value: isChecked,
        error,
        required
      })
    }
  }, []);

  useDidMountEffect(() => {
    if (value === undefined) return;

    setChecked(value);
    if (context.isForm && context.onChange) {
      context.onChange(isChecked, Boolean(isChecked), name);
    }
  }, [value]);


  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = !isChecked;
    setChecked(newChecked);
    onComplete && onComplete(newChecked, name);
    onChange && onChange(newChecked, newChecked, name);
  }

  const className = getFormItemClassName('checkbox-wrapper', {error, notice: Boolean(notice)})

  return <label className={className}>
    <input type='checkbox'
           disabled={disabled}
           checked={isChecked}
           onChange={onInputChange}/>
    <span className='checkbox-image'/>
    {props.children && <span className='checkbox-label'>{props.children}</span>}
  </label>
}
