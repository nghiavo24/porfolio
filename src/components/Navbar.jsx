import React, { useState } from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import DarkModeLogo from '../assets/DarkModeLogo.png';
import LightModeLogo from '../assets/LightModeLogo.png'
import {motion as m} from 'framer-motion';
import Switcher from './DarkMode/Switcher';


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='bg-[#DDD4D0] fixed w-full h-[80px] flex justify-between items-center px-4 dark:bg-[#211A1D] dark:text-white'>
        <m.div
        initial={{x: -500, opacity: 0, scale: 1}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{ duration: 1.2 }}
        >
            <div className='hidden dark:flex'>
              <img src={DarkModeLogo} alt="Logo" className='w-[125px] pt-4' />
            </div>
            <div className='dark:hidden'>
              <img src={LightModeLogo} alt="Logo" className='w-[125px] pt-4' />
            </div>
        </m.div>
            <m.ul 
            initial={{x: 500, opacity: 0, scale: 1}}
            animate={{x: 0, opacity: 1, scale: 1}}
            transition={{ duration: 1.2 }}
            className='hidden md:flex text-2xl '>
              <li className='hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'><Link  to="home" smooth={true} duration={500}>Home</Link></li>
              <li className='hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'><Link  to="about" smooth={true} duration={500}>About</Link></li>
              <li className='hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'><Link  to="skill" smooth={true} duration={500}>Skills</Link></li>
              <li className='hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'><Link  to="project" smooth={true} duration={500}>Projects</Link></li>
              <li className='hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'><Link  to="contact" smooth={true} duration={500}>Contact</Link></li>
              <li><Switcher/></li>
            </m.ul>

        <m.div
          initial={{x: 500, opacity: 0, scale: 1}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{ duration: 1.2 }}
         className='md:hidden z-10 flex justify-center pt-4'>
          <div className='py-3 px-6'>
            <Switcher />
          </div>
          <div>
            <button className="relative group" onClick={handleClick}>
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-black hover:ring-5 group-focus:ring-4 dark:ring-gray-300 dark:hover:ring-8 dark:group-focus:ring-4 ring-opacity-75 dark:ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className="bg-[#211A1D] dark:bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                  <div className="bg-[#211A1D] dark:bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                  <div className="bg-[#211A1D] dark:bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                  <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div className="absolute bg-[#211A1D] dark:bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div className="absolute bg-[#211A1D] dark:bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        
        </m.div>
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#DDD4D0] dark:bg-[#211A1D] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'>
              <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'>
              <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'>
              <Link onClick={handleClick} to='skill' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'>
              <Link onClick={handleClick} to='project' smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#f08080] dark:hover:text-pink-600 hover:animate-headShake'>
              <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
    <m.ul
    initial={{x: -500, opacity: 0, scale: 1}}
    animate={{x: 0, opacity: 1, scale: 1}}
    transition={{ duration: 1.2 }}
    >
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#003f88] dark:bg-blue-600 rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/nathaniel-vo/'target='_blank' rel='noreferrer'>
                Linkedin <FaLinkedin size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/nghiavo24'target='_blank' rel='noreferrer'>
                Github <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9cc5a1] dark:bg-[#6fc2b0] rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='mailto:nghia.vo1452@gmail.com'target='_blank' rel='noreferrer' >
                Email <HiOutlineMail size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#696969] dark:bg-[#565f69] rounded-lg'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://docs.google.com/viewer?url=https://docs.google.com/document/d/1pfZuF9BX3wEtHFGaPN9D4IND_efT5NpoRMt4nFMQp7k/export?format=pdf' target='_blank' rel='noreferrer'>
                Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </m.ul>
        </div>
    </div>
  )
}

export default Navbar