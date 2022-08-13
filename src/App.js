import { Navbar, Products, Cart, Preview } from './components';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getCartItemsArray } from './components/Navbar/functions';
import './App.css';

const GET_LOCATIONS = gql`
  query Query {
    categories{
      __typename
       name
      products{
        id
        name
        inStock
        description
        gallery
        category
        brand
        attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
       prices{
        currency{
          label
          symbol
        }
        amount
      }
      }
    }
  }
`;


function App() {

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <div className="App 2xl:container m-auto">

        <Navbar categories={data.categories} />
        <Routes>
          <Route path='/' element={

            <Products
              products={data.categories[0].products}
            />
          }
          />
          <Route path='/cart-items' element={<Cart items={getCartItemsArray()}/>} />
          <Route path='/preview' element={
            <Preview/>
          } />
        </Routes>
    </div>
  );
}

export default App;
