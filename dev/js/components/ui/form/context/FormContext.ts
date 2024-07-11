import {createContext, useContext} from 'react';
import {FormItemProps, FormState, FormStateItem} from '../form-utils';

export const FormContext = createContext<Pick<FormItemProps, 'onChange' | 'onComplete'> & {
  state: FormState;
  isSending: boolean;
  isValid: boolean;
  isForm: boolean;
  setDefaultStateItem?: (name: string, stateItem: FormStateItem) => void;
}>({
  state: {},
  isSending: false,
  isValid: true,
  isForm: false
});
FormContext.displayName = 'FormContext';

export const {Provider: FormProvider, Consumer: FormConsumer} = FormContext;

export const useFormContext = () => {
  return useContext(FormContext);
}