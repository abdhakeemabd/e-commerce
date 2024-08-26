import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer pb-0 pt-0'>
      <div className="footer-top">
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
          <ul className='footer-contact'>
          <Link className='text-decoration-none' to={"/"}> <li > Home</li></Link>
          <Link className='text-decoration-none' to={"/about"}><li>Mens</li></Link>
          <Link className='text-decoration-none' to={"/service"}><li>Female</li></Link>
          <Link className='text-decoration-none' to={"/protfolio"}><li>Kids</li></Link>
          <Link className='text-decoration-none' to={"/contact"}><li>Ladies</li></Link>
          </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
          <ul className='footer-contact'>
          <Link className='text-decoration-none' to={"/"}> <li > Home</li></Link>
          <Link className='text-decoration-none' to={"/about"}><li>Mens</li></Link>
          <Link className='text-decoration-none' to={"/service"}><li>Female</li></Link>
          <Link className='text-decoration-none' to={"/protfolio"}><li>Kids</li></Link>
          <Link className='text-decoration-none' to={"/contact"}><li>Ladies</li></Link>
          </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0 border-left">
          <ul className='footer-contact'>
          <Link className='text-decoration-none' to={"/"}> <li > Home</li></Link>
          <Link className='text-decoration-none' to={"/about"}><li>Mens</li></Link>
          <Link className='text-decoration-none' to={"/service"}><li>Female</li></Link>
          <Link className='text-decoration-none' to={"/protfolio"}><li>Kids</li></Link>
          <Link className='text-decoration-none' to={"/contact"}><li>Ladies</li></Link>
          <Link className='text-decoration-none' to={"/contact"}><li>Ladies</li></Link>
          <Link className='text-decoration-none' to={"/contact"}><li>Ladies</li></Link>
          </ul>
          </div>
          <div className="col-lg-3 col-md-6">
          <h6 className="fw-bold">Contact</h6>
         <ul className='contact-right'>
         <li>
            <div className="">
              <a>Dicto Technologies <br />
                Vilayil (PO) <br />
                Malappuram (DT) <br />
                Kerala, India
                673641
              </a>
            </div>
          </li>
          <li>
              <div className="">
              <a className='d-block text-decoration-none' href="+91 98460 07257">+91 98460 07257</a>
              </div>
          </li>
          <li>
              <div className="">
              <a className='d-block text-decoration-none' href="mailto:dictotechnologies@gmail.com">dictotechnologies@gmail.com</a>
              <a className='d-block text-decoration-none' href="#">info@dictotechnologies.com</a>
              </div>
          </li>
         </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div>
          <div className="col-12">
            <div className='py-2 '>©2024 Dicto Technologies | All Rights Reserved |Privacy Policy</div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
