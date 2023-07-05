import React from 'react';

const About = () => {
    return (
        <div name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam! Ullam ad ducimus recusandae quia aspernatur libero repudiandae consectetur eveniet minima quidem perferendis in amet odio commodi, quam magnam aut ipsum neque porro accusamus et. Quisquam hic quae dolorum animi perferendis sit necessitatibus culpa inventore doloremque dignissimos. Corrupti iusto ipsa deleniti itaque, ad ut. Molestias tempora quibusdam nisi, adipisci labore ea ex ratione. .</p>
                <br />
                <p  className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, eos. Consectetur autem illo quam id eveniet aliquam, sequi in accusamus!</p>
            </div>
        </div>
    );
};

export default About;