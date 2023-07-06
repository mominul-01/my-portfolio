import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import profileImage from '../assets/my-picture.png'
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name='home'
            className='h-screen w-full bg-gradient-to-b from-black  to-gray-800 '
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full w-full'>
                    <h2 className=' sm:text-7xl font-bold text-white'>
                        I'm a 
                        <span className='text-3xl'>
                            <br />
                            MERN Stack Developer..
                        </span>
                    </h2>
                    <p className=' text-2xl text-gray-500 py-4 max-w-md'>
                       Knock of building applications with front and back end operations.
                    </p>
                    <div>
                        <Link to='contact' smooth duration={500} className='group text-white w-fit px-6 py-3  my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Hire Me. 
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardDoubleArrowRight size={30}
                                className='ml-1'/>
                            </span>
                        </Link>
                    </div>

                </div>
                {/* <div>
                    <img src={profileImage} alt=" my-profile"
                    className='rounded-2xl  mx-auto w-2/3 '/>
                </div> */}

                {/* -----------------its another picture=--------------- */ }
                <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
       
                    <div
                        className=" relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                        before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                        alt="profile"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src={profileImage}
                        />
                    </div>
                
                </div>


            </div>
        </div>
    );
};

export default Home;