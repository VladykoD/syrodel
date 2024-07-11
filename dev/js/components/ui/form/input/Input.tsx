import '../Field.scss';
import './Input.scss';
import React, {useEffect, useState} from 'react';
import useDidMountEffect from 'HOOKS/useDidMountEffect';
import {FormItemProps, getFormItemClassName, errors} from '../form-utils';
import {useFormContext} from '../context/FormContext';
import {useSelector} from 'STORE/store';

export type T_InputType = 'text' | 'email' | 'phone' | 'number' | 'password' | 'textarea' | 'date';

export type T_PropsCommon = FormItemProps<string> & {
  type?: T_InputType;
  label?: string;
  // placeholder?: string;
  lang?: string;
  mask?: boolean | string | RegExp;
  onFocus?: () => void;
  onBlur?: () => void;
}
type T_PropsNumber = T_PropsCommon & {type: 'number', max?: number, min?: number}
export type T_Props = (T_PropsCommon & {type?: Exclude<T_InputType, 'number'>}) | T_PropsNumber;

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  disabled?: boolean;
  value?: string;
  max?: number;
  min?: number;
  lang?: string;
}


const validate: {[key in T_InputType]: (value: string, props: Partial<T_Props>) => boolean} = {
  text: (value) => !!value.length,
  email: (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value.toLowerCase());
  },
  phone: (value) => {
    return true;
  },
  password: (value) => value.length >= 8,
  textarea: (value) => !!value.length,
  number: (value, props) => {
    const p = props as T_PropsNumber;
    const min = p.min || -Infinity;
    const max = p.max || Infinity;
    const v = parseFloat(value);

    return !isNaN(v) && v <= max && v >= min;
  },
  date: (value) => !!value
}



export const Input = ({type = 'text', value = '', name, required,
                        onChange, onComplete, disabled, error, notice,
                        lang = 'en_US', ...props}: T_Props) => {
  const [isFocused, setFocused] = useState(false);
  const [stateValue, setStateValue] = useState(props.defaultValue || value);
  const context = useFormContext();

  const setDefaultStateItem = context.setDefaultStateItem;
  if (context.isForm) {
    onChange = context.onChange;
    onComplete = context.onComplete;
    disabled = disabled || context.isSending;

    const contextItemState = context.state[name];
    if (contextItemState) {
      error = error || contextItemState.error;

      // TODO: ух как
      if (!notice && contextItemState.error) {
        if (contextItemState.notice) {
          notice = contextItemState.notice;
        } else {
          if (!stateValue) {
            notice = errors['ru'].required;
          } else {
            notice = errors['ru'].incorrect;
          }
        }
      }
    }
  }

  useEffect(() => {
    if (setDefaultStateItem) {
      setDefaultStateItem(name, {
        value: stateValue,
        error,
        required
      })
    }
  }, []);

  useDidMountEffect(() => {
    setStateValue(value);
    if (context.isForm && context.onChange) {
      context.onChange(value, validate[type](value, props), name);
    }
  }, [value]);

  let input;

  const inputProps: InputProps = {
    onChange: (e: React.ChangeEvent) => {
      const target = e.target as (HTMLInputElement | HTMLTextAreaElement);
      const targetValue = target.value;

      setStateValue(targetValue);

      onChange && onChange(targetValue, validate[type](targetValue, props), name);
    },
    onFocus: () => {
      props.onFocus && props.onFocus();
      setFocused(true);
    },
    onBlur: () => {
      props.onBlur && props.onBlur();
      setFocused(false);
      onComplete && onComplete(validate[type](stateValue, props), name);
    },
    name,
    disabled,
    value: stateValue,
    lang
  }

  if (type === 'number') {
    inputProps.max = (props as T_PropsNumber).max;
    inputProps.min = (props as T_PropsNumber).min;
  }

  let className = getFormItemClassName('wrapper', {
    error,
    notice: Boolean(notice),
    focus: isFocused,
    value: !!stateValue
  });

  if (type === 'textarea') {
    // TODO: autoSize
    input = <textarea {...inputProps}/>
  } else {
    input = <input {...inputProps} type={type}/>
  }

  return <label className={className}>
      {input}
      <span className={'placeholder'}>{props.label}</span>
      <span className={'notice'}>{notice}</span>
    </label>

}
