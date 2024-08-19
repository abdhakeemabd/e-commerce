import React from 'react'
import '../assets/style/catagory.css'
import { Link } from 'react-router-dom'

function Catagory() {
  return (
    <div>
      <div className='catagory-sec'>
        <div className="container">
             <div className="catagory-items">
                    <nav>
                        <ul className='d-flex text-decoration-none m-0 p-0 justify-content-around'>
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
                </div>
        </div>
      </div>
    </div>
  )
}

export default Catagory
