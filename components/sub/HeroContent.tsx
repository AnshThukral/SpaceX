'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-20'
    >
        <div className='h-full w-full flex flex-col justify-center gap-5 m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[10px] px-[10px] border border-[#7042f88b] opacity-[0.9]'
            >
             <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
             <h1 className='Welcome-text text-[13px] '>Portfolio</h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                Providing
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                project experience
                </span>

            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
            >
                Crafting innovative web and mobile solutions with precision.
                Turning ideas into seamless digital experiences.

            </motion.p>
            <motion.a
                variants={slideInFromLeft(1)}
                href="https://drive.google.com/file/d/1F2Kb8JjkoU78pdR-wiUcF3LRoPlq35qv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
            >
            Decode Expertise!
            </motion.a>


        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
            <Image
            src='/mainIconsdark.svg'
            alt='work icons'
            height={650}
            width={650}
            />
        </motion.div>
        
    </motion.div>
  )
}

export default HeroContent