import React from 'react'
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import css from '../assets/css.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongo.png';
import python from '../assets/python.png'
import git from '../assets/git.png';
import postgres from '../assets/postgresql.svg';

const skills = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: node,
        title: 'Node',
        style: 'shadow-lime-300'
    },
    {
        id: 4,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-400'
    },
    {
        id: 5,
        src: react,
        title: 'React',
        style: 'shadow-[#15D7FD]'
    },
    {
        id: 6,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-[#45A8B3]'
    },
    {
        id: 7,
        src: python,
        title: 'Python',
        style: 'shadow-yellow-400'
    },
    {
        id: 8,
        src: postgres,
        title: 'PostgresQL',
        style: 'shadow-gray-100'
    },
    {
        id: 9,
        src: mongodb,
        title: 'MongoDB',
        style: 'shadow-green-500'
    }, 
    {
        id: 10,
        src: git,
        title: 'Git',
        style: 'shadow-orange-600'
    }
    
]

const Skills = () => {
  return (
    <div name='skill' className='bg-[#DDD4D0] dark:bg-[#211A1D] dark:text-white w-full h-screen pt-72 sm:pt-4 2xl:pt-0'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
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