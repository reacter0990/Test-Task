import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import ToggleItems from './ToggleItems/ToggleItems';
import {CartItemSet, CartItemsGet, checkIsEmptyArray,
SetToggleItems} from '../funtions';
import { getCartItemsArray } from '../../Navbar/functions';

const Toggle = () => {
   
  checkIsEmptyArray();
  
  let navigate = useNavigate();  
  
  
  const ItemsList = () => {

    return(
      <ul className='cart-items-list w-full h-full flex flex-col overflow-auto'></ul>
    )
      
  }
  
  
  const EmptyList = () => {

    return(
     <div className='empty-list w-full h-full flex justify-center items-center'>
          No Items yet start add some
     </div>
    )
  }

  useEffect(() => {
    
     SetToggleItems();

  })



  return (
    <div className="card-toogle absolute h-toggle 2xl:w-toggle-lg xl:w-toggle-lg lg:w-toggle-lg
    md:w-toggle-lg sm:w-toggle-sm w-toggle-sm bg-white top-0 2xl:right-10% xl:right-10% 
            lg:right-10% md:right-10% sm:right-10% right-0 z-100 hidden">
      <div className="toggle-storage w-full h-80% pl-5 pr-3 pt-10 overflow-hidden">
        <div className="title w-full h-10% flex">
          <h5 className='h-50% w-25% text-Raleway font-bold text-16px leading-160%'>My Bag,</h5>
          <h5 className='items-quantity h-50% w-30% pr-8 text-Raleway'>3 items</h5>
        </div>
        <div className="card-selected-products h-full w-full pb-5">
             <ItemsList/> <EmptyList/>
        </div>
      </div>
      <div className="toggle-buttons h-20% px-3 pb-10">
        <div className="total-price-info w-full h-30% flex justify-between pt-2">
          <h5 className='text-16px text-Roboto'>Total:</h5>
          <h5 className='summ text-16px text-Roboto'></h5>
        </div>
        <div className="view-and-checked-btn h-80% w-full flex items-center">
          <button className='h-50% w-48% border-2 border-black mr-2' onClick={() => {
            navigate('/cart-items')
          }}>VIEW BAG</button>
          <button className='h-50% w-48% bg-green-button ml-2 text-white'
            >CHECK OUT</button>
        </div>
      </div>
    </div>
  )
}

export default Toggle