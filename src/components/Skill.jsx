import React from 'react';
import { skills, softskills } from '../../public/data';
const Skill = () => {
    return (
        <div
            name='skill'
            className='h-screen w-full bg-gradient-to-b from-black  to-gray-800 ' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center '>
                
                <div className='w-full flex flex-col py-10'>
                    
                    <h4 className='text-4xl  text-white font-bold inline border-b-4 border-gray-500 '>
                        Technical Skills
                    </h4>
                        
                    
                    <div className='w-full flex flex-wrap gap-10 items-center justify-center'>
                        
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div>
                                    <img src={skill.icon} alt="" />
                                </div>
                            </div>
                        ))
                        } 
                            
                    </div>
                </div>

            </div>
            
            
        </div>
    );
};

export default Skill;