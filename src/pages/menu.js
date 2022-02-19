import React from 'react'
import Dish from '../components/dish'
import PageNum from '../components/pageNum'


const Menu = () => {
  return (
    <div className='bg-[#FBE6E7] absolute top-0 left-0 bottom-0 right-0 h-fit -z-10'>
    <div className='py-24 grid gap-x-4 gap-y-6 mx-auto w-full sm:w-4/6 md:w-3/4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
    </div>
    <div className='flex justify-center'>
      <PageNum/>
    </div>
    </div>
  )
}

export default Menu
