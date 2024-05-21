import React from 'react'
import banner from '../Images/blogs/blog_banner.jpg'
import Layout from '../componenst/Layout'
import { blogcard } from '../Data/Info'

const Blogs = () => {
  return (
    <Layout>
    <div>
      <div className='lg:pb-0 md:pb-0'>
        <div className='lg:relative md:relative'>
          <img src={banner} alt='banner' className='lg:h-[40vh] md:h-[30vh]  h-[20vh] w-full' />
        </div>
       <div className='lg:px-[10rem] md:px-[11rem] lg:absolute md:absolute md:top-[1rem] lg:top-[6rem]'>
       <div className='bg-white text-black lg:shadow-md md:shadow-md lg:h-[40vh] md:h-[45vh] text-center py-[2rem] px-[4rem]'>
          <h1 className='text-3xl font-bold text-[#2d67a9]'>Blogs</h1>
          <p className='text-sm'>We, at JP Infra, believe that building a home is not just about investing in property. Here we not only offer you various reasons to invest in property in Mumbai or why Mira Road is the best location for property investment in Mumbai right now, but also a list of innovative ways and unique quirks to transforming your house into a vibrant, lovely home.</p>
        </div>
       </div>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:px-[4.5rem] md:px-[4.5rem] px-[2rem] lg:pt-[8rem] md:pt-[8rem] pt-[8rem] gap-8'>
        {
          blogcard.map((item)=>{
            return(
              <>
              <div className='my-[2rem]'>
                <img src={item.img} alt='img' />
                <p>{item.title}</p>
                <p className='text-gray-700 text-sm font-semibold my-1'>{item.date}</p>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
    </Layout>
  )
}

export default Blogs
