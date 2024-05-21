import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { CardData } from '../../Data/Info';

const Carousel = () => { 
  return (
    <div>
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={3}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
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
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
     {
        CardData.map((item)=>{
            return(
                <SwiperSlide key={item.id} className='px-[3rem] my-[2rem]'>
                    <div>
                        <div className='relative'>
                            <img src={item.img} alt='img' className=''/>
                            <div className="absolute inset-0 bg-gray-100 opacity-0 transition-opacity duration-300 hover:opacity-50">
                                <div className='text-center py-[5rem] px-[2rem]'>
                                    <p>Affordable 1 Bed homes</p>
                                    <p>Sports Arena</p>
                                    <p>Shopping Arcade</p>
                                    <p>Open-To-Sky Swimming Pool</p>
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-[20rem]'>
                            <p className='text-white text-bold bg-black'>{item.title}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
     }
     <div className="custom-pagination flex justify-center m-4 lg:hidden md:hidden gap-2"></div>
     <div className="swiper-button-prev hidden sm:flex absolute top-1/2 left-0 transform -translate-y-1/2 z-10"></div>
      <div className="swiper-button-next hidden sm:flex absolute top-1/2 right-0 transform -translate-y-1/2 z-10"></div>
    </Swiper>
      
    </div>
  )
}

export default Carousel