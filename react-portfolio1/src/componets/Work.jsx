import React from 'react'
import Penny from '../assets/penny.png'
import Weight from '../assets/w2g.png'
import Anime from '../assets/animesearch.png'
import TechBlog from '../assets/techblog.png'
import placeholder from '../assets/coding.jpg'
const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#33DDFF]'>My Work</p>
                    <p className='py-6'>// Here is some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div
                        style={{ backgroundImage: `url(${Penny})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS + Mongo DB

                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noopener noreferrer" href='https://penny4yourthoughts.herokuapp.com/'>
                                
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>Demo</button>
                                </a>

                                <a href='https://github.com/Rhoward1/penny_for_your_thoughts' target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>View Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                    <div
                        style={{ backgroundImage: `url(${Weight})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Node JS + MySql

                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://immense-hamlet-02624.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>Demo</button>
                                </a>

                                <a href='https://github.com/Rhoward1/workout_app-pj2' target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>View Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Anime})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript + API

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://nicoled1999.github.io/project-1/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>Demo</button>
                                </a>

                                <a href="https://github.com/Rhoward1/project-1" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>View Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                    <div
                        style={{ backgroundImage: `url(${TechBlog})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Node Js + MySQL
                                

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://the-devtech-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>Demo</button>
                                </a>

                                <a href="https://github.com/Rhoward1/Tech_Blog" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>View Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${placeholder})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                     Placeholder

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>Demo</button>
                                </a>

                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>View Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                    <div
                        style={{ backgroundImage: `url(${placeholder})` }}
                        className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                   Placeholder

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>Demo</button>
                                </a>

                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg shadow-lg shadow-[#040c16]'>View Code</button>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Work