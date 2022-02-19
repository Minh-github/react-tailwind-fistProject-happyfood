import React from 'react'
import backGroundImage from '../images/background.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <img src={backGroundImage} alt="backgroundImage"
          className='absolute top-0 left-0 right-0 bottom-0 opacity-80 -z-10 h-[110vh] w-full object-cover'
      />
      <div className='flex justify-center h-screen items-center'>
          <div className='lg:text-8xl text-6xl font-black first-letter:text-orange-600
          '>
          Happy Food
          <div className='text-2xl font-mono flex justify-center mt-9'>
          <Link to = '/menu' className='bg-orange-400 p-3 rounded-full select-none cursor-pointer hover:bg-orange-500 hover:text-white transition animate-bounce'>
              Get Order Now
          </Link>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Home
