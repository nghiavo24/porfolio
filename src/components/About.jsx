import React from 'react';
import {Link} from 'react-scroll'



const About = () => {

  return (
    <div name='about' className='w-full h-fit bg-[#DDD4D0] dark:bg-[#211A1D] dark:text-white xl: pt-20 xl:h-screen'>
        <div className='flex flex-col justify-center items-center'>
            <div className='max-w-[350px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-center pb-8 pl-4 col-span-5'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-[#F08080] dark:border-pink-600 dark:text-white'>More about me</h1>
                </div>
                    </div>
                <div className='max-w-[1400px] w-full grid sm:grid-cols-2 gap-8 px-4 jus'>
                    <div className='sm:text-right text-4xl justify-center flex-col flex items-center'>
                        <p> Hello! I'm <span className='text-[#F08080] dark:text-pink-600'>Nathan</span></p>
                        <br />
                        <Link to='project'smooth={true} duration={500} ><p className='italic hover:text-[#F08080] dark:hover:text-pink-600 hover:cursor-pointer text-base'>(Check out some of my recent projects)</p></Link>
                        <div className='pt-8'>
                            <button className=" hover:text-white dark:hover:text-black w-fit hover:animate-headShake bg-gradient-to-r from-[#f08080] to-[#f3d8c7]  dark:from-purple-700 dark:to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#db7f8e] dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">
                                <a href='https://docs.google.com/viewer?url=https://docs.google.com/document/d/1pfZuF9BX3wEtHFGaPN9D4IND_efT5NpoRMt4nFMQp7k/export?format=pdf' target='_blank' rel='noreferrer'>View resume</a>
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