import React, { useState ,useEffect} from 'react'
import logo from '../Images/JPInfraLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LgDropdwon, smDropdwon } from '../Data/Info';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const [lgdropdown , setLgDropdown] =useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShow(true);
        } else {
          setShow(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const link= () => {          
        window.location.href = "/";
        }
  return (
    <>
    <div className={`fixed shadow-md flex justify-around items-center bg-white text-black h-[15vh] z-20 top-0 left-0 w-full transition-transform transform ${show ? 'translate-y-0' : '-translate-y-full'} bg-white text-black p-4`} >
        <div className=''> 
            <img src={logo} alt='logo' className='w-[70%] cursor-pointer' onClick={link} />
        </div>

        <div className='flex justify-between items-center gap-2'>
                <div className='flex justify-between items-center gap-[2rem]'>
                    <NavLink to='/projects' className="hidden sm:block">PROJECTS</NavLink>
                    <NavLink to='/pushingbound' className="hidden sm:block">PUSHING BOUNDRIES</NavLink>
                    <NavLink to='/contact' className="hidden sm:block">CONTACT US</NavLink>
                </div>

                <div class="h-6 flex items-center justify-center">
                    <div class="h-full font-bold border-l border-gray-400 hidden sm:block"></div>
                </div>

                    <div>
                        <FaPhone className='lg:text-2xl md:text-2xl text-2xl'/>
                    </div>


                    <div class="h-6 flex items-center justify-center">
                         <div class="h-full font-bold border-l border-gray-400 hidden sm:block"></div>
                    </div>
                    <div className='lg:text-2xl md:text-2xl text-4xl pl-2 relative  hidden sm:block '>
                        <HiOutlineMenuAlt3 onClick={()=>setLgDropdown((prev)=>!prev)} className='cursor-pointer'  />
            
                        {
                     lgdropdown &&(
                  
                    <div className='w-full bg-white pr-[6rem] h-[310px] shadow-md absolute z-10 top-10'>
                    
                    {
                      LgDropdwon.map((item)=>{
                        return(
                          <>
                          
                            <div className='flex items-center text-sm'>
                              <Link className='m-1 px-2' to={item.path}>{item.title}</Link>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                )
              }
                    </div>

                    <div className='md:hidden lg:hidden'>
                      <MdMenu className='text-4xl' onClick={()=>setOpen(!open)}/>
                    </div>
        </div>  
      
    </div>

    <div>
    {
        open && (
            <div className={`fixed top-[8.6rem] z-10 left-0 w-full h-[58vh] transition-transform transform ${show ? 'translate-y-0' : '-translate-y-full'} bg-white text-black p-4`}>
               {
                smDropdwon.map((item)=>{
                  return(
                    <>
                       <div className='flex justify-center text-xl'>
                          <Link className='m-2 px-2' to={item.path}>{item.title}</Link>
                        </div>
                    </>
                  )
                })
               }
            </div>
            )
    }
    </div>
    </>
  )
}

export default Navbar
