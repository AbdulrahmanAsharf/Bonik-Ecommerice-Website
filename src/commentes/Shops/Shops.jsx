/* eslint-disable react/prop-types */
import  { useState } from 'react'
import { FaAngleRight, FaPlus, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import './Shops.css'
import Sdata from './Sdata'
import ShopCart from './ShopCart'
import { CiHeart } from 'react-icons/ci'
function Shops({addTocart}) {
    const [count, setCount] = useState(0)
    const increment = () => {
    setCount(count + 1)
    }
    return (
    <>
        <section className='shop background'>
            <div className="container d-flex">
                <div className="category">
                    <div className="chead d-flex">
                        <h1>Brands </h1>
                        <h2>Shops </h2>
                    </div>
                    {Sdata.map((product)=>{
                        return(
                            <div key={product.id} className="box f-flex">
                                <img src={product.cateImg} alt="" />
                                <span>{product.cateName}</span>
                            </div>
                        )
                    })
                    }
                    <div className='box box2'>
                        <button>View All Brands</button>
                    </div>
                </div>
                <div className="contentWidth">
                    <div className="heading d-flex">
                        <div className="heading-left row f-flex">
                            <h2>Mobile Phones</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i><FaAngleRight /></i>
                        </div>
                    </div>
                    <div className="product-content grid1">
                        {ShopCart.map((cart)=>{
                            return(
                                <div key={cart.id} className="box">
                                    <div className="product mtop" >
                                        <div className="img">
                                            <span className='discount'>{cart.discount}% Off</span>
                                            <img src={cart.cover} alt='' />
                                            <div className="product-like">
                                                <label>{count}</label> <br />
                                                <i onClick={increment}><CiHeart /></i>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <h3>{cart.name}</h3>
                                            <div className="rate">
                                                <i><FaStar /></i>
                                                <i><FaStar /></i>
                                                <i><FaStar /></i>
                                                <i><FaStar /></i>
                                                <i><FaStarHalfAlt /></i>
                                            </div>
                                            <div className="price">
                                                <h4>${cart.price}.00 </h4>
                                                <button onClick={()=>addTocart(cart)}>
                                                    <i><FaPlus /></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Shops
