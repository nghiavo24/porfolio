import React from 'react'
import skills from '../data/skills'

const Skills = () => {
  return (
    <div name='skill' className='bg-[#DDD4D0] dark:bg-[#211A1D] dark:text-white w-full h-fit xl:pt-20 xl:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-fit'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4 border-[#F08080] dark:border-pink-600'>Skills</h1>
                <p className='py-4 text-2xl'>These are the technologies I have worked with:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>
               
               {skills.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-lg hover:scale-125 duration-200 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='{title}' className='w-20 mx-auto' />
                    <h1 className='mt-4 hover:text-[#F08080] dark:hover:text-pink-700'>{title}</h1>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills