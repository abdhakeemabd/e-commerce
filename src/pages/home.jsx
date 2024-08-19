import React from 'react'
import Navbar from '../component/navbar'
import Catagory from '../component/catagory'
import Offer from '../component/offer'
import AllProduct from '../component/all-product'

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
