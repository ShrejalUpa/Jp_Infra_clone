import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Articles } from '../../Data/Info';

const ArticlesCarousel = () => {
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
        Articles.map((item)=>{
            return(
                <SwiperSlide key={item.id} className='px-[3rem] my-[1rem] w-full'>
                    <div>
                        <div className='relative text-sm text-center'>
                            <img src={item} alt='img' className='h-[30vh] border border-black p-3 bg-gray-200'/>
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

export default ArticlesCarousel
