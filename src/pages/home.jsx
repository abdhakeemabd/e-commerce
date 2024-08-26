import React from 'react'
import Navbar from '../component/navbar'
import Offer from '../component/offer'
import AllProduct from '../component/all-product'
import Catagory from '../component/catagory'
import Footer from '../component/footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Catagory/>
      <Offer/>  
      <AllProduct/>
      <Footer/>
    </div>
  )
}

export default Home
