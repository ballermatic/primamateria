// Implementation based on this blog post:
// https://omkarkulkarni.vercel.app/blog/reusable-form-component-in-react-using-react-hook-form-and-zod

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

export function FormFieldError({ name }: { name?: string }) {
  // the useFormContext hook returns the current state of hook form.
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name] as FieldError;

  if (!error) return null;

  return <span>{error.message}</span>;
}

// ================================================================
// Inputs
// ================================================================

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, ...props },
  ref,
) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <input
        ref={ref}
        {...props}
        aria-required={errors.name ? 'true' : 'false'} //
      />
      <FormFieldError name={props.name} />
    </div>
  );
});

// ================================================================
// Textarea
// ================================================================

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, ...props },
  ref,
) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <textarea
        ref={ref}
        {...props}
        aria-required={errors[props.name as string] ? 'true' : 'false'}
      />
      <FormFieldError name={props.name} />
    </div>
  );
});
