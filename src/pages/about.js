import React from 'react'
import About1 from '../images/about1.jpg'
import About2 from '../images/about2.jpg'

const About = () => {
  return (
    <>
    <div className='absolute top-0 left-0 right-0 bottom-0 -z-10 bg-[#FBE6E7]'></div>
    <div className='grid md:grid-cols-4 grid-cols-1 p-6'>
        <div className='bg-[#FFB7B1] h-[470px] col-span-2 flex justify-center items-center rounded-tl-md xl:p-52 lg:p-36 md:p-20 p-20'>
            <div className='font-semibold text-white md:text-2xl text-xl'>Chào mừng bạn đến với <span className='text-red-500 text-3xl'>H</span>APPY FOOD. Nơi bạn dễ dàng để có một bữa ăn thoải mái và phù hợp nhất với bạn.</div>
        </div>
        <div className='bg-[#FFB7B1] h-[470px] col-span-2 relative'>
            <img src={About1} className='h-full w-full object-cover' />
            <span className='absolute bottom-12 -right-2 rotate-90 uppercase font-semibold flex cursor-pointer'> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -rotate-90 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            Donate</span>
        </div>
        <div className='bg-[#FFBEE2] h-[470px] flex justify-center items-center'>
            <h1 className='lg:text-7xl font-semibold md:-rotate-90 text-5xl'>About us</h1>
        </div>
        <div className='bg-white h-[470px] col-span-2 flex justify-center items-center p-5'>
            <span className='font-light sm:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem corrupti voluptatum, in aut id, quia nisi facilis neque illum pariatur optio exercitationem sed. Dolorem vero at minus! Error, earum! <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat laborum est voluptatum cupiditate, porro qui sequi ad natus, reprehenderit sint veritatis pariatur dicta perferendis eaque libero maiores nihil, nostrum dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga fugit adipisci sunt ullam vero illum eveniet deserunt quidem veritatis accusamus. Excepturi nihil modi necessitatibus recusandae consectetur temporibus, illo vero laborum.</span>
        </div>
        <div className='bg-[#F66554] h-[470px] hidden md:block'></div>
        <div className='bg-[#FFB7B1] h-80 col-span-2'>
            <img src={About2} className='w-full h-full object-cover'/>
        </div>
        <div className='bg-[#7870D4] h-80 col-span-2 pt-7 px-7 flex md:items-end items-center pb-3'>
            <span className='font-light sm:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam vel nostrum magni? Nemo dolor quibusdam adipisci iste assumenda! Esse cumque labore ratione voluptate laboriosam, optio impedit rem est possimus ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore dolor. Veritatis nam enim laborum tempore provident odio a itaque impedit, quos vitae? Temporibus veniam ullam odit reiciendis ipsum exercitationem.</span>
        </div>
    </div>
    </>
  )
}

export default About
