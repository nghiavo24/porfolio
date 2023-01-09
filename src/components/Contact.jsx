import React from 'react';



const Contact = () => {

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/55bb6a98-4c36-4302-8c27-57c0f3ef92b7' className='flex flex-col max-w-xl w-full'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</h1>
                <p className='text-gray-300 text-xl py-6'>Submit the form below or click <a href="mailto:nghia.vo1452@gmail.com"><span className='underline underline-offset-2 hover:text-pink-600'>here</span></a> to send me an email.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' rows='7' type='message' placeholder='Message' name='message' required/>
            <div className='grid gap-8 items-start justify-center py-4'>
              <button className='text-white bg-gradient-to-r from-purple-700 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-6 py-4 flex items-center'>Let's Collaborate❗</button>
            </div>
        </form>
    </div>
  )
}

export default Contact