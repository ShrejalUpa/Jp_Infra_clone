import React , { useEffect, useRef } from 'react'
import Layout from '../componenst/Layout'
import video from '../Images/video/north_video.mp4'
import ReParallax from '../componenst/North/ReParallax';
import Carousel from '../componenst/North/Carousel';



const North = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <Layout> 
      <div className="w-full bg-white">
        <video
        ref={videoRef}
        className="w-full rounded-md"
        autoPlay
        muted
        loop
       >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className='lg:flex lg:justify-between md:flex md:justify-between w-full lg:h-[95vh] bg-[#eeeee4] lg:px-[4.5rem] md:px-[4.5rem] p-[1rem] py-[2rem] gap-[2rem]'>
        <div className='lg:w-[50%] md:w-[50%]'>
          <h1 className='text-2xl text-[#2d67a9] font-bold my-1'>North</h1>
          <h1 className='text-2xl text-[#2d67a9] font-bold my-1'>An Assured Way Of Living</h1>
          <p>Home is where you enjoy a way of life, not just the four walls. North is designed with a vision to provide a carefully crafted lavish environment for our residents, with each space planned with great thought and vision. When you enter North, you enter into an oasis of greenery and serenity, a place of calm to come home to, from the fast-paced life of Mumbai. 16 themed gardens, a range of top-class amenities, car-free zones, safe zone for children and the elderly, and entertainment for the entire family, is what you get at North. And all of this, in a socially responsible sustainable low-waste environment. Come home to living, come home to North.</p>
        </div>
        <div className='relative'>
            <img src='https://www.jpinfra.com/img/jpnorthpage/new/lion.jpg' alt='img' className='w-full h-[70vh]' />
            <div class="absolute h-[70vh] inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            <p className='text-gray-500 text-center pt-[1rem]'>Reside in pride just like the majestic Lion’ s statue</p>
        </div>
      </div>

      <div className='w-full h-full'>
         <ReParallax />
      </div>

      <div>
          <div className='text-4xl my-[2rem] text-[#2d67a9] font-bold text-center'>
          <p>Our Living Space</p>
          </div>
          <div>
            <Carousel />
          </div>
      </div>

      <div>
        <div className='w-full lg:h-[70vh] text-center bg-[#eeeee4] py-[3rem]'>
            <h1 className='text-4xl text-[#2d67a9] font-bold my-1'>Looking for a property,</h1>
            <h1 className='text-4xl text-[#2d67a9] font-bold my-1'>but not sure where to start?</h1>
            <p className='my-[1rem]'>Let us help. Speak to our property expert today.</p>
            <button className='bg-transparent hover:bg-[#2d67a9] text-[#2d67a9] font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded'>KNOW MORE</button>
        </div>
      </div>
    
    </Layout>
  )
}

export default North
