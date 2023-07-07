
import { skills, softskills } from '../../public/data';
import { BsCheck2All } from 'react-icons/bs';
const Skill = () => {
    return (
        <div
            name='skill'
            className=' w-full bg-gradient-to-b from-black  to-gray-800 ' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center '>
                
                <div className='w-full flex flex-col py-10'>
                    
                    <h4 className='text-4xl  text-white font-bold text-center '>
                        Technical Skills
                    </h4>
                        
                    
                    <div className='w-full flex flex-wrap gap-10 items-center justify-center py-10'>
                        
                        {skills.map((skill, index) => (
                            <div key={index} className='flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-300'>
                                <div className='w-10 h-10'>
                                    <img src={skill.icon} alt="skills icons"  className='w-full h-full'/>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <p className='text-md font-semibold text-white'>
                                        {skill.name}
                                    </p>
                                    <p className='text-md-font-semibold text-white'>
                                        {skill.value + "%"}
                                    </p>
                                </div>

                                <div className='w-[200px] h-[10px] bg-slate-800 rounded-lg mb-1'>
                                    <div className='bg-neutral-300 h-full ' style={{width: skill.value + "%"}}>

                                    </div>
                                </div>

                            </div>
                        ))
                        } 
                            
                    </div>

                    <div className='mt-[10rem]'>
                        <h4 className='text-4xl font-bold text-white  mb-14 text-center'>
                            Soft Skills
                        </h4>
                    </div>
                    
                    <div className='flex flex-col md:flex-row gap-16 items-center justify-center'>
                        <div className='flex flex-col bg-[#000000] p-6 rounded-xl shadow-xl hover:scale-110 ease-in-out duration-500 mb-10 md:mb-0'>

                            {
                                softskills.slice(0,5).map((softskill, index) => (
                                    <div key={index +softskill} className='flex items-center gap-3 p-4'>
                                        <BsCheck2All color='white' size={22} />
                                        <p className='text-white'>
                                            {softskill}
                                        </p>
                                    </div>
                                ))
                            }

                        </div>

                        <div className='flex flex-col bg-[#000000] p-6 rounded-xl shadow-xl hover:scale-110 ease-in-out duration-500 mb-10 md:mb-0'>

                            {
                                softskills.slice(5,10).map((softskill, index) => (
                                    <div key={index +softskill} className='flex items-center gap-3 p-4'>
                                        <BsCheck2All color='white' size={22} />
                                        <p className='text-white'>
                                            {softskill}
                                        </p>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>

            </div>
            
            
        </div>
    );
};

export default Skill;