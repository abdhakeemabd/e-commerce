import React from 'react'
import Navbar from '../component/navbar'
import Offer from '../component/offer'
import AllProduct from '../component/all-product'
import Catagory from '../component/catagory'

function Home() {
  return (
    <div>
      <Navbar/>
      <Catagory/>
      <Offer/>  
      <AllProduct/>
    </div>
  )
}

export default Home
