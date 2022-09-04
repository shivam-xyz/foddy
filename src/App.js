import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import BillingPage from './pages/BillingPage'
import SuccessOrder from './pages/SuccessOrder'
import FailedOrder from './pages/FailedOrder'
// import LogInPage from './pages/LogInPage'
import RegisterPage from './pages/RegisterPage'
// import ForgotPage from './pages/ForgotPage'
// import AddressPage from './pages/AddressPage'
import OrderTrackingPage from './pages/OrderTrackingPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/foddy' element={<HomePage/>}/>
        <Route exact path='/menu/:vid' element={<MenuPage/>}/>
        <Route exact path='/cart' element={<CartPage/>}/>
        <Route exact path='/billing' element={<BillingPage/>}/>
        <Route exact path='/success' element={<SuccessOrder/>}/>
        <Route exact path='/failed' element={<FailedOrder/>}/>
        <Route exact path='/tracker' element={<OrderTrackingPage/>}/>
        <Route exact path='/register' element={<RegisterPage/>} />
      </Routes>
    </Router>
  )
}

export default App

