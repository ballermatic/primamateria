'use client';

import { z } from 'zod';

import Button from '../button';
import { Checkbox, Form, Input, Textarea, useForm } from './forms';

// Declare validation and shape of form
// Phone Regex
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);
// Zod schema
const demoFormSchema = z.object({
  firstName: z.string().min(1, 'First name must be at least 1 character'),
  lastName: z.string().min(1, 'Last name must be at least 1 character'),
  email: z.string().email('Please enter a valid email address.'),
  checkbox: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms & conditions' }),
  }),
  phone: z.string().regex(phoneRegex, 'Invalid Number!').optional().or(z.literal('')),
  textarea: z.string().optional(),
});

export function DemoForm() {
  const form = useForm({
    schema: demoFormSchema,
  });

  return (
    <Form
      className='max-w-md'
      form={form}
      onSubmit={(values) => alert('form submitted with ' + JSON.stringify(values))}>
      <Input
        inputName='firstname'
        label='First name'
        type='text'
        placeholder='Jane'
        {...form.register('firstName')}
      />
      <Input
        inputName='lastname'
        label='Last name'
        type='text'
        placeholder='Smith'
        {...form.register('lastName')}
      />
      <Input
        inputName='email'
        label='Email'
        type='email'
        placeholder='you@example.com'
        {...form.register('email')}
      />
      <Input
        inputName='phone'
        label='Phone number'
        type='tel'
        placeholder='123-456-7890'
        {...form.register('phone')}
      />
      <Checkbox
        inputName='checkbox'
        label='Required checkbox'
        defaultChecked
        {...form.register('checkbox')}>
        <p>Optional description goes here, if desired.</p>
      </Checkbox>
      <Textarea
        inputName='message'
        label='Message'
        rows={3}
        {...form.register('textarea')}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  );
}
