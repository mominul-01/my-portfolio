import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                < >
                    Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/mominul-islam01/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                < >
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/mominul-01',
           
        },
        {
            id: 3,
            child: (
                < >
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'http://mailto:mominul.cse21@gmail.com',
            
        },
        {
            id: 4,
            child: (
                < >
                   Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/public/cv.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <u>

                {
                    links.map(({ id, child, href, style,download }) =>(
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 " +" " +style}>
                            <a
                                href={href}
                                className='flex justify-between items-center w-full text-white text-xl no-underline  '
                                download={download}
                                rel='noreferrer'
                                target='_blank'
                            
                            >
                                {child}
                            </a>
                        </li>
                    ))
                }

                
            </u>
        </div>
    );
};

export default SocialLink;