import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { pushingboundCard } from '../../Data/Info';

const Carousel = () => { 
  return (
    <div>
    <Swiper
        modules={[Autoplay]}
        spaceBetween={1}
        slidesPerView={3}
        
       
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
            412: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
     {
        pushingboundCard.map((item)=>{
            return(
                <SwiperSlide key={item.id} className='px-[3rem] my-[2rem]'>
                    <div className='lg:flex lg:justify-around md:flex md:justify-around bg-white'>
                        <div className='lg:w-[50%] md:w-[50%]'>
                            <img src={item.img} alt='img'/>
                        </div>
                        <div className='lg:w-[50%] md:w-[50%] p-[2rem]'>
                            <h1 className='text-xl text-[#2d67a9] py-[1rem] font-bold'>{item.title}</h1>
                            <p>{item.des}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
     }
    
    </Swiper>
      
    </div>
  )
}

export default Carousel