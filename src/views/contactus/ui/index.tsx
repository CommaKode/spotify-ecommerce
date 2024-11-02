import { ContactForm } from '@/src/features/contactForm/ui'
import React from 'react'

export const ContactUs = () => {
    return (
        <main className='main-layout'>
            <div className='w-full lg:mt-0 mx-auto  max-w-[24rem] p-4 lg:p-0'>
                <div>
                    <h2 className='text-2xl text-spotify-pale'>تماس با ما</h2>
                    <p className=' mt-4  text-gray-300'>لطفا برای ارتباط با ما فرم زیر را پر کنید..</p>
                </div>
               <ContactForm/>
            </div>
        </main>
    )
}

