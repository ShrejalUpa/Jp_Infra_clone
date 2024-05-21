import React from 'react'
import icon2 from '../../Images/pushingbound/icon2.jpg'
import Unity from '../../Images/pushingbound/Unity.jpg'

const Unitytowers = () => {
  return (
    <>
    <div className='w-full'>
      <div className="w-full p-4 px-6 py-4 mt-10 md:ml-10 pt-10 ">
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-3 ">
          <div className="w-full md:1/2 ">
            <img src={Unity} alt="Bercelona" className="w-full h-auto mb-4" />
          </div>
          <div className="w-full md:1/2 p-4 ">
            <div className="w-1/2 flex md:ml-5">
              <img src={icon2} alt="" />
              <p className="text-3xl md:text-2xl md:ml-10 text-blue-900 font-bold ">
                Unity Towers
              </p>
            </div>
            <p className="text-gray-700 md:ml-5 mt-8">
              Located in the heart of the city, Unity Towers is nothing short of
              a dream home. It offers the most heavenly views of the city. A
              furnished 2BHK at just 420 sqft is worth being called a design
              marvel. JP Infra’s Unity Towers gives you the opportunity to
              embrace the finer things in life.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Unitytowers
