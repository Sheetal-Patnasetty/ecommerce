import React from 'react'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ProductList from './Pages/ProductList'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Pages/Cart'

export default function App() {
  return (
    <>
      <Home/>
      <Register/>
      <Login/>
      <ProductList/>
      <SingleProduct/>
      <Cart/>
    </>
  )
}
