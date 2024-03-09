import React from 'react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="font-dm max-w-container mx-auto bg-red-300 py-8">
        <div className="flex">
          <div className="w-2/5">
            <img src={logo} alt="" />
          </div>
          <ul className="flex w-3/5 gap-12 capitalize justify-center">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contacts</li>
            <li>journel</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar