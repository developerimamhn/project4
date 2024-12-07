import React from 'react';
import Image from 'next/image';
import image9 from '../image/image9.png';
import image10 from '../image/image10.png';
import image11 from '../image/image11.png';
import image12 from '../image/image12.png';

const Footer = () => {
    return (
        <div className='relative' id='disclaimer'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center px-[24px] sm:px-0 flex-col'>
                    <Image className='w-full sm:w-[150px] md:w-[170px] lg:w-[210px] xl:w-[250px] 2xl:w-[276.93px]' src={image9} alt='Loading...'/>
                    <p className='cat-footer-p mt-2 xl:mt-3 mb-[3] lg:mb-[4] xl:mb-6 text-[20px] lg:text-[30px] 2xl:text-[40px]'>Cat Day is a fun celebration of our feline friends, promoting <br/> love, care, and sharing adorable cat moments!</p>
                    <div className='flex justify-center items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-6'>
                        <a href='#' className='socal p-[12px] sm:p-[14px] md:p-[16px] lg:p-[18px] xl:p-[21px] 2xl:p-[23px] rounded-[12.36px]'>
                            <Image src={image10} alt=''/>
                        </a>
                        <a href='#' className='socal p-[12px] sm:p-[14px] md:p-[16px] lg:p-[18px] xl:p-[21px] 2xl:p-[23px] rounded-[12.36px]'>
                            <Image src={image11} alt=''/>
                        </a>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-[50px] md:mt-[70px] xl:mt-[121px] pb-[30px] md:pb-[45px] xl:pb-[60px]'>
                    <p className='powerby text-[12px]  md:text-[16px] xl:text-[20px]'>©Suiyan Cat Token CopyRight 2024</p>
                    <p className='powerby text-[12px]  md:text-[16px] xl:text-[20px]'>All Rights Reserved </p>
                </div>
            </div>

            <Image className='absolute bottom-0 left-0 w-full z-[-1]' src={image12} alt=''/>
        </div>
    );
};

export default Footer;