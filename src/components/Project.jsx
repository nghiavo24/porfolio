import React from 'react';
import { AiFillEye as Live, AiFillGithub as Github } from 'react-icons/ai'
import projects from '../data/projects';

const Project = () => {   
  return (
    <div name='project' className='w-full h-fit text-black bg-[#DDD4D0] dark:text-white dark:bg-[#211a1d] xl:pt-12 xl:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <h1 className='text-4xl font-bold inline border-b-4  border-[#F08080] dark:border-pink-600'>
            Projects
          </h1>
          <p className='text-2xl py-6'>Check out some of my recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#CF9893] dark:shadow-[#7a7a7a] group container rounded-md flex justify-center text-center items-center mx-auto content-div ">
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-xl dark:text-white tracking-wider ">
                    {item.name}
                  </span>
                  <br />
                  <span className='italic text-base'>
                    {item.description}
                  </span>
                  <div className="pt-4 text-center">
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button className="text-center rounded-lg px-2 py-2 m-1 bg-white text-gray-700 font-bold text-lg">
                        <Live />
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button className="text-center rounded-lg px-2 py-2 m-1 bg-white text-gray-700 font-bold text-lg">
                        <Github />
                      </button>
                    </a>
                </div>
              </div>
            </div>
          ))}

          </div>
      </div>
    </div>
  );
};

export default Project;