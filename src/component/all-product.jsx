import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import PropTypes from 'prop-types'; 
import Img1 from '../assets/images/all-product/1.webp'
import Img2 from '../assets/images/all-product/2.webp'
import Img3 from '../assets/images/all-product/3.webp'
import Img4 from '../assets/images/all-product/4.webp'
import Img5 from '../assets/images/all-product/5.webp'
import Img6 from '../assets/images/all-product/6.webp'
import Img7 from '../assets/images/all-product/7.webp'
import Img8 from '../assets/images/all-product/8.webp'
import Img9 from '../assets/images/all-product/9.webp'
import Img10 from '../assets/images/all-product/10.webp'
import Img11 from '../assets/images/all-product/11.webp'
import Img12 from '../assets/images/all-product/12.webp'
import Img13 from '../assets/images/all-product/13.webp'
import Img14 from '../assets/images/all-product/14.webp'
import Img15 from '../assets/images/all-product/15.webp'
import Img16 from '../assets/images/all-product/16.webp'
import { Link } from 'react-router-dom';




const products = [
  {
    id: 1,
    name: 'Women Beautiful Multicolored Mysore Silk Saree with Blouse piece',
    image: Img1,
    price: '340',
    discount: '18% off',
    url:'/product-details'
  },
  {
    id: 2,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img2,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 3,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img3,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 4,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img4,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 5,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img5,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 6,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img6,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 7,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img7,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 8,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img8,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 9,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img9,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 10,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img10,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 11,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img11,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 12,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img12,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 13,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img13,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 14,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img14,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },  {
    id: 15,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img15,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
  {
    id: 16,
    name: 'Elegant Cotton Dress with Floral Print',
    image: Img16,
    price: '250',
    discount: '10% off',
    url:'/product-details'
  },
];

function AllProduct() {
  return (
    <div>
      <section className='all-product-sec'>
        <div className="container">
            <div className="row">
              {products.map(product => (
                <div className="col-md-3 mb-3" key={product.id}>
                   <Link className='text-black text-decoration-none' to={product.url}>
                    <div className="card-item">
                        <div className="img-card position-relative overflow-hidden">
                            <img className='product-img' src={product.image} alt={product.name} />
                        </div>
                        <div className="cont px-2 py-1 mt-3">
                            <p className='fs-12 truncate-1'>{product.name}</p>
                            <div className="d-flex justify-content-between">
                                <div className="text-black">
                                    <span>{product.price}</span>
                                    <span className='text-green ms-2'>{product.discount}</span>
                                </div>
                                <Link to={product.url}>
                                <div className='shop bg-black'>
                                  <FiShoppingCart className='text-white' />
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
AllProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
  }))
};

export default AllProduct;
