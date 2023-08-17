
import about_image from '../assets/portfolio/fb-profile-removebg.png'
import { FaPhone, FaSkype } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';


const About = () => {
    return (
        <div name="about"
            className='w-full bg-gradient-to-b from-gray-800 to-black text-white  pt-10'>
            <div className='w-full  flex flex-col  max-w-screen-lg  lg:flex-row mx-auto px-8 md:px-10 gap-10 lg:gap-20 pb-10 '>
            
                <div className='w-full md:h-[250] lg:w-2/3 flex flex-col items-center border border-gray-200 dark:bg-transparent rounded-md'>
                    <img src={about_image} alt="this is my picture"
                            className='h-[250] p-1 rounded-md ease-in-out duration-300 hover:scale-125' />
                </div>
               
                <div className='w-full flex flex-col'>
                    <p className='text-4xl font-bold  '>
                        About</p>

                    <p className='text-lg leading-10 text-white mt-5 dark:text-gray-400'>
                        
                        I'm a passionate full-stack web developer with a knack for adapting and collaborating in fast-paced settings. My journey through rigorous bootcamps, mastering JavaScript, Node.js, React.js, Next.js, and TypeScript, has fueled my eagerness to conquer web development and design hurdles. I'm driven to create lasting user experiences that make a real difference.

                    </p>
                    <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'>
                        <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 bg-[#040alc] text-white cursor-auto'>
                            <FaSkype size={20}/>   Md Mominul
                        </p>
                        <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 bg-[#040alc] text-white cursor-auto'>
                            <FaPhone size={20}/> +880 1625737662
                        </p>

                    </div>
                    <div className='mt-2 2xl:mt-5 flex flex-wrap gap-5'>
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