import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ECarousel } from '../../Data/Info';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Ecarousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={3}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
            412: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            640: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
          }}
        >
     {
        ECarousel.map((item)=>{
            return(
                <SwiperSlide key={item.id} className='px-[3rem] my-[2rem] w-full'>
                    <div>
                        <div className='relative text-sm text-center'>
                            <img src={item.img} alt='img' className='h-[50vh]'/>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                            
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

export default Ecarousel
