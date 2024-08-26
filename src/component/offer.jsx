import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../assets/images/offer/offer1.jpg'
import Banner2 from '../assets/images/offer/offer2.jpg'
import Banner3 from '../assets/images/offer/offer3.jpg'
import Banner4 from '../assets/images/offer/offer4.jpg'
import '../assets/style/public.css'
function Offer() {

const data = [
  {
    img: Banner1,
  },
  {
    img: Banner2,
  },
  {
    img: Banner3,
  },
  {
    img: Banner4,
  },
];
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    loop: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current)
  };
  return (
    <div>
      <section>
        <div className="container">
        <div className="banner-cover">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="banner-slide">
                  <div className={`banner-content ${currentSlide === index ? 'active' : ''}`}>
                    <h1 className="text-xl-semibold">{d.name}</h1>
                    <h1 className="text-xl-semibold">{d.name1}</h1>
                  </div>
                  <img src={d.img} alt={d.name} className="offer-img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offer
