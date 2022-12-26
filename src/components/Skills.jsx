import React from 'react'
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import css from '../assets/css.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongo.png';

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
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: react,
        title: 'React',
        style: 'shadow-blue-600'
    },
    {
        id: 5,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'
    },
    {
        id: 6,
        src: node,
        title: 'Node',
        style: 'shadow-green-500'
    },
    {
        id: 7,
        src: mongodb,
        title: 'MongoDB',
        style: 'shadow-brown-500'
    }, 
    {
        id: 8,
        src: python,
        title: 'Python',
        style: 'shadow-yellow-400'
    }
]

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]'>
        <div>
            <div>
                <p className='text-4xl text-gray-300 py-4 font-bold inline border-pink-600'>Experience</p>
                <p className='py-4'>These </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                    <img src={html} alt='HTML icon' className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills