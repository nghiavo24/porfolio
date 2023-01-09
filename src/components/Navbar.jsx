import React, { useState} from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import Logo from '../assets/logo_initials.png';
import {motion as m} from 'framer-motion';

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[move, setMove] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <m.div
        initial={{x: -500, opacity: 0, scale: 1}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{ duration: 1.2 }}
        >
            <img src={Logo} alt="Logo Image" className='w-[125px] pt-4' />
        </m.div>
            <m.ul 
            initial={{x: 500, opacity: 0, scale: 1}}
            animate={{x: 0, opacity: 1, scale: 1}}
            transition={{ duration: 1.2 }}
            className='hidden md:flex text-2xl '>
              <li className='hover:text-pink-600'><Link  to="home" smooth={true} duration={500}>Home</Link></li>
              <li className='hover:text-pink-600'><Link  to="about" smooth={true} duration={500}>About</Link></li>
              <li className='hover:text-pink-600'><Link  to="skill" smooth={true} duration={500}>Skills</Link></li>
              <li className='hover:text-pink-600'><Link  to="project" smooth={true} duration={500}>Projects</Link></li>
              <li className='hover:text-pink-600'><Link  to="contact" smooth={true} duration={500}>Contact</Link></li>
            </m.ul>

        <m.div
          initial={{x: 500, opacity: 0, scale: 1}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{ duration: 1.2 }}
         className='md:hidden z-10 '
         onClick={handleClick}>
          <div>
            <button class="relative group">
              <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                  <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                  <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                  <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </m.div>
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='skill' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='project' smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
    <m.ul
    initial={{x: -500, opacity: 0, scale: 1}}
    animate={{x: 0, opacity: 1, scale: 1}}
    transition={{ duration: 1.2 }}
    >
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/nghia-vo/'>
                Linkedin <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/nghiavo24'>
                Github <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='mailto:nghia.vo1452@gmail.com'>
                Email <HiOutlineMail size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href=''>
                Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </m.ul>
        </div>
    </div>
  )
}

export default Navbar