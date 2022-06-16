import React from 'react'

const Contact = () => {
  return (
    <div name='contact' >
    <div className='w-full h-screen bg-[#0a192f] flex justify-center p-4 mx-auto'>
        <form method='POST' action="https://getform.io/f/30be37d2-c4d7-49e8-9d17-b21013cffa92" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#33DDFF]'>Contact</p>
            <p className='text-gray-300 py-6'>// Submit the form below or send an Email - ryanmhoward.dev@gmail.com</p>
            </div>
            <input className='p-2 bg-[#e6e8f1]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e6e8f1]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e6e8f1] p-2' name="message" rows="10" placeholder='Message' />
            <button className='text-white border-2 hover:bg-[#33DDFF] hover:border-[#070707] hover:text-black hover:font-bold px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

        </form>
    </div>
    </div>
  )
}

export default Contact