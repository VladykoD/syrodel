import React, {useEffect, useRef, useState} from 'react';
import {useFormContext} from 'COMPONENTS/ui/form/context/FormContext';
import {useSelector} from "STORE/store";

export type Props = JSX.IntrinsicElements['button'];

export const Button = ({disabled, ...props}: Props) => {
  const context = useFormContext();

  if (context.isForm) {
    disabled = disabled !== undefined ? disabled : !context.isValid || context.isSending;
  }

  return <button disabled={disabled} {...props} />
}
