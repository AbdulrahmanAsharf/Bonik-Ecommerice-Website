import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./commentes/header/Header";
import './App.css';
import { useState } from "react";
import Home from "./commentes/Home/Home";
import Cart from "./commentes/Cart/Cart";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "./commentes/Footer/Footer";
function App() {
  const [Carts, SetCarts] = useState([])
  const addTocart = (product)=>{
    const exist =  Carts.find((x)=>{
      return x.id === product.id
    })
    if(exist){
      SetCarts(Carts.map((x)=>(x.id === product.id ?{...exist,qty:exist.qty+1}:x)))
      //toast.error("This Product Is Alleardy Added To Cart");
    }else{
      SetCarts([...Carts,{...product,qty:1 }])
      toast.success('Added To Cart');
    }
  }

  const decreaseQty = (product)=>{
    const productExit = Carts.find((cart) => cart.id === product.id)
    console.log(productExit)
    if(productExit.qty === 1){
      SetCarts(Carts.filter((cart) => cart.id !== product.id))
    }else{
      SetCarts(Carts.map((cart) => (cart.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : cart)))
    }
  }

  const removeCart = (product)=>{
    const exist =  Carts.find((x)=>{
      return x.id === product.id
    })
    if(exist.qty > 0){
      SetCarts(Carts.filter((cart)=>{
        return product.id !== cart.id
      }))
    }
    console.log(exist)
  }
  return (
    <BrowserRouter>
    <Toaster />
      <Header Carts={Carts}/>
      <Routes>
        <Route path="/" element={<Home addTocart={addTocart}/>}/>
        <Route path="cart" element={<Cart Carts={Carts} addTocart={addTocart} decreaseQty={decreaseQty} removeCart={removeCart}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
