import { links } from '../../public/data';
import { Link } from 'react-scroll';
import { BsFacebook,BsInstagram, BsLinkedin,BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        
        <footer
            name='skill'
            className=' w-full bg-gradient-to-b from-black  to-gray-800 '
        >
            <hr className='hidden dark:block' />
            <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between'>

                <p className='text-lg text-white font-semibold'>
                    Address : Chuadanga, Bangladesh 

                </p>



                  {/* ------------Menu Options ----------- */}

                <ul className=' hidden md:flex'>
                    {
                        links.map(({ id, link }) => (
                            <li key={id}
                            className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
                                <Link to={link} smooth duration={500}> {link}</Link>
                            </li>
                        ))
                    }
                
                </ul>


                <div className='flex flex-col gap-5 text-md text-white '>
                    <p>mominul.cse21@gmail.com</p>
                    <p>+880 1625737662</p>

                </div>

            </div>
            <div className='flex  flex-col gap-10 items-center justify-center pb-10'>
                    <p className='text-white font-semibold tracking-wider'>
                        Social Media
                    </p>

                    <div className='flex gap-10 text-white text-2xl mb-5'>

                    <p> 
                       
                        <a href= 'https://twitter.com/momin2018'>
                        <BsTwitter className='hover:scale-125'/>
                        </a>
                    </p>
                    <p> 
                       
                        <a href= 'https://www.facebook.com/mominul0101'>
                        <BsFacebook className='hover:scale-125'/>
                        </a>
                    </p>
                    <p> 
                       
                        <a href= 'https://www.linkedin.com/in/mominul-islam01/'>
                        <BsLinkedin className='hover:scale-125'/>
                        </a>
                    </p>
                    <p> 
                       
                        <a href= 'https://www.instagram.com/mominul0101/'>
                        <BsInstagram className='hover:scale-125'/>
                        </a>
                    </p>
                   
                       
                       
                        

                    </div>

                </div>

                <p className='text-center font-signature text-gray-300 tracking-wider pb-10'>
                    @2023 Mominul Islam
                </p>

        </footer>
    );
};

export default Footer;