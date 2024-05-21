import React from 'react'
import Layout from '../componenst/Layout'
import {Outlet } from 'react-router-dom'
import Header from '../componenst/PushingBound/Header'
import Carousel from '../componenst/PushingBound/Carousel'
import BA from '../../src/Images/pushingbound/Ba.jpg'
import LI from '../../src/Images/pushingbound/Li.jpg'
import LA from '../../src/Images/pushingbound/La.jpg'
import DI from '../../src/Images/pushingbound/Di.jpg'
import PO from '../../src/Images/pushingbound/Po.jpg'

const PushingBound = () => {
  return (
    <Layout>
      <div className="px-3 py-4 pb-[2rem]">
      <hr className="w-20 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 md:w-40 dark:bg-gray-400" />
        <h2 className="md:text-4xl mb-2 font-bold text-blue-900 text-center text-3xl">
        Design Innovation
        </h2>
        <p className='text-center'>We at JP Infra believe in saving our environment and have ensured we follow what we believe in.</p>
      </div>

      <div className='bg-white rounded-2xl'>
        <Header />
        <hr className='text-gray-300 pb-[1rem]' />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>

      <div className="px-3 py-8">
        <hr className="w-20 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 md:w-40 dark:bg-gray-400" />
        <h2 className="md:text-4xl mb-10 font-bold text-blue-900 text-center text-3xl">
        Integrated Living 
        </h2>
      </div>
      <p className="px-10 text-center">Home is where the heart is, and you shouldn’t have to travel far to live a healthy, comfortable and vibrant lifestyle. At JP Infra properties, you will find spas and salons to pamper yourself, coffee shops to help you unwind and the best of community living. Your child is also thought of with ample play areas and top schools and educational institutions to keep their learning maximized.</p>
      <div className="flex flex-wrap gap-4 item-center justify-center mt-10">
        <img src={BA} alt="" />
        <img src={LA} alt="" />
        <img src={LI} alt="" />
        <img src={DI} alt="" />
        <img src={PO} alt="" />
      </div>

      <div className='bg-gray-200 w-full h-full'>
          <div className="px-3 py-8 pb-[6rem]">
          <hr className="w-20 h-1 mx-auto my-1 bg-gray-400 border-0 rounded md:my-5 md:w-40 dark:bg-gray-400" />
            <h2 className="md:text-4xl mb-4 font-bold text-blue-900 text-center text-3xl">
            Because We Care

            </h2>
            <p className='text-center'>JP Infra has never been a brand that has been concerned with just the brick and mortar of real estate. We strongly believe in building communities that can last a lifetime. We believe in giving back – to both home buyers who invest with us as well as employees and workers who dedicate their time to us.</p>
          </div>
        
          <div>
            <Carousel />
          </div>
      

      </div>
    </Layout>
  )
}

export default PushingBound
