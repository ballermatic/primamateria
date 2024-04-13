import { ComponentProps, forwardRef } from 'react';

import { FormFieldError } from './form';

interface InputProps {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, type = 'text', ...props },
  ref,
) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        ref={ref}
        {...props}
      />
      <FormFieldError name={props.name} />
    </div>
  );
});
