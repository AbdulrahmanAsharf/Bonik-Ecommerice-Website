//import React from 'react'
import { FaAngleRight, FaBolt, FaChevronLeft, FaHeart, FaPlus, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import  products from './Data';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from 'react';
const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i ><FaAngleRight /></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const {onClick} = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i> <FaChevronLeft /></i>
      </button>
    </div>
  )
}
function Flash({addTocart}) {

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <section className='flash'>
        <div className="container">
          <div className="heading f-flex">
            <i><FaBolt /></i>
            <h1>Flash Delas</h1>
          </div>
          <Slider {...settings}>
          {products.map((product) => {
            return (
              <div className='box' key={product.id}>
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">{product.discount} %off</span>
                    <img src={product.cover} alt="" />
                    <div className="product-like">
                      <label>{count}</label> <br />
                      <i><FaHeart onClick={increment} /></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <div className="rate">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStarHalfAlt /></i>
                    </div>
                    <div className="price">
                      <h4>${product.price}.00</h4>
                      <button><i><FaPlus onClick={()=>addTocart(product)} /></i></button>
                    </div>
                  </div>
                </div> 
              </div>
            )
            })
          }
          </Slider>
        </div>
      </section>    
    </>
  )
}

export default Flash
