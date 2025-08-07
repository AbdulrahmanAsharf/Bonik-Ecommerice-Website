
import Tdates from './Tdate.js'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaBorderAll, FaCaretRight } from 'react-icons/fa'
import './Top.css'
function Top() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
    <>
        <section className='TopCate background'>
            <div className="container">
                <div className="heading d-flex">
                    <div className="heading-left row f-flex">
                        <i><FaBorderAll /></i>
                        <h2>Top Categories</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View All</span>
                        <i><FaCaretRight /></i>
                    </div>
                </div>
                    <Slider {...settings}>
                        {Tdates.map((product)=>{
                        return(
                            <div className="box product" key={product.id}>
                                <div className="nametop d-flex">
                                    <span className='tleft'>{product.para}</span>
                                    <span className='tright'>{product.desc}</span>
                                </div>
                                <div className="img">
                                    <img src={product.cover} alt="" />
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

export default Top
