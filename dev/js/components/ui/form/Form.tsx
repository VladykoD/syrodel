import React, {useEffect, useState} from 'react';

import {http} from './http';
import {useDispatch, useSelector} from 'STORE/store';
import {useNotice} from 'COMPONENTS/ui/notice/useNotice';
import {FormProvider} from './context/FormContext';
import {
  getFormData, isError, checkErrors,
  FormResponse, FormProps, FormState, FormInputValue, FormStateItem
} from './form-utils';




export const Form = ({children, className, action = '', ...props}: FormProps) => {
  const dispatchNotice = useNotice();
  const dispatch = useDispatch();
  const api = useSelector((state) => state.options.api);

  const [state, setState] = useState<FormState>({});
  const [isSending, setIsSending] = useState(false);
  const [isValid, setIsValid] = useState(false);


  // validate
  useEffect(() => {
    let error = isError(state);
    setIsValid(!error);
  }, [state]);



  const setDefaultStateItem = (name: string, stateItem: FormStateItem) => {
    if (name in state) return;
    setState(state => ({
      ...state,
      [name]: stateItem
    }));
  }
  const onChange = (value: FormInputValue, isComplete: boolean, name: string) => {
    setState(state => {
      const item = state[name];
      return {
        ...state,
        [name]: {
          ...item,
          value,
          error: item && item.required && item.error ? !isComplete : false,
          changed: true
        }
      }
    });
  }
  const onComplete = (isComplete: boolean, name: string) => {
    setState(state => {
      const item = state[name];
      return {
        ...state,
        [name]: {
          ...item,
          error: item?.required && !isComplete
        }
      }
    });
  }


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending || !isValid) return;
    setIsSending(true);

    let sendingState = state;
    if (props.beforeSubmit) sendingState = props.beforeSubmit(state);

    try {
      const response = await fetch(`${api}${action}`, {
        method: 'POST',
        cache: 'no-cache',
        headers: new Headers(),
        body: getFormData(sendingState),
      }).then(response => {
        if (!response.ok) throw response;
        return response.json();
      })

      if (response.status === 'success') {
        console.log('success')
      }

      if (props.onSuccess) props.onSuccess(response);

      //dispatchNotice((Array.isArray(response.response) ? response.response.join(', ') : response.response) || 'Форма отправлена');
    } catch (error) {
      if (props.onError) props.onError(error);

      if (error instanceof Error) {
        dispatchNotice(error.message, true);
      } else if (error instanceof Response) {
        const [message, newState] = await checkErrors(error, state);
        dispatchNotice(message, true);
        if (newState) setState(newState);
      } else {
        throw error;
      }
    }

    setIsSending(false);
  }


  return <form encType="multipart/form-data" autoComplete="off" onSubmit={onSubmit} className={className}>
    <FormProvider value={{
      setDefaultStateItem,
      onChange,
      onComplete,
      state,
      isSending,
      isValid,
      isForm: true
    }}>
      {children}
    </FormProvider>
  </form>
}
