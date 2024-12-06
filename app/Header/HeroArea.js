import React from 'react';
import Image from 'next/image';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';
import AutoSlider from './AutoSlider';

const HeroArea = () => {
    return (
        <div className='relative'>
            <div  className=''>
                <h1 className='catday-one mt-[30px] md:mt-[40px] lg:mt-[55px] xl:mt-[70px] 2xl:mt-[89px] text-[100px] sm:text-[140px] md:text-[170px] lg:text-[200px] xl:text-[240px] 2xl:text-[270px]'>CAT DAY</h1>
                <Image className='m-auto text-center mt-[-90px]' src={image2} alt=''/>
            </div>
            <Image className='absolute bottom-0 z-[-1] w-full' src={image3} alt='Loading...'/>
            <div className=''>
                <AutoSlider/>
            </div>
        </div>
    );
};

export default HeroArea;