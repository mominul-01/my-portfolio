import React from 'react';
import picture from '../assets/profile-pic.png';

import baikar_zone from '../assets/portfolio/baikar-zone.png';
import best_five from '../assets/portfolio/best-five.png';
import dream_tech from '../assets/portfolio/dream-tech.png';
import ecommerce from '../assets/portfolio/ecommerce.png';
import food_network from '../assets/portfolio/food-network.png';
import football_team from '../assets/portfolio/football-team.png';
import  penguin_fashion from '../assets/portfolio/penguin fashion.png';


import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Portfolio = () => {


    const portfolios = [
        {
            id: 1,
            src: penguin_fashion
        },
        {
            id: 2,
            src: football_team
        },
        {
            id: 3,
            src: baikar_zone
        },
        {
            id: 4,
            src: dream_tech
        },
        {
            id: 5,
            src: best_five
        },
        {
            id: 6,
            src: ecommerce
        },
    ]

    return (
        <div
            name="portfolio"
            className=' bg-gradient-to-b from-black to-gray-800 w-full text-white '
        >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

           

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500' > 
                        Portfolio
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>

                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 sm:px-0 mb-9'  >

                {
                    portfolios.map(({ id,src }) => (
                        <div key={id}
                            className='shadow-md shadow-gray-600 rounded-lg'
                            
                        >
                            <img src={src}
                                alt=""
                                className='rounded-md duration-200 hover:scale-105'
                            />
                            <div className='flex items-center justify-center'>
                            <button className='group text-white w-fit px-6 py-3  my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Visit
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardDoubleArrowRight size={30}
                                className='ml-1'/>
                            </span>
                        </button>

                            </div>
                        </div>
        
                    ))
                }
                </div>
            
            </div>
            
        </div>
    );
};

export default Portfolio;