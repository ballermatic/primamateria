import { forwardRef, InputHTMLAttributes } from 'react';

import { FormFieldError } from './form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, ...props },
  ref,
) {
  return (
    <div>
      <label>{label}</label>
      <input
        ref={ref}
        {...props}
      />
      <FormFieldError name={props.name} />
    </div>
  );
});
