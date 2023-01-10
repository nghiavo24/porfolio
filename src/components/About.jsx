import React from 'react';
import {Link} from 'react-scroll'
import {FaFileDownload} from 'react-icons/fa'


const About = () => {

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[150px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-pink-600'>About</h1>
                </div>
                    </div>
                <div className='max-w-[1400px] w-full grid sm:grid-cols-2 gap-8 px-4 jus'>
                    <div className='sm:text-right text-4xl justify-center flex-col flex items-center'>
                        <p> Hello! I'm Nathan.</p>
                        <br />
                        <Link to='project'smooth={true} duration={500} ><p className='italic hover:text-pink-600 underline hover:cursor-pointer text-base'>Check out some of my recent projects</p></Link>
                        <div className='pt-8'>
                            <button class=" w-52 hover:animate-headShake text-white bg-gradient-to-r from-purple-700 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">
                                <a href='https://drive.google.com/file/d/1t7aSD33fM8BGrBnrf-jB7suOvrm3l9YK/view?usp=sharing' target='_blank' rel='noreferrer'>View my resume</a>
                            </button>
                        </div>
                    </div>
                    <div className='text-base'>
                        <p>As a software developer student at General Assembly, I accumulated over 480+ hours of professional training in the fundamentals of software development. During that time, I had many opportunities to work with a variety of developers and teams across several time zones. It has helped me to develop a working style that emphasizes collaboration, communication and adaptability.</p>
                        <br />
                        <p>My passion for learning is the most valuable asset about myself. As I continue on my journey as a developer, I get excited whenver I am being introduced or exposed to a new technology or language.</p>
                        <br />
                        <p>I am seeking a new position as a developer. Refer me to someone you know. Or better yet, hire me!</p>
                        
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About