import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx"

import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                    {/* Community Section */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>Community</div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href="https://www.youtube.com/@anshthukral25" target="_blank" rel="noopener noreferrer"
                                className='flex flex-row items-center text-red-500'>
                                <FaYoutube />
                                <span className='text-[15px] ml-[6px]'>YouTube</span>
                            </a>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href="https://github.com/AnshThukral" target="_blank" rel="noopener noreferrer"
                                className='flex flex-row items-center text-gray-300'>
                                <RxGithubLogo />
                                <span className='text-[15px] ml-[6px]'>GitHub</span>
                            </a>
                        </p>

                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer"
                                className='flex flex-row items-center text-indigo-400'>
                                <RxDiscordLogo />
                                <span className='text-[15px] ml-[6px]'>Discord</span>
                            </a>
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>Social Media</div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer text-pink-500'>
                            <RxInstagramLogo />
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer text-blue-400'>
                            <RxTwitterLogo />
                            <span className='text-[15px] ml-[6px]'>Twitter</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href="https://www.linkedin.com/in/ansh-thukral-at25/" target="_blank" rel="noopener noreferrer"
                                className='flex flex-row items-center text-blue-600'>
                                <RxLinkedinLogo />
                                <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                            </a>
                        </p>
                    </div>

                    {/* About Section */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>About</div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[6px]'>Become Sponsor</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <a href="https://drive.google.com/file/d/1F2Kb8JjkoU78pdR-wiUcF3LRoPlq35qv/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                className='text-[15px] hover:no-underline text-green-500'>
                                Expertise
                            </a>
                        </p>
                        <p>
                            <a href="https://mail.google.com/mail/?view=cm&to=anshthukral2504@gmail.com" target="_blank"
                                className="flex flex-row items-center my-[15px] cursor-pointer hover:no-underline text-yellow-400">
                                anshthukral2504@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className='mb-[20px] text-[15px] text-center'>
                    &copy; 2025 Ansh Thukral. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
