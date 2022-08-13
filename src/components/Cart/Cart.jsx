import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import FillProducts from './FillProducts/FillProducts';
import Image from '../Assets/b5e3087a92bcdb9503e38bbf905ae3a0.png'
import { GetTotalPrice } from '../Products/funtions';
import { getCartItemsArray } from "../Navbar/functions";


const Cart = ({items}) => {
  
  const navigate = useNavigate();

  useEffect(() => {
    
     GetTotalPrice();
        
  });

  const EmptyCart = () => (
    <>
      <h1 className='text-slate-700'> No Items get start add some</h1> <a href="" className='pl-2'
        onClick={() => {
          navigate('/');
        }}>Click here</a>
    </>
  )

  if (items);

  return (
    <div className='w-full pb-20'>
      <div className='2xl:h-card-storage-xs xl:h-card-storage-xs 
    lg:h-card-storage-xs md:h-card-storage-xs sm:h-card-storage-xs 
    h-card-storage-extra 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-16 px-2'>
        <div className="cart-title w-full h-full flex justif-start items-center">
          <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-3xl hover:cursor-default'>Category name</h1>
        </div>
      </div>
      <div className="empty-contet h-auto w-full flex justify-center items-center text-slate-700 flex-col
    2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-3">
        {items == 0 ? <EmptyCart /> :
          items.map((product) => (<FillProducts key={product.id} items={product} />))}
      </div>
      <div className="total-tax-title w-full flex justify-start pt-10 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:px-5 pl-5">
        <h1 className='text-Raleway 2xl:text-3xl xl:text-3xl lg:text-3xl
                md:text-3xl sm:text-2xl text-base font-normal'>Tax 21%:</h1>
        <h1 className='text-Raleway 2xl:text-3xl xl:text-3xl lg:text-3xl
                md:text-3xl sm:text-2xl text-base ml-6 font-bold'>$200</h1>
      </div>
      <div className="total-tax-title w-full flex justify-start 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:px-5 pl-5">
        <h1 className='text-Raleway 2xl:text-3xl xl:text-3xl lg:text-3xl
                md:text-3xl sm:text-2xl text-base font-normal'>Quantity:</h1>
        <h1 className='cart-quantity-title text-Raleway 2xl:text-3xl xl:text-3xl lg:text-3xl
                md:text-3xl sm:text-2xl text-base ml-5 font-bold'></h1>
      </div>
      <div className="total-tax-title w-full flex justify-start 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:px-5 pl-5">
        <h1 className='text-Raleway 2xl:text-3xl xl:text-3xl lg:text-3xl
                md:text-3xl sm:text-2xl text-base font-normal'>Total:</h1>
        <h1 className='cart-total-price text-Raleway 2xl:text-3xl xl:text-3xl lg:text-3xl
                md:text-3xl sm:text-2xl text-base ml-9 font-bold'></h1>
      </div>
      <div className="button flex justify-start 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:px-5 pt-10 pl-5">
        <button className='2xl:w-300px 2xl:h-60px xl:w-300px xl:h-60px lg:w-300px lg:h-60px 
        md:w-300px md:h-60px sm:w-300px sm:h-60px h-40px w-150px bg-green-button text-white text-Raleway 2xl:text-2xl
        xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl'>ORDER</button>
      </div>
    </div>
  )
}

export default Cart