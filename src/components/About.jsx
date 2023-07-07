import React from 'react';
import about_image from '../assets/portfolio/fb-profile-removebg.png'
import { FaPhone, FaSkype, FaTelegram, FaUser, FaUserAlt } from 'react-icons/fa';
import { MdMail, MdOutlineAlternateEmail } from 'react-icons/md';


const About = () => {
    return (
        <div name="about"
            className='w-full bg-gradient-to-b from-gray-800 to-black text-white  pt-10'>
            <div className='w-full  flex flex-col  max-w-screen-lg  lg:flex-row mx-auto px-8 md:px-10 gap-10 lg:gap-20 pb-10 '>
            
                <div className='w-full md:h-[290] lg:w-1/3 flex flex-col items-center border border-gray-200 dark:bg-transparent rounded-md'>
                    <img src={about_image} alt="this is my picture"
                            className='h-[290] p-1 rounded-md ease-in-out duration-300 hover:scale-125' />
                </div>
               
                <div className='w-full flex flex-col'>
                    <p className='text-4xl font-bold  '>
                        About</p>

                    <p className='text-lg leading-10 text-black dark:text-gray-400'>
                        Full-Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions. Worked through hours of bootcamp structure, learning JavaScript, NodeJs, ReactJs,NextJs, and TypeScript. Eager to tackle web development/design challenges to achieve lasting impacts on user experience..

                    </p>
                    <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'>
                        <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 bg-[#040alc] text-white cursor-auto'>
                            <FaSkype size={20}/>   Md Mominul
                        </p>
                        <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 bg-[#040alc] text-white cursor-auto'>
                            <FaPhone size={20}/> +880 1625737662
                        </p>

                    </div>
                    <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'>
                        <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 bg-[#040alc] text-white cursor-auto'>
                            <MdMail size={20}/> mominul.cse21@gmail.com
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;