import React from 'react';
import PreviewUnits_Lg from './PreviewUnits/PreviewUnits_Lg';
import PreviewUnits_Sm from './PreviewUnits_Sm/PreviewUnits_Sm';
import { GetViwedProduct } from '../functions';

import './Preview.css';
import Buttons from './Buttons/Buttons';

function Preview() {
  
  let product = GetViwedProduct();
   
  return (
    <div className="preview-container w-full 2xl:px-20 xl:px-20 lg:px-16 md:px-16 sm:px-6" >
      <div className='preview w-full flex 2xl:h-2xl-preview-page 
     xl:h-xl-preview-page lg:h-lg-preview-page md:h-md-preview-page sm:h-sm-preview-page h-xs-preview-page 2xl:mt-10 xl:mt-10 lg:mt-5
     md:mt-0 sm:mt-0 mt-3'>
        <div className="preview-items 2xl:w-70% xl:w-70% lg:w-70% md:w-80% sm:w-70% w-70% h-full flex">
          <div className="picture-icons 2xl:w-12% xl:w-10% lg:w-10% h-full 2xl:block xl:block lg:block md:hidden sm:hidden hidden overflow-y-auto">
               {product.gallery.map((image) => (<PreviewUnits_Lg image={image}/>))}    
          </div>
          <div className="image 2xl:w-90% xl:w-87% lg:w-90% md:w-90% sm:w-90% w-95% h-full 2xl:pr-12 xl:pr-12 lg:pr-6 2xl:pl-6
        xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 pl-1 ">
            <img src={product.gallery[0]} alt="" className='w-full h-full object-contain scale-20' />
          </div>
        </div>
        <div className="selection-items 2xl:w-30% xl:w-30% lg:w-30% md:w-40% sm:w-40% w-40% h-full flex 2xl:justify-start
      xl:justify-start lg:justify-start md:justify-start sm:justify-start">
          <div className="selection-tems-container 2xl:w-80% xl:w-80% lg:w-80% md:w-80% sm:w-80% w-full h-full 2xl:pl-4 xl:pl-4 lg:pl-4 md:pl-4 sm:pl-4 pl-0">
            <div className="name-and-title w-full h-17%">
              <h1 className='item-name w-full h-40% flex justify-start 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg
            2xl:items-end xl:items-end lg:items-end md:items-center sm:items-center items-center text-Raleway font-black font-bold'>{product.id}</h1>
              <h1 className='item-title w-full h-40% flex justify-start 2xl:text-2xl xl:text-lg lg:text-base 
            md:text-sm sm:text-select-sm text-7px 2xl:items-center xl:ites-center lg:items-center md:items-center sm:items-center items-center text-Raleway'>{product.name}</h1>
            </div>
            <div className="selection-buttons w-full h-50%">
              <div className="size-title w-full h-10%">
                <h1 className='size-title-text w-full h-full flex justify-start items-end 2xl:pb-2 xl:pb-2 
              lg:pb-1 md:pb-0 sm:pb-0 pb-0 2xl:text-2xl xl:text-2xl lg:text-lg md:text-base sm:text-sm text-14px'>SIZE:</h1>
              </div>
              <div className="size-buttons w-full h-30%">
                <div className="size-buttons h-70% 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full
              w-full flex justify-start">
                    {product.attributes[0].items.map((size) => (
                      
                      <Buttons size={size}/>)
                    
                    )}  
                </div>
              </div>
              <div className="color-and-title w-full h-50%">
                <h1 className='color-title-text w-full h-20% flex justify-start items-center 2xl:text-2xl xl:text-2xl 
              lg:text-lg md:text-base sm:text-sm text-14px'>COLOR</h1>
                <div className="colors flex 2xl:h-20% xl:h-20% lg:h-20% md:h-20% sm:h-20% h-30% 2xl:mt-3 xl:mt-3 lg:mt-3
              md:mt-3 sm:mt-3 mt-1">
                  <button className="color h-full 2xl:w-9% xl:w-10% lg:w-9% md:w-9% sm:w-9% w-15% bg-items-light"></button>
                  <button className="color h-full 2xl:w-9% xl:w-10% lg:w-9% md:w-9% sm:w-9% w-15% ml-2 bg-items-dark"></button>
                  <button className="color h-full 2xl:w-9% xl:w-10% lg:w-9% md:w-9% sm:w-9% w-15% ml-2 bg-items-green"></button>
                </div>
                <h1 className='w-full h-50% flex justify-start items-end size-title-text 2xl:text-2xl xl:text-2xl 
              lg:text-lg md:text-base sm:text-sm text-10px'>PRICE:</h1>
              </div>
            </div>
            <div className="confirm w-full h-33%">
              <h1 className='w-full h-20% Raleway flex justify-start font-bold 2xl:text-2xl xl:text-2xl 
              lg:text-lg md:text-base sm:text-sm text-10px'>{product.prices[0].currency.symbol + ' ' + product.prices[0].amount}</h1>
              <button className='add-to-card-button w-full h-40% mt-4 bg-green-button text-white font-bold 2xl:text-2xl xl:text-xl lg:text-lg 
            md:text-base sm:text-sm text-sm'>ADD TO CARD</button>
            </div>
          </div>
        </div>
      </div>
      <div className="items-icons-sm 2xl:hidden xl:hidden lg:hidden md:flex sm:flex flex h-70px 
    2xl:px-3 xl:px-2 lg:px-2 md:px-4 sm:px-2 px-1 relative overflow-x-auto">
        <div className="items-icon-container h-full w-auto flex">
          {product.gallery.map((image) => (<PreviewUnits_Sm image={image}/>))}
          
        </div>
      </div>
      <div className="link-container w-full flex 2xl:px-20 xl:px-20 lg:px-20 md:px-5 sm:px-2 px-0 2xl:mt-0 xl:mt-0 md:mt-0 sm:mt-4
    mt-2">
        <div className='2xl:w-70% xl:w-70% 2xl:block xl:block lg:hidden'></div>
        <div className="link 2xl:w-30% xl:w-30% lg:w-full md:w-full sm:w-full w-full flex justify-end hover:underline decoration-1 lg:flex lg:justify-center 2xl:pt-0 xl:pt-0 lg:pt-2">
          <a className='w-full 2xl:px-12 xl:px-8 lg:px-8 2xl:text-14px xl:text-12px lg:text-10px md:text-10px sm:text-10px text-title-preview hover:cursor-pointer
      sm:text-title-preview'>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</a>
        </div>
      </div>
    </div>
    
  )
}

export default Preview