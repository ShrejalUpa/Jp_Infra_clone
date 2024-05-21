import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-around items-center'>
          <div>
            <NavLink to=''>North Barcelona</NavLink>
          </div>
          <div>
            <NavLink to='unitytowers'>Unity Towersa</NavLink>
          </div>
        </nav>
        <hr className="w-[80%] h-1 mx-auto my-5 bg-gray-800 border-0 rounded md:my-5 md:w-[80%] dark:bg-gray-800" />
    </div>

  )
}

export default Header
