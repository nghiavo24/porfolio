import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';
import { Cursor, useTypewriter} from 'react-simple-typewriter';

export const Home = () => {
  const[text] = useTypewriter({
    words: [
      "Hi there, let's build something amazing together.",
      "Transforming ideas into reality, one line at a time. ",
      "Empowering others through technology.",
      "Unleashing the full potential of technology to solve real-world problems.",
      "Let's get ☕ and have a chat 🫶"
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 40,
  })

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] md:px-16'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-xl pb-2'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nathan Vo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] py-2'>I'm a full-stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>I'm a full-stack developer and a life-long learner that want to make, design and build products and ideas that matter and have a positive impact in every day life.</p>            
            <div className='text-xl py-4'>
              <p className='text-[#ccd6f6]'>
                <span>{text}</span>
              </p>
            </div>
            <div className="grid gap-8 items-start justify-start py-8">
                <button className="text-white bg-gradient-to-r from-purple-700 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  <span className="flex items-center space-x-5">
                    <span className="px-2 text-[#ccd6f6] text-xl hover:text-gray-100 transition duration-200">About Me</span>
                    <span className='hover:rotate-90 duration-200'>
                    <Link to="about" smooth={true} duration={500}><HiArrowNarrowRight size='1.25rem' /></Link>
                    </span>
                  </span>
                </button>
            </div>
          </div>
      </div>
  )
}
