import React from 'react'

const Project = () => {

   
    const projects =[
        {
            id:1,
            name:"React JS Application",
            image:'',
            github:"",
            live:"",
        },
        {
            id:2,
            name:"React JS Application",
            image:'',
            github:"",
            live:"",
        },
        {
            id:3,
            name:"React JS Application",
            image:'',
            github:"",
            live:"",
        },
        {
            id:4,
            name:"React JS Application",
            image:'',
            github:"",
            live:"",
        },
    
    ]
    
  
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Project
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {projects.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
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