import React from 'react'

const MoveToTop = () => {

    const toTop = ()=>{
        document.documentElement.scrollTop = 0;
    }

  return (
    <div 
    className='toTop w-10 h-10 bg-orange-500 fixed z-40 bottom-14 right-5 flex justify-center items-center rounded-md hover:bg-orange-400 hover:text-white transition cursor-pointer'
    onClick={toTop}
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
    </div>
  )
}

export default MoveToTop
