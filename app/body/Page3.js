import Image from 'next/image';
import React from 'react';
import image8 from '../image/image8.png';
import imagetwo from '../image/image1.png';
const Page3 = () => {
    return (
        <div>
            <div className='container mx-auto pb-[60px] sm:pb-[80px] md:pb-[110px] lg:pb-[150px] xl:pb-[170px] 2xl:pb-[200px]'>
                <h1 className='catday-one  text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] !leading-[40px] pb-[40px] md:mb-[70px] xl:mb-[114px]'>how to buy</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2  sm:px-0 px-[24px] gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[42px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2  px-[24px] sm:px-[0]'>
                        <div className='relative w-full group'>
                            <Image className='w-full' src={image8} alt='Lading...'/>
                            <div className='absolute top-[50%] translate-y-[-50%] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[24px] 2xl:px-[26px] left-[50%] translate-x-[-50%] rotate-2'>
                                <h3 className='total-support pb-[15px] sm:pb-[16px] md:pb-[18px] lg:pb-[20px] xl:pb-[22px] 2xl:pb-[25px] border-b-[1px] border-dotted border-[#fff] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px]'>Total Supply:</h3>
                                <h2 className='numbercat pt-[16px] lg:pt-[22px] xl:pt-[27px] 2xl:pt-[33px]'>1,000,000, <br/> 000 $CAT</h2>
                                
                            </div>
                            <div className='absolute bottom-[73px] right-[30px] z-10 duration-300 group-hover:block hidden'>
                            <div className='relative right-0 '>
                                <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] z-[-1]' src={imagetwo} alt='Loading...'/>
                                <button className='px-[15px] sm:px-[20px] md:px-[25px] lg:px-[30px] xl:px-[34px] 2xl:px-[39px]  text-[#000] buy-cat  2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]'>COPY</button>
                            </div>
                            </div>
                        </div>
                        <div className='relative mt-11 duration-500 group-hover:rotate-0 sm:rotate-[-8.51deg] w-full group'>
                            <Image className='w-full' src={image8} alt='Lading...'/>
                            <div className='absolute top-[50%] translate-y-[-50%] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[24px] 2xl:px-[26px] left-[50%] translate-x-[-50%] rotate-2'>
                                <h3 className='total-support pb-[15px] sm:pb-[16px] md:pb-[18px] lg:pb-[20px] xl:pb-[22px] 2xl:pb-[25px] border-b-[1px] border-dotted border-[#fff] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px]'>Max Supply:</h3>
                                <h2 className='numbercat pt-[16px] lg:pt-[22px] xl:pt-[27px] 2xl:pt-[33px]'>1,000,000, <br/> 000 $CAT</h2>
                            </div>
                            <div className='absolute bottom-[30px] right-[30px] z-10 duration-300 group-hover:block hidden'>
                            <div className='relative right-0'>
                                <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] z-[-1]' src={imagetwo} alt='Loading...'/>
                                <button className='px-[15px] sm:px-[20px] md:px-[25px] lg:px-[30px] xl:px-[34px] 2xl:px-[39px]  text-[#000] buy-cat  2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]'>COPY</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 '>
                        <div className='relative w-full group'>
                            <Image className='w-full' src={image8} alt='Lading...'/>
                            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rotate-2 w-full'>
                                <h3 className='total-support pb-[15px] sm:pb-[16px] md:pb-[18px] lg:pb-[20px] xl:pb-[22px] 2xl:pb-[25px] border-b-[1px] border-dotted border-[#fff] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px]'>Circulating Supply:</h3>
                                <h2 className='numbercat w-full pt-[16px] lg:pt-[22px] xl:pt-[27px] 2xl:pt-[33px]'>750,000, <br/> 000 $CAT</h2>
                            </div>
                            <div className='absolute bottom-[73px] right-[30px] z-10 duration-300 group-hover:block hidden'>
                            <div className='relative right-0'>
                                <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] z-[-1]' src={imagetwo} alt='Loading...'/>
                                <button className='px-[15px] sm:px-[20px] md:px-[25px] lg:px-[30px] xl:px-[34px] 2xl:px-[39px]  text-[#000] buy-cat  2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]'>COPY</button>
                            </div>
                            </div>
                        </div>
                        <div className='relative mt-11 duration-500 group-hover:rotate-0 sm:rotate-[-8.51deg] w-full group'>
                            <Image className='w-full' src={image8} alt='Lading...'/>
                            <div className='absolute top-[50%] translate-y-[-50%] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[24px] 2xl:px-[26px] left-[50%] translate-x-[-50%] rotate-2'>
                                <h3 className='total-support pb-[15px] sm:pb-[16px] md:pb-[18px] lg:pb-[20px] xl:pb-[22px] 2xl:pb-[25px] border-b-[1px] border-dotted border-[#fff] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px]'>TOKEN ADDRESS:</h3>
                                <h2 className='numbercat pt-[16px] lg:pt-[22px] xl:pt-[27px] 2xl:pt-[33px]'>56sDqbD***<br/> ***Px1pump</h2>
                            </div>
                            <div className='absolute bottom-[30px] right-[30px] z-10 duration-300 group-hover:block hidden'>
                            <div className='relative right-0'>
                                <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] z-[-1]' src={imagetwo} alt='Loading...'/>
                                <button className='px-[15px] sm:px-[20px] md:px-[25px] lg:px-[30px] xl:px-[34px] 2xl:px-[39px]  text-[#000] buy-cat  2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]'>COPY</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;