import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { CheckCardToogle, setCartItemArray } from './functions';
import { onAllCategorySort, onClothesCategorySort, onTechCategorySort } from './Products_Filter';
import { AddToggleItems } from '../Products/funtions'

import './Navbar.css'

const Navbar = ({ categories }) => {

    let navigate = useNavigate();

    return (
        <div className='w-full h-navbar flex'>
            <div className="categoryes 2xl:w-30% xl:w-30% lg:w-30% md:w-30% sm:w-30% w-50% h-full flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-start justify-start 
            2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-6 pl-4">
                <ul className='2xl:w-80% xl:w-80% lg:w-80% md:w-80% sm:w-70% w-70% h-full flex'>
                    <li className='w-33% h-full flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center justify-center items-center
                2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xs-lg text-xs hover:cursor-pointer' onClick={() => {
                            onAllCategorySort()
                        }}>
                        {categories[0].name}
                    </li>
                    <li className='w-33% h-full flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center justify-center items-center
                 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xs-lg text-xs hover:cursor-pointer' onClick={() => {
                            onClothesCategorySort()
                        }}>
                        {categories[1].name}
                    </li>
                    <li className='w-33% h-full flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center justify-center items-center
                 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xs-lg text-xs hover:cursor-pointer' onClick={() => {
                            onTechCategorySort();

                        }}>
                        {categories[2].name}
                    </li>
                </ul>
            </div>
            <div className="icon 2xl:w-50% xl:w-50% lg:w-50% md:w-50% sm:w-50% w-10% h-full flex justify-center items-center
         2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs hover:cursor-pointer" onClick={() => {
                    navigate('/');
                }}>
                <figure className='w-20px h-20px bg-green-button'></figure>
            </div>
            <div className="cart 2xl:w-20% xl:w-20% lg:w-20% md:w-20% sm:w-20% w-40% h-full flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-end justify-end">
                <ul className='2xl:w-50% xl:w-50% lg:w-50% md:w-50% sm:w-50% w-50% h-full flex'>
                    <li className='w-50% h-full flex justify-center items-center 
                 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs'>
                        <select id="countries" className="text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full flex justify-center 
                       2xl:w-80% xl:w-80% lg:w-80% md:w-80% sm:w-full w-80%1 w-full 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs hover:cursor-pointer">
                            <option selected>$</option>
                            <option value="US">USD</option>
                            <option value="EU">EUR</option>
                            <option value="PD">GBP</option>
                        </select>
                    </li>
                    <li className='w-50% h-full flex justify-center items-center
                 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs hover:cursor-pointer' onClick={() => {
                            CheckCardToogle();
                        }}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar