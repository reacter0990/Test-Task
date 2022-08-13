import React from 'react'
import Product from '../../Product/Product';
import {CartItemSet, CartItemsGet} from '../../funtions';
import { getCartItemsArray } from '../../../Navbar/functions';


const ToggleItems = () => {
  
    return (
        <>
            <li className='w-full h-toggle-items flex mb-10'>
                <div className='info-and-selection w-60% h-full py-2 flex'>
                    <div className='info w-90% h-full'>
                        <h5 className='item-name h-12% w-full text-16px text-Raleway flex justify-start items-center font-light'></h5>
                        <h5 className='item-title h-12% w-full text-14px text-Raleway flex justify-start font-light'></h5>
                        <h5 className='item-price h-20% w-full text-16px text-Raleway flex justify-start items-end leading-160% font-bold'></h5>
                        <h5 className='size-title h-15% w-full text-16px text-Raleway flex justify-start items-center leading-160% font-light'></h5>
                        <div className='size-buttons h-12% w-full flex justify-start'>
                            
                        </div>
                         <h5 className='color-title w-full h-18% text-16px text-Raleway flex justify-start items-center font-light'></h5>
                         <div className='color-selection h-10% w-full flex'>

                         </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ToggleItems