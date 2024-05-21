import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { achievements } from '../../Data/Info';
const Achievements = () => {
  return (
    <div>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
              slidesPerView: 2,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
          }}
        >
     {
       achievements.map((item)=>{
            return(
                <SwiperSlide key={item.id} className='px-[3rem] my-[2rem] w-full'>
                    <div>
                        <div className='relative text-sm text-center'>
                            <img src={item} alt='img' className='h-[50vh]'/> 
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

export default Achievements
