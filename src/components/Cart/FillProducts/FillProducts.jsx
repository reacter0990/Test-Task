import React from 'react'
import { useState } from 'react';
import Image from '../../Assets/b5e3087a92bcdb9503e38bbf905ae3a0.png';
import './FillProducts.css'

const FillProducts = ({items}) => {

    const [count, setCount] = useState(1);

  return (
    <>
    <div className="items w-full h-auto">
      <ul className='w-full h-auto 2xl:py-8 xl:py-8 lg:py-8 md:py-8 sm:py-2 border-b-2 border-border-color-gray'>
        <li className='w-full h-auto 2xl:py-5 xl:py-5 lg:py-5 md:py-5 sm:py-2 py-3 pr-2 border-t-2 border-border-color-gray mt-2'>
          <div className="item w-full flex h-auto 2xl:h-300px xl:h-300px lg:h-300px md:h-300px sm:h-300px h-200px 2xl:pl-20 
          xl:pl-20 lg:pl-20 md:pl-20 2xl:pr-32 xl:pr-32 lg:pr-32 md:pr-24 sm:px-5">
            <div className="selection 2xl:w-80% xl:w-78% lg:w-70% md:w-70% sm:w-70% w-70% h-full 
            flex flex-col 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-2 pl-3">
              <div className="item-name w-full h-20% flex justify-between">
                <h1 className='w-full h-full text-Raleway flex justify-start items-center 2xl:text-3xl xl:text-3xl lg:text-3xl
                md:text-3xl sm:text-2xl text-12px 2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 mr-1 font-extrabold'>{items.brand}</h1>
                <button className='add-item border border-black 2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 mr-1' onClick={() => {
                 setCount(count + 1)
                }}>+</button>
              </div>
              <div className="item-title w-full h-20%">
                <h1 className='w-full h-full text-Raleway flex justify-start 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-start
                2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-10px '>{items.name}</h1>
              </div>
              <div className="item-price w-full h-20%">
                <h1 className='w-full h-full text-Raleway not-italic flex justify-start items-end 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl font-bold'>{'$' + items.prices[0].amount}</h1>
              </div>
              <div className="size-title w-full h-20% flex justify-between items-center">
                <h5 className='size-text w-80% h-full flex justify-start items-end 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl font-bold'>SIZE:</h5>
                <h5 className='quantity text-Raleway 2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 mr-1 text-10px font-bold'>{count}</h5>
              </div>
              <div className="size-selection w-full h-20% ">
                <div className="size-buttons h-full 2xl:w-50% xl:w-50% lg:w-50% md:w-80% sm:w-full
              w-full flex justify-start items-center">
                  <button className='size-button h-full 2xl:w-60.4px xl:w-60.4px lg:w-60.4px md:w-60.4px sm:w-35px w-20px 2xl:border-2 xl:border-2 lg:border-1.5 
                md:border sm:border border border-black text-11px flex justify-center items-center font-bold
                2xl:text-lg xl:text-2xl lg:text-lg md:text-base sm:text-sm text-8px'>XS</button>
                  <button className='size-button h-full 2xl:w-60.4px xl:w-60.4px lg:w-60.4px md:w-60.4px sm:w-35px w-20px 2xl:border-2 xl:border-2 lg:border-1.5 
                md:border sm:border border border-black text-11px flex justify-center items-center font-bold 2xl:ml-2
                xl:ml-2 lg:ml-2 md:ml-2 sm:ml-2 ml-1 bg-black text-white
                2xl:text-2xl xl:text-2xl lg:text-lg md:text-base sm:text-sm text-8px'>S</button>
                  <button className='size-button h-full 2xl:w-60.4px xl:w-60.4px lg:w-60.4px md:w-60.4px sm:w-35px w-20px 2xl:border-2 xl:border-2 lg:border-1.5
                 md:border sm:border border border-black text-11px flex justify-center items-center font-bold 2xl:ml-2
                 xl:ml-2 lg:ml-2 md:ml-2 sm:ml-2 ml-1 ml-2 2xl:text-2xl xl:text-2xl lg:text-lg md:text-base sm:text-sm text-8px'>M</button>
                  <button className='size-button h-full 2xl:w-60.4px xl:w-60.4px lg:w-60.4px md:w-60.4px sm:w-35px w-20px 2xl:border-2 xl:border-2 lg:border-1.5
                 md:border sm:border border border-black text-11px flex justify-center items-center font-bold 2xl:ml-2
                 xl:ml-2 lg:ml-2 md:ml-2 sm:ml-2 ml-1 ml-2 2xl:text-2xl xl:text-2xl lg:text-lg md:text-base sm:text-sm text-8px'>L</button>
                </div>
              </div>
              <div className="color-title w-full h-20%">
                <h5 className='color-text w-full h-full flex justify-start items-end 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl font-bold'>COLOR</h5>
              </div>
              <div className="color-selection w-full h-20% flex justify-between items-center">
                <div className="buttons w-80% h-full flex justify-start">
                  <button className="color h-full w-47.5px bg-items-light"></button>
                  <button className="color h-full w-47.5px ml-2 bg-items-dark"></button>
                  <button className="color h-full w-47.5px ml-2 bg-items-green"></button>
                </div>
                <button className='add-item border border-black 2xl:pb-2 xl:pb-2 lg:pb-2 md:pb-2 sm:pb-1 pb-1 2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 mr-1' onClick={() => {
                  if(count > 1){
                    setCount(count - 1)
                  }
                }}>-</button>
              </div>
            </div>
            <div className="img 2xl:w-264px 2xl:min-w-264px 2xl:max-w-264px xl:w-264px 
             xl:min-w-264px xl:max-w-264px lg:w-264px lg:min-w-264px lg:max-w-264px
              md:w-264px md:min-w-264px md:max-w-264px sm:w-200px sm:min-w-200px sm:max-w-200px h-full">
              <img src={items.gallery[0]} alt="" className='object-contain' />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </>
  )
}

export default FillProducts