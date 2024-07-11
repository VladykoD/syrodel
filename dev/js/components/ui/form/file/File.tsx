import './File.scss';

import React, {useEffect, useState} from 'react';
import {FormItemProps, FormStateItem, getFormItemClassName} from 'COMPONENTS/ui/form/form-utils';
import {useFormContext} from 'COMPONENTS/ui/form/context/FormContext';


export type T_Props = FormItemProps<null | FileList> & {
  label?: string;
  lang?: string;
  maxSize?: number;
  maxLength?: number;
  list?: string[];
}


const maxSize = 50 * 1024 * 1024;
const fileTypeList = ['pdf', 'doc', 'docx', 'pages', 'txt'];

// TODO: ипортозамещение
const errors = {
  size: `Максимальный размер ${maxSize} байт`,
  type: `Выберите один из допустимых форматов: ${fileTypeList.join(', ')}`,
  length: 'Максимальное количество файлов - 5',
  empty: 'Выберите файл'
}

const acceptFiles = fileTypeList.map(t => '.' + t).join(', ');



export const InputFile = ({disabled, onChange, onComplete, error, notice, name, label, required, ...props}: T_Props) => {
  const [localError, setLocalError] = useState(false);
  const [localNotice, setLocalNotice] = useState<string | null>(null);
  const [stateValue, setStateValue] = useState<FileList | null>(null);

  const context = useFormContext();

  const setDefaultStateItem = context.setDefaultStateItem;
  let contextItemState: FormStateItem | undefined;
  if (context.isForm) {
    onChange = context.onChange;
    onComplete = context.onComplete;
    disabled = disabled || context.isSending;

    contextItemState = context.state[name];
    if (contextItemState) {
      error = localError || error || contextItemState.error;
      notice = localNotice || notice || (contextItemState.error && (contextItemState.notice || errors.empty));
    }
  }

  useEffect(() => {
    setDefaultStateItem && setDefaultStateItem(name, {
      value: null,
      required,
      error
    });
  }, []);

  const onElemChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    let isAccepted = true;
    let errorNotices: string[] = [];
    let value: FileList | null;

    if (target.files && target.files[0]) {
      if (target.files.length > 5) {
        isAccepted = false;
        errorNotices.push(errors.length);
      } else {
        Array.from(target.files).forEach((file) => {
          const fileType = file.name.split('.').pop() || '';

          if (!fileTypeList.includes(fileType)) {
            isAccepted = false;
            errorNotices.push(`"${file.name}" - ${errors.type}`)
          } else if (file.size > maxSize) {
            isAccepted = false;
            errorNotices.push(`"${file.name}" - ${errors.size}`)
          }
        });
      }

      if (isAccepted) {
        setStateValue(target.files);
        value = target.files;
      } else {
        setStateValue(null);
        value = null;
      }
    } else {
      setStateValue(null);
      value = null;
    }

    onChange && onChange(value, Boolean(value), name);
    onComplete && onComplete(Boolean(value), name);
    setLocalError(!isAccepted);
    setLocalNotice(errorNotices.join(', ') || '');
  }

  const onClear = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    setStateValue(null);
    setLocalError(false);
    setLocalNotice('');
    onChange && onChange(null, false, name);
    onComplete && onComplete(false, name);
  }

  const className = getFormItemClassName('input-wrapper file-wrapper', {
    error,
    notice: Boolean(notice),
    value: Boolean(stateValue)
  });


  return <label className={className}>
    <span className="button1 file">{label}</span>
    <input type='file' multiple accept={acceptFiles} name={name} disabled={disabled} onChange={onElemChange}/>
    <span className='file-right button1'>
      <span className="file-names">{stateValue && Array.from(stateValue).map((file) => file.name).join(', ')}</span>
      <span className='file-clear' onClick={onClear}>CLEAR</span>
    </span>
    <span className='input-notice'>{notice}</span>
  </label>
}
