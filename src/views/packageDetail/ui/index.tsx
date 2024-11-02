
import React from 'react';
import { useRouter } from 'next/router';
import PackageInfo from './PackageInfo';
import { SpotifyOrderForm } from '@/src/features/packageForm/ui';


interface PackageDetailPageProps {
  packageData: PackageData;
}

export const PackageDetail = ({ packageData }: PackageDetailPageProps) => {
  
  return (
    <main className='main-layout'>
      <div className='flex w-full flex-col lg:flex-row '>
        <PackageInfo data={packageData} />
        <div className='basis-1/2 -mt-6 lg:mt-0 mx-auto lg:mr-20 max-w-[24rem] p-4 lg:p-0'>
          <div>
            <h2 className='text-xl text-spotify-dark'>لطفا اطلاعات اکانت اسپاتیفای خود را وارد کنید.</h2>
            <p className='text-sm mt-4 text-gray-300'>
              بعد از این که اطلاعات اکانت اسپاتیفای خودتون رو وارد کردین ما در کمترین زمان ممکن اکانتتون رو براتون را شارژ میکنیم و از طریق ایمیل بهتون اطلاع میدیم.
            </p>
          </div>
          <SpotifyOrderForm />
        </div>
      </div>
    </main>
  );
};
