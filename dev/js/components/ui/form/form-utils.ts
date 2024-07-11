export type FormResponse<C = undefined> = {
  status: 'error' | 'success';
  response?: string | string[];
  errors?: {
    [key: string]: string | string[];
  };
  content: C;
}

export type FormProps = React.PropsWithChildren<{
  action?: string;
  beforeSubmit?: (state: FormState) => FormState;
  onSuccess?: (response: FormResponse) => void;
  onError?: (error: any) => void;
  className?: string;
}>

export type FormInputValue = string | string[] | boolean | FileList | null;

export type FormItemProps<V = FormInputValue> = {
  name: string;
  value?: V;
  defaultValue?: V;
  onChange?: (value: V, isComplete: boolean, name: string) => void;
  onComplete?: (isComplete: boolean, name: string) => void;
  notice?: string | boolean;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
}

export type FormState = {
  [ley: string]: FormStateItem | undefined;
}
export type FormStateItem<K = FormInputValue> = {
  value?: K;
  error?: boolean;
  notice?: string | boolean;
  required?: boolean;
  changed?: boolean;
}

export const errors = {
  ru: {
    required: 'Поле не заполнено',
    incorrect: 'Поле заполнено неверно'
  }
}

export const getFormData = (state: FormState) => {
  const data = new FormData;

  Object.entries(state).forEach(([key, obj]) => {
    if (!obj) return;

    let value = obj.value;
    if (value instanceof FileList) {
      if (value.length === 1) {
        data.append(key, value[0]);
      } else {
        for (let file of value) {
          data.append(key+'[]', file);
        }
      }
      return;
    }

    if (Array.isArray(value)) value = value[0];
    if (value === undefined || value === null) return;
    value = value.toString();

    data.set(key, value);
  });

  return data;
}

export const isError = (state: FormState) => {
  let isError = false;

  (Object.values(state) as FormStateItem[]).forEach((item) => {
    if (item.required && (!item.changed || item.error)) {
      isError = true;
    }
  });

  return isError;
}

export const joinMessage = (message: string | string[]) => Array.isArray(message) ? message.join(' ') : message;

export const checkErrors = async (error: Response, state: FormState): Promise<[string, FormState | undefined]> => {
  if (error.status === 400) {
    const response: FormResponse = await error.json();

    if (response.errors) {
      const messages: string[] = [];

      const newState = {...state};
      for (let key in response.errors) {
        const errorField = response.errors[key];

        if (key in newState) {
          const message = joinMessage(errorField);
          messages.push(message);

          newState[key] = {
            ...newState[key],
            error: true,
            notice: message
          }
        }
      }

      return [messages.join(' / '), newState];
    } else if (response.response) {
      return [joinMessage(response.response), undefined];
    }
  }

  console.error(error);
  return [`${error.status} ${error.statusText}`, undefined];
}


type FormItemClasses = {
  error?: boolean;
  notice?: boolean;
  focus?: boolean;
  value?: boolean;
}
type Keys = keyof FormItemClasses;

const formItemClasses: {[key in Keys]: string} = {
  error: 'error',
  notice: 'notice',
  focus: 'focus',
  value: 'not-empty',
}

export const getFormItemClassName = (initialClass: string, props: FormItemClasses) => {
  const c = Object.entries(props).map(([key, value]) =>
    value && formItemClasses[key as Keys]).filter(Boolean);
  return [initialClass, ...c].join(' ');
}
