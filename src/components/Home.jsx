import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';
import { useTypewriter} from 'react-simple-typewriter';

export const Home = () => {
  const[text] = useTypewriter({
    words: [
      "Hi there, let's build something amazing together.",
      "Transforming ideas into reality, one line at a time. ",
      "Empowering others through technology.",
      "Unleashing the full potential of technology to solve real-world problems!",
      "Can I buy you a cup of ☕ and have a chat 🫶?"
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  })

  return (
    <div name='home' className='bg-[#DDD4D0] dark:bg-[#211A1D] dark:text-white w-full h-screen  md:px-16'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
            <p className=' text-[#f08080] dark:text-pink-600 text-xl pb-2'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-xl font-bold'>Nathan Vo</h1>
            <h2 className='text-[#f08080] text-xl sm:text-7xl italic dark:text-pink-600 py-2'>I'm a full-stack developer.</h2>
            <p className='dark:text-white py-4 max-w-[700px] text-base'>I'm a full-stack developer and a life-long learner that want to make, design and build products and ideas that matter and have a positive impact in every day life.</p>            
            <div className='text-xl py-4'>
              <p className='text-[#f08080] dark:text-pink-500 text-lg sm:text-sm'>
                <span>{text}</span>
              </p>
            </div>
            <Link to="about" smooth={true} duration={500}>
              <div className="grid gap-8 items-start justify-start py-8 ">
                  <button className="group hover:animate-headShake text-white bg-gradient-to-r from-[#f08080] to-[#f3d8c7] dark:from-purple-700 dark:to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#db7f8e] dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <span className="flex items-center space-x-5">
                      <span className="px-2 text-white dark:text-[#ccd6f6] text-xl group-hover:text-black dark:group-hover:text-black transition duration-200"><Link to="about" smooth={true} duration={500}>About Me</Link></span>
                      <span className='group-hover:rotate-90 duration-300 group-hover:text-black dark:group-hover:text-black'>
                      <HiArrowNarrowRight size='1.25rem' />
                      </span>
                    </span>
                  </button>
              </div>
            </Link>
          </div>
      </div>
  )
}
