import React from 'react';
import ProductDetails1 from '../component/product-details1';
import AllProduct from '../component/all-product';
import Navbar from '../component/navbar';

function ProductDetails() {
  return (
    <div>
      <Navbar/> 
      <ProductDetails1/>
      <div className="container">
      <h4 className='text-center'>Related Products</h4>
      </div>
      <AllProduct/>
    </div>
  )
}

export default ProductDetails
