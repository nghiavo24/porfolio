import React from 'react';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
import { AiFillEye as Live, AiFillGithub as Github } from 'react-icons/ai'

const Project = () => {   
    const projects =[
        {
            id:1,
            name:"The Dev Hub",
            image: Project1,
            github:"https://github.com/nghiavo24/the-dev-hub-fe",
            live:"https://the-dev-hub.vercel.app/",
            description: "Organization tool to facilitate job search. The app is fully functional, has full CRUD actions and equiped with Firebase authentication and styling was done using Tailwind."
        },
        {
            id:2,
            name:"Dealio",
            image: Project2,
            github:"https://github.com/nghiavo24/online-store-fe",
            live:"https://online-store-pt8ruqtva-guillermoaviles.vercel.app/",
            description: "An online store where users can buy and sell items. The application was built using MERN stack technologies and it has full CRUD actions."
        },
        {
            id:3,
            name:"Game of Thrones",
            image: Project3,
            github:"https://github.com/nghiavo24/game-of-thrones",
            live:"https://game-of-thrones-nu.vercel.app/",
            description: "A mini-wikipedia about game show Game of Thrones. It is a deep dive into ReactJS and parsing data from 3rd-part API to present it effectively. "
        },
        {
            id:4,
            name:"Did you know that?",
            image: Project4,
            github:"https://github.com/nghiavo24/Did-you-know-that",
            live:"https://did-you-know-that.vercel.app/",
            description: "A trivia game about Marvel. HTML, CSS and vanilla JavaScript were used to build this fun game."
        },
    
    ]
    
  
  return (
    <div name='project' className='w-full md:h-screen text-black bg-[#DDD4D0] dark:text-gray-300 dark:bg-[#211a1d]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pt-52 2xl:pt-0'>
          <h1 className='text-4xl font-bold inline border-b-4 dark:text-gray-300 border-[#F08080] dark:border-pink-600'>
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
                  <div className="pt-8 text-center">
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