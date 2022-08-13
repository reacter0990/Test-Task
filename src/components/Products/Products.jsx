import React, { useState, useEffect } from 'react'
import Product from './Product/Product';
import Toggle from './Toggle/Toggle';
import { CartItemsGet, SetToggleItems } from './funtions';



const Products = ({ products }) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(CartItemsGet());
    SetToggleItems();
  });

  return (
    <div className='products-storage w-full relative z-10'>
      <Toggle/>
      <div className='h-category-text-sm flex justif-start items-center 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-20 sm:pl-20 pl-10'>
        <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-3xl hover:cursor-default'>Category name</h1>
      </div>
      <main className='w-full flex justify-center items-center 2xl:p-20 xl:p-20 lg:p-16 md:p-16 sm:p-10 p-2'>
        <div className='w-full h-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2
               sm:grid-cols-2 grid-cols-1 gap-7'>
          {products.map((product) => (
            <div item key={product.id} className={product.category + " " + '2xl:h-card-storage xl:h-card-storage lg:h-card-storage-sm ' +
              'md:h-card-storage sm:h-card-storage h-card-storage 2xl:px-5 xl:px-2 lg:px-0 md:px-0 sm:px-0 px-0 hover:cursor-pointer'}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Products