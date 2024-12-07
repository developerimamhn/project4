import React from 'react';
import Image from 'next/image';
import imagetwo from '../image/image1.png'
import image5 from '../image/image5.png';
import AutoSlider from '../Header/AutoSlider';

const Page1 = () => {
    return (
        <div className='relative' id='home'>
            <Image className='bottom-10 absolute left-0 w-full z-[-1]'  src={image5} alt='Loacing'/>
            <div className='container mx-auto'>
                <div className=''>
                    <h1 className='catday-one mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[130px] text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] !leading-[40px] pb-[20px] md:mb-[25px] xl:mb-[32px]'>ABOUT</h1>
                    <p className='ptag-group m-auto text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] space-y-[8px] !leading-[30px] sm:leading-auto'>
                        <p>
                        Cat Day is a special occasion dedicated to honoring the playful, independent,<br className='hidden sm:block'/> and lovable nature of cats. 
                        </p>
                        <p>
                        Whether you&apos;re a lifelong cat owner or just an admirer, it&apos;s a time to celebrate their <br className='hidden sm:block'/> unique personalities, pamper them with treats, and share your favorite cat moments <br className='hidden sm:block'/> with others.  
                        </p>
                        <p>
                        From fostering awareness of feline care to embracing their quirks, Cat Day brings <br className='hidden sm:block'/> together cat lovers everywhere!
                        </p>
                    </p>
                    <div className='flex justify-center items-center gap-[14px] lg:gap-[16px] 2xl:gap-[24px] mt-[20px] sm:mt-[30px] lg:mt-[40px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] 2xl:pb-[130px]'>
                    <div className='relative'>
                        <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] z-[-1]' src={imagetwo} alt='Loading...'/>
                        <button className='px-[33px] sm:px-[25px] md:px-[30px] lg:px-[52px] xl:px-[50px] 2xl:px-[50px]  text-[#000] buy-cat  2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]'>BUY $CAT</button>
                    </div>
                    <div className='relative'>
                        <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] z-[-1] w-fit' src={imagetwo} alt='Loading...'/>
                        <button className='px-[20px] sm:px-[25px] md:px-[30px] lg:px-[35px] xl:px-[30px] 2xl:px-[30px]  text-[#000] buy-cat  2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]'>DEXSCREENER</button>
                    </div>
                    </div>
                </div>
            </div>
            <AutoSlider/>
        </div>
    );
};

export default Page1;