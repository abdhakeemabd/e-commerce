import React from 'react'
import State from '../component/state'
import { Link } from 'react-router-dom'

function Delivery() {
  return (
    <div>
      <section className='delivary-sec'>
        <div className="container">
           <div className="row justify-content-center">
            <div className="col-md-8">
                <h5 className='mb-3 fw-bold'>Delivary Address</h5>
                <div className="delivary-cont-card form">
                   <div className="row">
                   <div className="col-md-6 mb-3">
                      <label className='mb-2' htmlFor="Name">First Name</label>
                      <input className='form-control' type="text" name="First name" id="First-name" placeholder='Enter Your First Name'/>                  
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className='mb-2' htmlFor="Name">Last Name</label>
                      <input className='form-control' type="text" name="Last name" id="last-name" placeholder='Enter Your Last Name'/>                  
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className='mb-2' htmlFor="Name">Mobile number</label>
                      <input className='form-control' type="text" maxLength="10" minLength="10" name="mobile number" id="mobile number" placeholder='Enter 10-digit mobile number'/>                  
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className='mb-2' htmlFor="Name">Pincode</label>
                      <input className='form-control' type="text" maxLength="6" minLength="6" name="pincode" id="pincode" placeholder='Enter Pincode'/>                  
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className='mb-2' htmlFor="Name">Locality</label>
                      <input className='form-control' type="text" name="locality" id="locality" placeholder='Enter Locality'/>                  
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className='mb-2' htmlFor="Name">City</label>
                      <input className='form-control' type="text" name="city" id="city" placeholder='Enter city/Town'/>                  
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className='mb-2' htmlFor="Name">District</label>
                      <input className='form-control' type="text" name="District" id="District" placeholder='Enter District'/>                  
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className='mb-2' htmlFor="Name">State</label>
                      <State/>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className='mb-2' htmlFor="Name">Address (Area Streat)</label>
                      <textarea className='form-control' name="" id="" cols="0"placeholder='Enter Address (Area Streat)' rows="5"></textarea>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-start">
                            <Link className='text-black px-4 py-2 border-m  rounded-3 text-decoration-none' to="/product-details">Cancel</Link>
                            <Link className='text-white bg-black px-4 py-2 ms-5 rounded-3 text-decoration-none' to='/conform'>Next</Link>
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

export default Delivery
