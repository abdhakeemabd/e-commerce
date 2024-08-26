import React from 'react'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Product1 from '../assets/images/all-product/11.webp'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { BsLightningCharge } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

function ProductDetails1() {
  return (
    <div>
        <section className='prodcut-details'>
            <div className="container">
                 <div className="row justify-content-center">
                     <div className="col-md-6 mb-3 text-center">
                        <ReactFancyBox
                       thumbnail={Product1}
                         image={Product1}/>
                          <h6 class="mt-3">COTTON ZARI KURTI</h6>
                        <span className='fw-bold'>₹ 208</span>
                        <div className='mt-2 mb-1 text-center p-4'>
                        <button className='btn btn-chart me-3 px-4 py-2'><HiOutlineShoppingCart /> <span className='ms-1'>Add To Chart</span></button>
                        <button className='btn btn-buy ms-3 py-2 px-4'><BsLightningCharge className='a' /><span className='ms-1'>Buy Now</span></button>
                        </div>
                     </div>
                    <div className="col-md-6">
                      <div className="row">
                     <div className="col-md-12">
                        <div className="card px-3 box-shadow-none py-3">
                          <h4 className='fw-bold mb-3'>Select Size</h4>
                            <div className="d-flex">
                              <div className='sm-card'>
                                  <button className='btn'>M</button>
                              </div>
                              <div className='sm-card ms-3'>
                                  <button className='btn'>L</button>
                              </div>
                              <div className='sm-card ms-3'>
                                  <button className='btn'>X</button>
                              </div>
                              <div className='sm-card ms-3'>
                                  <button className='btn'>2X</button>
                              </div>
                            </div>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="product-details-cont p-4 mt-3 mb-3">
                            <h6>Product Details</h6>
                           <div className="fs-14">
                                <span className='fw-medium'>Fabric : </span>
                                <span className='ms-1'>Cotton</span>
                           </div>
                           <div className="fs-14">
                                <span className='fw-medium'>Type : </span>
                                <span className='ms-1'>Stitched</span>
                           </div>
                           <div className="fs-14">
                                <span className='fw-medium'>Style : </span>
                                <span className='ms-1'>Self Pattern</span>
                           </div>
                           <div className="fs-14">
                                <span className='fw-medium'>Design Type : </span>
                                <span className='ms-1'>A-Line</span>
                           </div>
                           <div className="fs-14">
                                <span className='fw-medium'> Occasion : </span>
                                <span className='ms-1'>Casual</span>
                           </div>
                           <div className="fs-14">
                                <span className='fw-medium'>Pack Of : </span>
                                <span className='ms-1'>Single</span>
                           </div>
                           <div className="fs-14">
                                <span className='fw-medium'>Country Of Origin : </span>
                                <span className='ms-1'>India</span>
                           </div>
                           <div className="fs-14">
                                <span className='fw-medium'>Design Type : </span>
                                <span className='ms-1'>A-Line</span>
                           </div>
                        </div>
                        <div className="card p-4 mb-3 border-0">
                            <h6>Product Description</h6>
                            <div className='fs-13'>Fancy Cotton Kurti for Women</div>
                        </div>
                        <div className="card p-4 border-0">
                            <h6>Delivery & Return Details</h6>
                            <div className='fs-13'><span>Delivery:</span> Within 6-10 business days</div>
                            <div className='fs-13'><span>Return:</span> within 7 days of delivery. Free reverse pickup. Full refund</div>
                        </div>
                        <div className="card border-0 mb-3 mt-4 p-4">
                            <div className="d-flex justify-content-between">
                              <div>
                              <FaMoneyCheck />
                                <span className='ms-3'>Secure Payments</span>
                              </div>
                              <div>
                              <FaShippingFast />
                              <span className='ms-3'>Free Shipping</span>
                              </div>
                              <div>
                              <HiOutlineArrowPathRoundedSquare />
                              <span className='ms-3'>Return & Refound</span>
                              </div>
                            </div>
                        </div>
                     </div>
                      </div>
                    </div>
                 </div>
            </div>
        </section>
    </div>
  )
}

export default ProductDetails1
