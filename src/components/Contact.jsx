import React from 'react';



const Contact = () => {

  return (
    <div name='contact' className='w-full h-screen bg-[#DDD4D0] dark:bg-[#211A1D] text-black dark:text-white flex justify-center items-center pt-4'>
        <form method='POST' action='https://getform.io/f/55bb6a98-4c36-4302-8c27-57c0f3ef92b7' className='flex flex-col max-w-xl w-full'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-4 border-[#f08080] dark:border-pink-600 dark:text-white'>Contact</h1>
                <p className='dark:text-white text-xl py-6'>Submit the form below or click <a href="mailto:nghia.vo1452@gmail.com"><span className='underline underline-offset-2 hover:text-[#f08080] dark:hover:text-pink-600'>here</span></a> to send me an email.</p>
            </div>
            <input className='dark:bg-[#ccd6f6] p-2 rounded-lg' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 dark:bg-[#ccd6f6] rounded-lg' type='email' placeholder='Email' name='email' />
            <textarea className='dark:bg-[#ccd6f6] p-2 rounded-lg' rows='7' type='message' placeholder='Message' name='message' required/>
            <div className='grid gap-8 items-start justify-center py-4'>
              <button className=' hover:text-white dark:hover:text-black bg-gradient-to-r from-[#f08080] to-[#f3d8c7] dark:from-purple-700 dark:to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#db7f8e] dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-6 py-4 flex items-center'>Let's Collaborate❗</button>
            </div>
        </form>
    </div>
  )
}

export default Contact