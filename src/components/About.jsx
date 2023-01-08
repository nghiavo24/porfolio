import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[150px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-pink-600'>About</h1>
                </div>
                    </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi👋 I'm Nathan. Nice to meet you!
                        </p>
                    </div>
                    <div>
                        <p>My background in Healthcare industry and my experience in serving a variety of customers with different background enables me to have a strong foundation in communication, collaboration in teams efficiently and I have also learned how to lead a team. I am passionate about improving or creating applications that impact people in a positive way, whether it is through Healthcare or simply making an application more accessible. </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About