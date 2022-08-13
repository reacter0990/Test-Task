import React from 'react'

const Buttons = ({size}) => {

   if(size.value.includes('#') == false){

       return (
           <>
               <button className='h-full w-24% 2xl:border-2 xl:border-2 lg:border-1.5 font-semibold
                   md:border sm:border border border-black text-11px flex justify-center items-center
                   2xl:text-2xl xl:text-2xl lg:text-lg md:text-base sm:text-sm text-8px'>{size.value}</button>
           </>
       )

    }
}

export default Buttons