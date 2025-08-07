
import "./NewArrivals.css"
import { FaCaretRight } from "react-icons/fa"
import Ndatas from "./Ndate"
const NewArrivals = () => {
    return (
    <>
        <section className='NewArrivals background'>
        <div className='container'>
            <div className='heading d-flex'>
                <div className='heading-left row  f-flex'>
                    <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                    <h2>New Arrivals </h2>
                </div>
                <div className='heading-right row '>
                    <span>View all</span>
                    <i ><FaCaretRight /></i>
                </div>
            </div>
            <div className="content grid product">
                {Ndatas.map((product)=>{
                    return (
                        <div className="box" key={product.id}>
                            <div className="img">
                                <img src={product.cover} alt="" />
                            </div>
                            <h4>{product.name}</h4>
                            <span>${product.price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        </section>
    </>
    )
}

export default NewArrivals