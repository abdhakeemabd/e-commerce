import React from 'react'
import Pro1 from '../assets/images/all-product/1.webp'
import { FaMoneyCheck } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

function Orderconform() {
  return (
    <div>
      <section className='order-conform-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-12 mb-3">
                        <h5 className='bg-black text-white px-3 text-uppercase fw-medium py-2 rounded-3'>Order Summary</h5>
                        </div>
                        <div className="col-md-3 col-10 mb-3">
                          <img className='pro-img' src={Pro1} alt="" />
                        </div>
                        <div className="col-md-9 mb-3 mt-md-3">
                            <h6>COTTON ZARI KURTI</h6>
                            <p>Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolore. tur adipisicing elit. Minus, cupiditate.</p>
                            <span className='line-through me-4 fs-14 text-mute'>₹ 9999</span>
                            <span className='fw-bold'>₹ 208</span>
                           <div className='mt-3 mb-3'>
                           <span className='bg-l-mute rounded-3 px-2 fs-12 py-1'>Free Delivary </span>
                           </div>
                           <button className='bg-black px-3 rounded-3 py-2 fs-14 text-white'>Pay ₹ 208</button>
                        </div>
                        <div className="col-md-12">
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

export default Orderconform
