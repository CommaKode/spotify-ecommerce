'use client'
import React from 'react';
import { Button } from '@/src/shared/ui/Button/button';
import { Input } from '@/src/shared/ui/Input';
import { useForm } from 'react-hook-form';
import { submitForm } from '@/src/shared/api/formService';
import { ContactFormFields } from '../model/types';
import { CONTACT_FORM_URL } from '@/src/shared/constants/apiUrls';

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormFields>({
        defaultValues: {
            email: '',
            name: '',
            message: ''
        }
    });

    async function handleContactSubmit(data: ContactFormFields) {
        console.log('Submitting...', data); // Log the data being submitted
        try {
            await submitForm<ContactFormFields>(data, CONTACT_FORM_URL);
            console.log('Submission successful!'); // Log success
            // Optionally reset the form or provide user feedback
        } catch (error) {
            console.error('Submission error:', error); // Log any errors
        }
    }

    return (
        <form onSubmit={handleSubmit(handleContactSubmit)} className='flex flex-col gap-6 mt-6'>
            <div className='flex flex-col gap-4'>
                <label className='text-spotify-pale'>آدرس ایمیل:</label>
                <Input
                    {...register('email', { 
                        required: 'Email is required', 
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email format'
                        }
                    })}
                    placeholder='example@gmail.com'
                    type='email'
                    className='text-left'
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </div>

            <div className='flex flex-col gap-4'>
                <label className='text-spotify-pale'>نام و نام خانوادگی:</label>
                <Input
                    {...register('name', { required: 'Full name is required' })}
                    placeholder='علی جعفری'
                    type='text'
                />
                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
            </div>

            <div className='flex flex-col gap-4'>
                <label className='text-spotify-pale'>پیام خود را وارد کنید:</label>
                <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className='w-full bg-transparent input-border text-cream rounded-xl py-3 px-4 caret-cream placeholder-cream placeholder:opacity-50 outline-none'
                    placeholder='متن پیام...'
                />
                {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
            </div>

            <Button
                type='submit'
                disabled={isSubmitting}
                className='text-lg mt-4 py-6'
                variant={'primary'}
            >
                ارسال
            </Button>
        </form>
    );
};
