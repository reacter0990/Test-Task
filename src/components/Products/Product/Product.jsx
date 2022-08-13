import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import { OnCardOver, OnCardOut, ShowButtons, HideButtons } from './functions';
import { CartItemSet, SetToggleItems } from '../funtions';
import { SetViwedProduct } from '../../functions';
import { setCartItemArray } from '../../Navbar/functions';
import {AddToggleItems} from '../funtions'

const Product = ({ product }) => {

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  let lenght = 0;


  for (const iterator of product.gallery) {
    ++lenght;
  }

  return (
    <div className='card 2xl:h-card xl:h-card lg:h-card-sm md:h-card sm:h-card h-card hover:scale-105 hover:bg-white hover:drop-shadow-2xl rounded transition'
      onMouseOver={(e) => {

        OnCardOver(e.currentTarget);
        if (lenght > 1) { ShowButtons(e.currentTarget) }

      }} onMouseOut={(e) => {

        OnCardOut(e.currentTarget);
        HideButtons(e.currentTarget);

      }}>
      <div className='card-image w-full h-80% 2xl:p-5 xl:p-5 lg:p-3 md:p-5 sm:p-5 p-5 relative '>
        <img src={product.gallery[index]} className='product-image w-full h-full object-contain z-0' onClick={() => {
          SetViwedProduct(product)
          navigate('/preview');
        }} />
        <button className='button-left absolute left-0 top-40% h-40px w-40px ml-3 hidden' onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className='button-right absolute right-0 top-40% h-40px w-40px mr-3 hidden' onClick={() => {
          if (index < lenght - 1) {
            setIndex(index + 1);
          }
        }}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button className='add-to-card absolute h-add-card-btn w-add-card-btn bg-white
         2xl:top-85% xl:top-86% lg:top-86% md:top-86% sm:top-85% top-85% right-10% bg-lime-500 rounded-full hover:bg-lime-400 z-20
         hidden' onClick={() => {
            CartItemSet(product);
            setCartItemArray(product);
            AddToggleItems(product);
            SetToggleItems();
          }}>
          <FontAwesomeIcon icon={faCartShopping} className='text-white' />
        </button>
      </div>
      <div className='card-content w-full h-20% pl-5'>
        <h1 className='product-title w-full h-20% flex justify-start items-end'>{product.brand}</h1>
        <h5 className='product-price w-full h-20% flex justify-start'>{product.prices[0].currency.symbol + ' ' + product.prices[0].amount}</h5>
      </div>
    </div>
  )
}

export default Product