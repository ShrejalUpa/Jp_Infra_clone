import React from 'react'
import Layout from '../componenst/Layout'
import { NavLink } from 'react-router-dom'

const PushingBound = () => {
  return (
    <Layout>
      <div className="px-3 py-8 pb-[6rem]">
      <hr className="w-20 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-5 md:w-40 dark:bg-gray-400" />
        <h2 className="md:text-4xl mb-20 font-bold text-blue-900 text-center text-3xl">
        Design Innovation
        </h2>
        <p className='text-center'>We at JP Infra believe in saving our environment and have ensured we follow what we believe in.</p>
      </div>

      <div>
        <nav className='flex justify-around items-center'>
          <div>
            <NavLink to=''>North Barcelona</NavLink>
          </div>
          <div>
            <NavLink to=''>Unity Towersa</NavLink>
          </div>
        </nav>
        <hr className="w-[80%] h-1 mx-auto my-5 bg-gray-800 border-0 rounded md:my-5 md:w-[80%] dark:bg-gray-800" />
      </div>
    </Layout>
  )
}

export default PushingBound
