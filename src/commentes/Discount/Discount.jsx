import React from "react"
import { FaCaretRight } from "react-icons/fa"
import Ddata from "./Ddate"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../NewArrivals/NewArrivals.css'
const Discount = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
    <>
        <section className='Discount background NewArrivals'>
            <div className='container'>
                <div className='heading d-flex'>
                    <div className='heading-left row  f-flex'>
                        <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                        <h2>Big Discounts</h2>
                    </div>
                    <div className='heading-right row '>
                        <span>View all</span>
                        <i ><FaCaretRight /></i>
                    </div>
                </div>
                <Slider {...settings}>
                {Ddata.map((product)=>{
                    return(
                        <div className="box product" key={product.id}>
                            <div className="img">
                                <img src={product.cover} alt="" width='100%' />
                            </div>
                            <h4>{product.name}</h4>
                            <span>{product.price}</span>
                        </div>
                    )
                })}
                </Slider>
            </div>
        </section>
    </>
    )
}

export default Discount