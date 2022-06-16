import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* container   */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#33DDFF] font-bold'>Hi, My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ryan Howard</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>As a recent graduate from the Full Stack Coding Bootcamp at the University of Minnesota,

                    I have a Certificate in Full Stack Web Development as well as PC-LAN Administration.
                    I am excited to start a new career as a Developer and expand my knowledge in the Technology field.
                </p>
                <div>
                
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#33DDFF] hover:border-[#040404] hover:text-black hover:font-bold'>
                        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        View My Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />

                        </span>
                        
                    </button>
                
                </div>
            </div>

        </div>
    )
}

export default Home