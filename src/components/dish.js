import React from 'react'
import Stars from '../components/stars'
import food1 from '../images/egg-2.jpeg'

const Dish = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-orange-400 to-orange-500 h-96 grid grid-rows-6 rounded-md'>
        <div className= 'row-span-4'>
          <img src={food1} 
          className='w-full h-full object-cover rounded-tl-md rounded-tr-md'
          />
        </div>
        <div className='flex justify-between items-center px-2 text-white'>
          <div>Thơm ngon, bổ dưỡng</div>
          <div>$16</div>
        </div>
        <div className='flex items-center justify-between px-2'>
        <div className=''>
          <Stars/>
        </div>
        <button type="button" class="buttonStyle">Order now</button>
        </div>
      </div>
    </div>
  )
}

export default Dish
