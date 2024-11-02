'use client'
import React from 'react';
import { submitForm } from '@/src/shared/api/formService';
import { useForm } from 'react-hook-form';
import { OrderFormFields } from '../model/types';
import PasswordInput from '@/src/widgets/PasswordInput';
import { Button } from '@/src/shared/ui/Button/button';
import { Combobox } from '@/src/widgets/shadcn/Combobox';
import { Input } from '@/src/shared/ui/Input';
import { comboItems } from '@/src/shared/constants';
import { ORDER_FORM_URL } from '@/src/shared/constants/apiUrls';

const initialValues: OrderFormFields = {
  accountType: false,
  email: '',
  password: '',
};

export const SpotifyOrderForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<OrderFormFields>({
    defaultValues: initialValues,
  });

  const onSubmit = async (data: OrderFormFields) => {
    try {
      await submitForm(data, ORDER_FORM_URL);
      console.log('Order submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 mt-6'>
      <div className='flex flex-col gap-4'>
        <label className='text-spotify-dark'>اکانت اسپاتیفای دارید یا ما براتون بسازیم؟</label>
        <Combobox register={register} items={comboItems} name={'accountType'} />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-spotify-dark'>آدرس ایمیل اسپاتیفای:</label>
        <Input
          className='text-left'
          placeholder='example@gmail.com'
          type='email'
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
      </div>
      <div className='flex flex-col gap-4'>
        <label className='text-spotify-dark'>پسوورد اکانت اسپاتیفای:</label>
        <PasswordInput
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
      </div>
      <Button className='text-lg mt-4 py-6' variant={'primary'} type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'در حال ثبت...' : 'ثبت سفارش'}
      </Button>
    </form>
  );
};


