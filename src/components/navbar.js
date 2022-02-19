import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5 shadow-md font-mono items-center z-20 bg-white h-[10vh]'>
      <Link to="/" className='font-black text-2xl'>PhamMinh.net</Link>
      <div className='md:hidden scale-125'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
      <div className='md:flex hidden'>
        <Link to='/' className='mx-5 cursor-pointer'>Home</Link>
        <Link to='/menu' className='mx-5 cursor-pointer'>Menu</Link>
        <Link to='/about' className='mx-5 cursor-pointer'>About</Link>
        <Link to='/contact' className='mx-5 cursor-pointer'>Contact</Link>
        <Link to='/' className='mx-5 flex text-orange-300 hover:scale-125 cursor-pointer transtion'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rung" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <p>Cart</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
