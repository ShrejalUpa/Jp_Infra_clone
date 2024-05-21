import React from 'react'
import { Codename, Delivered, ISO, NRI, Overview } from '../Data/Info'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
    <div className='bg-[#2d67a9] text-white px-[4.5rem]'>
    <div className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-6'>
     <div>
      <h1 className='font-bold my-[1rem]'>Ongoing Projects</h1>
      {
        Codename.map((item)=>{
          return(
            <>
            <p className='text-xs font-semibold my-1 text-gray-300'>{item.title}</p>
            </>
          )
        })
      }
     </div>

     <div>
      <h1 className='font-bold my-[1rem]'>Delivered Projects</h1>
      {
        Delivered.map((item)=>{
          return(
            <>
            <p className='text-xs font-semibold my-1 text-gray-300'>{item.title}</p>
            </>
          )
        })
      }
     </div>
     
     <div>
      <h1 className='font-bold my-[1rem]'>NRI Corner</h1>
      {
        NRI.map((item)=>{
          return(
            <>
            <p className='text-xs font-semibold my-1 text-gray-300'>{item.title}</p>
            </>
          )
        })
      }

      <h1 className='font-bold my-[3rem]'>WORK WITH US</h1>
      <p className='text-xs font-semibold my-1 text-gray-300'>CAREERS</p>
      <p className='text-xs font-semibold my-1 text-gray-300'>POSITION AVAILABLE</p>
     </div>

     <div>
      <h1 className='font-bold my-[1rem]'>Quick links</h1>
      {
        Overview.map((item)=>{
          return(
            <>
            <p className='text-xs font-semibold my-1 text-gray-300'>{item.title}</p>
            </>
          )
        })
      }
     </div>

     <div>
      <h1 className='font-bold my-[1rem]'>ISO Certification</h1>
      {
        ISO.map((item)=>{
          return(
            <>
            <p className='text-xs font-semibold my-1 text-gray-300'>{item.title}</p>
            </>
          )
        })
      }
      <h1 className='font-bold my-[3rem]'>WORK WITH US</h1>
     </div>
      
    </div>

    <hr className='bg-black my-[1rem]' />
        <div className=''>
          <div className='flex justify-center gap-4'>
            <p className='text-sm font-semibold lg:my-1 text-gray-300'>Privacy Policy</p>
            <p className='text-sm font-semibold lg:my-1 text-gray-300'>Terma & COnditions</p>
            <p className='text-sm font-semibold lg:my-1 text-gray-300'>Refund & Cancellation Policy</p>
          </div>

          <div className='flex justify-center items-center'>
            <p className='text-[15px] text-xs font-semibold my-1 text-gray-300'>Copyright by JP INFRA. All rights reserved.</p>
          </div>
          <div className='flex justify-center items-center gap-5 py-[1rem]'>
            <p className='border p-2 rounded-[50%]'><FaFacebookF /></p>
            <p className='border p-2 rounded-[50%]'><FaInstagram /></p>
            <p className='border p-2 rounded-[50%]'><FaLinkedinIn /></p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer
