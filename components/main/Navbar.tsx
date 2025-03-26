'use client'
import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react'

const Navbar = () => {
    const handleClick = (url:string) => {
        window.open(url,'_blank');
    }
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
            <Image 
                src='/ansh.jpg'
                alt='logo'
                width={48} 
                height={48} 
                className='object-cover cursor-pointer hover:animate-slowspin'
            />
            </div>

                
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    Ansh Thukral
                </span>
            </a>

            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer'>About Me</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                    <a href="#projects" className='cursor-pointer'>Projects</a>

                </div>


            </div>
            <div className='flex flex-row gap-5'>
                {Socials.map((social) =>(
                    <div className='hover:cursor-pointer hover:scale-110 transition-all' onClick={() =>handleClick(social.url)} key={social.name}>

                    <Image 
                    src={social.src}
                    alt={social.name}
                    // key={social.name}
                    width={24}
                    height={24}
                    />
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Navbar;