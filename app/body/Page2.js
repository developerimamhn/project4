import Image from 'next/image';
import React from 'react';
import image6 from '../image/image6.png';
import image7 from '../image/image7.png';

const Page2 = () => {
    return (
        <div className='relative' id='About'>
            <div className="container mx-auto py-[60px] sm:py-[80px] md:py-[110px] lg:py-[140] xl:pt-[170px] 2xl:pt-[200px]">
                <h1 className='catday-one  text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] !leading-[40px] pb-[40px] md:mb-[70px] xl:mb-[114px]'>how to buy</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12 lg:gap-14 xl:gap-12 2xl:gap-12 sm:px-0 px-[24px]">
                    <div className="sectiononegetime px-[20px] sm:px-[22px] md:px-[24px] lg:px-[26px] xl:px-[28px] 2xl:px-[40.5px] rounded-[18px] lg:rounded-[24px] pt-[34px] md:pt-[44px] xl:pt-[54px] pb-[20px] sm:pb-[22px] md:pb-[24px] lg:pb-[26px] xl:pb-[28px] 2xl:pb-[40.5px]">
                        <div className="relative">
                        <div className="absolute top-[-85px] sm:left-[-70px] w-full">
                            <div className="flex items-center">
                                <p className='get-a-solana relative z-10 text-[18px] md:text-[25px] xl:text-[34px] pl-[19px] py-[7px] sm:py-[10px] md:py-[15px]'>Create a Sui Wallet</p>
                                <Image className='absolute z-[5] top-0 pointer-events-none select-none' src={image6} alt='' />
                            </div>
                        </div>
                        <p className='we-recommend-using pt-[14px] md:pt-[18px] xl:pt-[23px]'>Download Sui Wallet or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app</p>
                        </div>
                    </div>
                    <div className="sectiononegetime px-[20px] sm:px-[22px] md:px-[24px] lg:px-[26px] xl:px-[28px] 2xl:px-[40.5px] rounded-[18px] lg:rounded-[24px] pt-[34px] md:pt-[44px] xl:pt-[54px] pb-[20px] sm:pb-[22px] md:pb-[24px] lg:pb-[26px] xl:pb-[28px] 2xl:pb-[40.5px]">
                        <div className="relative">
                        <div className="absolute top-[-85px] sm:left-[-70px] w-full">
                            <div className="flex items-center">
                                <p className='get-a-solana relative z-10 text-[18px] md:text-[25px] xl:text-[34px] pl-[19px] py-[7px] sm:py-[10px] md:py-[15px]'>Get Some $SUI</p>
                                <Image className='absolute z-[5] top-0 pointer-events-none select-none' src={image6} alt='' />
                            </div>
                        </div>
                        <p className='we-recommend-using pt-[14px] md:pt-[18px] xl:pt-[23px]'>Have SUI in your wallet to switch to $SUILAMA . If you don’t have any SUI , you can buy SUI from an exchange or cross chain swap and send it to your wallet.</p>
                        </div>
                    </div>
                    <div className="sectiononegetime px-[20px] sm:px-[22px] md:px-[24px] lg:px-[26px] xl:px-[28px] 2xl:px-[40.5px] rounded-[18px] lg:rounded-[24px] pt-[34px] md:pt-[44px] xl:pt-[54px] pb-[20px] sm:pb-[22px] md:pb-[24px] lg:pb-[26px] xl:pb-[28px] 2xl:pb-[40.5px]">
                        <div className="relative">
                        <div className="absolute top-[-85px] sm:left-[-70px] w-full">
                            <div className="flex items-center">
                                <p className='get-a-solana relative z-10 text-[18px] md:text-[25px] xl:text-[34px] pl-[19px] py-[7px] sm:py-[10px] md:py-[15px]'>Swap SUI for $cat</p>
                                <Image className='absolute z-[5] top-0 pointer-events-none select-none' src={image6} alt='' />
                            </div>
                        </div>
                        <p className='we-recommend-using pt-[14px] md:pt-[18px] xl:pt-[23px] p-[]'>Switch SUI for $CAT . We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image className='absolute bottom-0 left-0 w-full z-[-1]' src={image7} alt=''/>
        </div>
    );
};

export default Page2;