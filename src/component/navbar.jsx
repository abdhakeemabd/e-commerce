import React from 'react'
import Logo from '../assets/images/logo/logo.png'
import '../assets/style/header.css'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <a href="/">
                        <img className='img-fluid' src={Logo} alt="" />
                    </a>
                </div>
                <div className="col-md-9">
                <div className="d-flex">
                {/* <form role="search" method="get" action="">
                  <div className="input-container">
                  		<input type="search" className="search-input" value="" name="s" placeholder="Search entire website..." />
                    <button type="submit" className="search-submit" name="submit"><i class="material-icons">search</i></button>
                  </div>
                </form> */}
                <div>
                    <ul className='d-flex mb-0'>
                       <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </ul>
                </div>
                <div className='chart d-flex align-items-center text-white'>
                  <FiShoppingCart />
                  <span className='ms-2'>chart</span>
                </div>
                <div className='whishes mb-0'>
                <FcLike />
                </div>
                </div>
                </div>
                {/* <div className="col-md-9">
                    <nav>
                        <ul className='d-flex text-decoration-none m-0 p-0'>
                            <li>
                                <Link to='./sharts'>Sharts</Link>
                            </li>
                            <li>
                                <Link to='./pants'>Pants</Link>
                            </li>
                            <li>
                                <Link to='./jens'>Jens</Link>
                            </li>
                            <li>
                                <Link to='./men'>Men</Link>
                            </li>
                            <li>
                                <Link to='./women'>Women</Link>
                            </li>
                        </ul>
                    </nav>
                </div> */}
            </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
