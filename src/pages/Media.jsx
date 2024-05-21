import React from 'react'
import Layout from '../componenst/Layout'
import Ecarousel from '../componenst/Media/Ecarousel'
import NewCarousel from '../componenst/Media/NewCarousel'
import ArticlesCarousel from '../componenst/Media/ArticlesCarousel'

const Media = () => {
  return (
    <Layout>
       <div>
        <div className='relative pb-[2rem]'>
          <img src='https://static.vecteezy.com/system/resources/previews/000/830/014/large_2x/futuristic-banner-background-with-wireframe-terrain-vector.jpg' alt='banner' className='lg:h-[80vh] md:h-[60vh]  h-[20vh] w-full' />
        </div>
       <div className='lg:px-[9rem] md:px-[9rem] absolute md:top-[10rem] lg:top-[6rem]'>
       <div className='bg-white text-black shadow-md lg:h-[40vh] md:h-[40vh] text-center py-[2rem] px-[4rem]'>

          <p className='text-sm'>At JP Infra, we believe in showcasing our work as well as the fun we have. Here are the highlights of our project launches, the thoughts and opinions of the brains at JP Infra, how the outside world sees us and what we, as a team, are actually like – children at heart. Northern Light, our quarterly newsletter, talks extensively on how JP Infra has largely contributed to the growth and rise of Mira Road.</p>
        </div>
       </div>
      </div>
        <div className='pt-[5rem] lg:pt-0'>
          <div className='flex justify-center items-center pt-[3rem]'>
          <div class="border-b-[3px] border-gray-400 my-4 w-[10%]"></div>
          </div>

          <div>
          <h1 className='text-3xl font-bold text-[#2d67a9] text-center my-[1rem]'>Engagement Events</h1>
          </div>

          <div className=''>
            <Ecarousel />
          </div>
      </div>

      <div>
          <div className='flex justify-center items-center pt-[3rem]'>
          <div class="border-b-[3px] border-gray-400 my-4 w-[10%]"></div>
          </div>

          <div>
          <h1 className='text-3xl font-bold text-[#2d67a9] text-center my-[1rem]'>Newsletters</h1>
          </div>

          <div className=''>
            <NewCarousel />
          </div>
      </div>

      <div>
          <div className='flex justify-center items-center pt-[3rem]'>
          <div class="border-b-[3px] border-gray-400 my-4 w-[10%]"></div>
          </div>

          <div>
          <h1 className='text-3xl font-bold text-[#2d67a9] text-center my-[1rem]'>Newsletters</h1>
          </div>

          <div className=''>
            <ArticlesCarousel />
          </div>
      </div>

      <div>
        <div className='w-full lg:h-[70vh] text-center py-[3rem]'>
            <h1 className='text-4xl text-[#2d67a9] font-bold my-1'>Looking for a property,</h1>
            <h1 className='text-4xl text-[#2d67a9] font-bold my-1'>but not sure where to start?</h1>
            <p className='my-[1rem]'>Let us help. Speak to our property expert today.</p>
            <button className='bg-transparent hover:bg-[#2d67a9] text-[#2d67a9] font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded'>KNOW MORE</button>
        </div>
      </div>
    </Layout>
  )
}

export default Media
