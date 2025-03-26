'use client'

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        Selected Projects

      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard 
        src='/food.jpg'
        title='FoodieWE'
        description='Multivendor Food Website lets you explore and order food from multiple restaurants and vendors in one place. Enjoy a variety of cuisines, read reviews, and track your order—all with easy navigation and secure payments for a seamless food delivery experience.'
        url='https://anshthukral.github.io/FOOD-DELIVERY-WEBSITE/'
        />
        <ProjectCard 
        src='/comingsoon.png'
        title='Hire Smart – Talent Match'
        description='Revolutionized hiring by integrating proctored assessments, ensuring only pre-qualified candidates submit resumes, and reducing recruiter screening time by 60%. Engineered a sleek, intuitive interface for seamless applicant-recruiter interactions.'
        url='https://github.com/AnshThukral/Hire-Smart---Pre-Tested-Talent-Match' 
        />
        <ProjectCard 
        src='/SpaceWebsite.png'
        title='SpaceX'
        description='Space-Themed Portfolio showcases your work in a unique, cosmic design. Navigate through projects like youre exploring the stars, with sleek animations and an out-of-this-world layout that highlights your skills and creativity in an engaging and visually captivating way.'
        url='https://space-7gfaxdzv0-ansh-thukrals-projects.vercel.app/'
        />
      </div>

    </div>
  )
}

export default Projects
