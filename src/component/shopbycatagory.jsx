import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
function ShopByCatagory() {
  return (
    <div>
      <section className='categories-sec-1 pb-0'>
        <div className="container">
          <div className="row px-5">
            <div className="col-12 px-3">
              <h6 className='mb-3'>Shop by Top Categories</h6>
            </div>
              <div className="d-flex flex-wrap px-3">
                <div className='me-3'>
                  <a href="">Men</a>
                </div>
                <div className='ms-3'>
                  <a href="">Men</a>
                </div>
                <div className='ms-3'>
                  <a href="">Men</a>
                </div>
                <div className='ms-3'>
                  <a href="">Men</a>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className='shop-by-catagories-sec'>
        <div className="container">
        <Accordion className='px-5'>
        <Accordion.Item eventKey="0">
           <Accordion.Header>Men</Accordion.Header>
           <Accordion.Body>
           <li>
             <Link to='/product-details'> sharts </Link>
           </li>
           <li>
              <Link to='/product-details'> Pants </Link>
            </li>
           <li>
              <Link to='/product-details'> T-shart </Link>
            </li>
           <li>
              <Link to='/product-details'> Showes </Link>
            </li>
           <li>
              <Link to='/product-details'> Shorts </Link>
            </li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Women</Accordion.Header>
            <Accordion.Body>
            <li>
             <Link to='/product-details'> sharts </Link>
           </li>
           <li>
              <Link to='/product-details'> Pants </Link>
            </li>
           <li>
              <Link to='/product-details'> T-shart </Link>
            </li>
           <li>
              <Link to='/product-details'> Showes </Link>
            </li>
           <li>
              <Link to='/product-details'> Shorts </Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Kids & Baby</Accordion.Header>
            <Accordion.Body>
            <li>
             <Link to='/product-details'> sharts </Link>
           </li>
           <li>
              <Link to='/product-details'> Pants </Link>
            </li>
           <li>
              <Link to='/product-details'> T-shart </Link>
            </li>
           <li>
              <Link to='/product-details'> Showes </Link>
            </li>
           <li>
              <Link to='/product-details'> Shorts </Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Gifts</Accordion.Header>
            <Accordion.Body>
            <li>
             <Link to='/product-details'> sharts </Link>
           </li>
           <li>
              <Link to='/product-details'> Pants </Link>
            </li>
           <li>
              <Link to='/product-details'> T-shart </Link>
            </li>
           <li>
              <Link to='/product-details'> Showes </Link>
            </li>
           <li>
              <Link to='/product-details'> Shorts </Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Digital Products</Accordion.Header>
            <Accordion.Body>
            <li>
             <Link to='/product-details'> sharts </Link>
           </li>
           <li>
              <Link to='/product-details'> Pants </Link>
            </li>
           <li>
              <Link to='/product-details'> T-shart </Link>
            </li>
           <li>
              <Link to='/product-details'> Showes </Link>
            </li>
           <li>
              <Link to='/product-details'> Shorts </Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
      </section>
    </div>
  )
}

export default ShopByCatagory
