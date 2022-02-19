import React from 'react'
import contactMapImg from '../images/contact-map.jpg'

const Contact = () => {
  return (
    <div className='bg-[#FBE6E7] absolute top-0 left-0 right-0 bottom-0 h-fit -z-10'>
    <div className='py-24 min-h-screen'>
    <div className='md:w-11/12 lg:w-5/6 w-full mx-auto'>
        <div className='font-semibold text-3xl mb-5 md:text-left text-center'>CONTACT US</div>
        <div className='grid grid-cols-3 bg-white h-56'>
            <div className='grid grid-rows-6 p-5'>
                <div className='row-span-1 flex items-end font-black'>LANDMARKIT</div>
                <div className='row-span-3 row-start-3 capitalize grid grid-rows-3 lg:text-sm text-xs'>
                    <div>17 tân thịnh, thái nguyên, thái nguyên</div>
                    <div>vàng danh, uông bí, quảng ninh</div>
                    <div>thanh trì, hà nội</div>
                </div>
            </div>
            <div className='grid grid-cols-6'>
                <div className='col-span-1 grid grid-rows-3 p-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 row-span-1 row-start-2 text-[#5cf776]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 row-span-1 row-start-3 my-auto text-[#5cf776]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                </div>
                <div className='grid grid-rows-3 p-5 col-span-5'>
                <div className='row-span-2 col-span-5 row-start-2 grid grid-rows-3 text-sm'>
                    <div>0789338359</div>
                    <div>0565521047</div>
                    <div className='text-[#5cf776]'>happyfood@gmail.com</div>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-40 w-40 text-[#01896f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </div>
        <div className='mt-10 grid grid-cols-5 gap-x-10'>
            <div className='col-span-3 grid grid-rows-6 gap-y-4'>
                <div className='row-span-2 grid lg:grid-cols-2 grid-cols-1 gap-x-4'>
                    <div className='grid grid-rows-2 lg:gap-y-4'>
                        <input type="text" className='bg-white outline-none p-4 lg:focus:outline-none lg:focus:ring lg:focus:ring-violet-300 lg:focus:bg-white focus:bg-slate-200' placeholder='name:'/>
                        <input type="text" className='bg-white outline-none p-4 lg:focus:outline-none lg:focus:ring lg:focus:ring-violet-300 lg:focus:bg-white focus:bg-slate-200' placeholder='Email:'/>
                    </div>
                    <div className='grid grid-rows-2 lg:gap-y-4'>
                        <input type="text" className='bg-white outline-none p-4 lg:focus:outline-none lg:focus:ring lg:focus:ring-violet-300 lg:focus:bg-white focus:bg-slate-200' placeholder='Company:'/>
                        <input type="text" className='bg-white outline-none p-4 lg:focus:outline-none lg:focus:ring lg:focus:ring-violet-300 lg:focus:bg-white focus:bg-slate-200' placeholder='Phone:'/>
                    </div>
                </div>
                <div className='row-span-4 bg-white'>
                <textarea name="Text1" cols="40" rows="6" placeholder='Message:' className='bg-white h-full w-full outline-none p-4 lg:focus:outline-none lg:focus:ring lg:focus:ring-violet-300 lg:focus:bg-white focus:bg-slate-200'></textarea>
                </div>
            </div>
            <div className='bg-orange-100 col-span-2'>
                <img src={contactMapImg} alt="map" className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='w-full mt-3 grid grid-cols-5 gap-x-10'>
            <div className='col-span-3 mx-auto'>
                <button className='buttonStyle'>Send message</button>
            </div>
            <div className='col-span-2 flex justify-end gap-x-0'>
                <div
                className='w-10 rounded-sm h-10 flex justify-center items-center mx-2 bg-[#4267B2] text-white cursor-pointer'
                ><i class="fa-brands fa-facebook-f"></i></div>
                <div
                className='w-10 rounded-sm h-10 flex justify-center items-center mx-2 bg-[#1DA1F2] text-white cursor-pointer'
                ><i class="fa-brands fa-twitter"></i></div>
                <div
                className='w-10 rounded-sm h-10 flex justify-center items-center mx-2 bg-[#db4a39] text-white cursor-pointer'
                ><i class="fa-brands fa-google-plus-g"></i></div>
                <div
                className='w-10 rounded-sm h-10 flex justify-center items-center mx-2 bg-[#2867B2] text-white cursor-pointer'
                ><i class="fa-brands fa-linkedin-in"></i></div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact