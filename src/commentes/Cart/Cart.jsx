import React from 'react'
import './Cart.css'
import { FaPlus, FaXmark } from 'react-icons/fa6'
import { FiMinus } from 'react-icons/fi'
function Cart({Carts , addTocart , decreaseQty , removeCart}) {
    const totalPrice = Carts.reduce((price, cart) => price + cart.qty * cart.price, 0)
    return (
    <>
        <section className='cart-items'>
            <div className="container d-flex">
                <div className="cart-details">
                    {Carts.length === 0 &&  <h1 className='no-items product'>No Items are add in Cart</h1> }
                    {Carts.map((cart)=>{
                        const productQty = cart.price * cart.qty
                        return (
                            <div className="product d-flex" key={cart.id}>
                                <div className="img">
                                    <img src={cart.cover} alt="" />
                                </div>
                                <div className="cart-details">
                                    <h3>{cart.name}</h3>
                                    <h4>
                                        ${cart.price}.00 * {cart.qty}
                                        <span>${productQty}.00</span>
                                    </h4>
                                </div>
                                <div className="cart-items-function">
                                    <div className="removeCart">
                                        <button className='removeCart' onClick={()=>removeCart(cart)}>
                                            <i><FaXmark /></i>
                                        </button>
                                    </div>
                                    <div className="cartControl d-flex">
                                        <button className='incCart' onClick={() => addTocart(cart)} >
                                            <i><FaPlus  /></i>
                                        </button>
                                        <button className='desCart' onClick={() =>decreaseQty(cart)}>
                                            <i><FiMinus /></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-item-price"></div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-total  product">
                <h2>Cart Summary</h2>
                    <div className=' d-flex'>
                        <h4>Total Price :</h4>
                        <h3>${totalPrice}.00</h3>
                    </div>
                </div>
            </div>
        </section>
        
    </>
    )
}

export default Cart
