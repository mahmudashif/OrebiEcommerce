import React from 'react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="font-dm max-w-container mx-auto py-8">
        <div className="flex">
          <div className="w-2/5">
            <img src={logo} alt="" />
          </div>
          <ul className="text-[#767676] text-lg flex w-3/5 gap-12 capitalize justify-center">
            <li className=' hover:text-[#262626]'>home</li>
            <li className=' hover:text-[#262626]'>shop</li>
            <li className=' hover:text-[#262626]'>about</li>
            <li className=' hover:text-[#262626]'>contacts</li>
            <li className=' hover:text-[#262626]'>journel</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar