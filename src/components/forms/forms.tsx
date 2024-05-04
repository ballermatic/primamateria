// ================================================================
// Implementation based on this blog post:
// https://omkarkulkarni.vercel.app/blog/reusable-form-component-in-react-using-react-hook-form-and-zod
// ================================================================

/* eslint-disable @typescript-eslint/no-explicit-any */

// function to resolve zod schema we provide
import { zodResolver } from '@hookform/resolvers/zod';
import { forwardRef, InputHTMLAttributes } from 'react';
// We will fully type `<Form />` component by providing component props and fwding // those
import { ComponentProps } from 'react';
import {
  FieldError,
  // typescript type of form's field values
  FieldValues,
  // context provider for our form
  FormProvider,
  // type of submit handler event
  SubmitHandler,
  // we import useForm hook as useHookForm
  useForm as useHookForm,
  // hook that would return errors in current instance of form
  useFormContext,
  // typescript types of useHookForm props
  UseFormProps as UseHookFormProps,
  // return type of useHookForm hook
  UseFormReturn,
} from 'react-hook-form';
// Type of zod schema
import { TypeOf, ZodSchema } from 'zod';

import { cn } from '@/lib/utils';

// We provide additional option that would be our zod schema.
interface UseFormProps<T extends ZodSchema<any>> extends UseHookFormProps<TypeOf<T>> {
  schema: T;
}

export const useForm = <T extends ZodSchema<any>>({ schema, ...formConfig }: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
};

// we omit the native onSubmit event in favor of SubmitHandler event
// the beauty of this is, the values returned by the submit handler are fully typed
interface FormProps<T extends FieldValues = any> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

// Note, may need to add styles to fieldset for complex layouts
export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      {/* the form passed here is return value of useForm() hook */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}>
        <fieldset
          // We disable form inputs when we are submitting the form
          disabled={form.formState.isSubmitting}>
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};

// ================================================================
// Errors
// ================================================================

export function FormFieldError({ name, className }: { name?: string; className?: string }) {
  // the useFormContext hook returns the current state of hook form.
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name] as FieldError;

  if (!error) return null;

  return <span className={className}>{error.message}</span>;
}

// ================================================================
// Inputs
// ================================================================

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  label: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, inputName, required = false, ...props },
  ref,
) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[props.name as string];

  return (
    <div className='relative mb-4 flex flex-col pb-5'>
      <label
        className={cn(
          'relative mb-1 flex items-center justify-between font-medium',
          required &&
            'after:text-xs after:leading-none after:tracking-wide after:text-smoke/50 after:content-["required"]',
        )}
        htmlFor={inputName}>
        {label}
      </label>
      <input
        className='block w-full rounded-md border-0 bg-white py-1.5 shadow-inner ring-1 ring-inset ring-smoke/40 placeholder:text-smoke/40 focus:ring-inset focus:ring-smoke aria-[invalid=true]:ring-red-500'
        ref={ref}
        id={inputName}
        name={inputName}
        aria-invalid={!!error}
        {...props}
      />
      <FormFieldError
        className='absolute bottom-0 text-sm leading-none text-red-500'
        name={props.name}
      />
    </div>
  );
});

// ================================================================
// Checkbox
// ================================================================

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  label: string;
  required?: boolean;
  children?: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Input(
  { label, inputName, required = false, children, ...props },
  ref,
) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[props.name as string];

  return (
    <div className='relative mb-4 flex flex-col pb-5'>
      <div className='relative flex items-start'>
        <div className='flex h-6 items-center'>
          <input
            className='size-4 rounded border-smoke/40 bg-white text-smoke shadow-inner focus:ring-smoke aria-[invalid=true]:ring-red-500'
            ref={ref}
            id={inputName}
            name={inputName}
            type='checkbox'
            aria-invalid={!!error}
            {...props}
          />
        </div>
        <div className='ml-2 flex w-full flex-col'>
          <label
            className={cn(
              'relative flex items-center justify-between font-medium',
              required &&
                'after:text-xs after:leading-none after:tracking-wide after:text-smoke/50 after:content-["required"]',
            )}
            htmlFor={inputName}>
            {label}
          </label>
          {children}
        </div>
      </div>
      <FormFieldError
        className='absolute bottom-0 text-sm leading-none text-red-500'
        name={props.name}
      />
    </div>
  );
});

// ================================================================
// Textarea
// ================================================================

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputName: string;
  label: string;
  required?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, inputName, required = false, ...props },
  ref,
) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[props.name as string];

  return (
    <div className='relative mb-4 flex flex-col pb-5'>
      <label
        className={cn(
          'relative mb-1 flex items-center justify-between font-medium',
          required &&
            'after:text-xs after:leading-none after:tracking-wide after:text-smoke/50 after:content-["required"]',
        )}
        htmlFor={inputName}>
        {label}
      </label>
      <textarea
        className='block w-full rounded-md border-0 bg-white py-1.5 shadow-inner ring-1 ring-inset ring-smoke/40 placeholder:text-smoke/40 focus:ring-inset focus:ring-smoke aria-[invalid=true]:ring-red-500'
        ref={ref}
        id={inputName}
        name={inputName}
        aria-invalid={!!error}
        {...props}
      />
      <FormFieldError
        className='absolute bottom-0 text-sm leading-none text-red-500'
        name={props.name}
      />
    </div>
  );
});
