import React from 'react'
import './App.css'
import Home from './pages/home'
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Sharts from './pages/sharts'
import Pants from './pages/pants'
import Jens from './pages/jens'
import Men from './pages/men'
import Women from './pages/women'
import '../src/assets/boostrap/bootstrap.css'
import ProductDetails from './pages/product-details'
import ScrollToTop from './component/scroll-up'
import Catagories from './pages/catagories'
import Delivery from './pages/delivery'
import Orderconform from './pages/conform'

function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/sharts' element={<Sharts/>} />
        <Route path='/pants' element={<Pants/>} />
        <Route path='/jens' element={<Jens/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>}/>
        <Route path='/product-details' element={<ProductDetails/>} />
        <Route path='/catagories' element={<Catagories/>} />
        <Route path='/checkout' element={<Delivery/>} />
        <Route path='/conform' element={<Orderconform/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
