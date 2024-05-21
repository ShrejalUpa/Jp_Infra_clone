import React from 'react'
import Barcelona from '../../Images/pushingbound/Barcelona.jpg'
import icon1 from '../../Images/pushingbound/icon1.jpg'

const Northbarcelona = () => {
  return (
    <>
     
      <div className="w-full p-4 px-6 py-4 mt-10 md:ml-10 pt-10 ">
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-3 ">
          <div className="w-full md:1/2 ">
            <img
              src={Barcelona}
              alt="Bercelona"
              className="w-full h-auto mb-4"
            />
          </div>
          <div className="w-full md:1/2 p-4 ">
            <div className="w-1/2 flex md:ml-5">
              <img src={icon1} alt="" />
            <p className="text-3xl md:text-2xl md:ml-10 text-blue-900 font-bold ">
              North Barcelona
            </p>
            </div>
            <p className="text-gray-700 md:ml-5 mt-8">
              A prized city, Barcelona gave life back to their streets by
              introducing this concept and we, at JP Infra, are striving to do
              the same. In the hustle and bustle of Mumbai’s busy streets, you
              get to experience a pollution-free zone by restricting entry to
              carbon-emitting vehicles. JP Infra is proud to be part of bringing
              a slice of Europe to Mumbai to create a residential utopia,
              inspired by international style living.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Northbarcelona
