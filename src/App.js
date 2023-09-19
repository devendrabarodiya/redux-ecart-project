import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import ProfilePage from './components/Profile';
import Product from './components/Products';
import Cart from './components/Products/cart';
import Shipping from './components/Products/shipping';
import Checkout from './components/Products/checkout';
import ThanksPage from './components/Products/thanksPage';
// import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  // const myState = useSelector((state) => state.userRegistrations )
  // console.log("state", myState)
  return (
    <Routes>
    <Route exact path='/' element={<RegisterForm />} /> 
    <Route exact path='/login' element={<LoginForm />} />    
    <Route exact path='/profile' element={<ProfilePage />} />
    <Route exact path='/product' element={<Product />} />
    <Route exact path='/cart' element={<Cart />} />
    <Route exact path='/shipping' element={<Shipping />} />
    <Route exact path='/checkout' element={<Checkout />} />
    <Route exact path='/thanks' element={<ThanksPage />} />
   
  </Routes>
  )
}

export default App