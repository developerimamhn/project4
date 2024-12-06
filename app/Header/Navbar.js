"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import imageone from '../image/image.png';
import imagetwo from '../image/image1.png';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className=''>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[24px] relative px-[24px] sm:px-[0]'>
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[26px] absolute' />
                    </div>
                </div>
                <h1 className='w-[70px] md:w-[90px] lg:w-[120px] xl:w-[150px] 2xl:w-[177.08px]'><Image src={imageone} alt='Loading...'/></h1>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100  flex justify-center items-center gap-[30px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px] xl:gap-[40px] 2xl:gap-[45px] flex-col sm:flex-row
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar`} href="/">home</Link>
                    <Link className='Link-manu-bar' href="/">About</Link>
                    <Link className='Link-manu-bar' href="/">Tokenomics</Link>
                    <Link className='Link-manu-bar' href="/">disclaimer</Link>
                </nav>
                <div className='relative'>
                    <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] z-[-1]' src={imagetwo} alt='Loading...'/>
                    <button className='px-[20px] sm:px-[25px] md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[45px]  text-[#000] buy-cat  2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]'>BUY $CAT</button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;