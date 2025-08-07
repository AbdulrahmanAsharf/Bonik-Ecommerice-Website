
import "./Wrapper.css"
import { FaTruckFast } from "react-icons/fa6"
import { FaCcMastercard, FaHeadset } from "react-icons/fa"
import { IoShieldHalfSharp } from "react-icons/io5"

const Wrapper = () => {
    const data = [
    {
        cover: <i ><FaTruckFast /></i>,
        title: "Worldwide Delivery",
        decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
        cover: <i><FaCcMastercard /></i>,
        title: "Safe Payment",
        decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
        cover: <i ><IoShieldHalfSharp /></i>,
        title: "Shop With Confidence ",
        decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
        cover: <i ><FaHeadset /></i>,
        title: "24/7 Support ",
        decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    ]
    return (
    <>
        <section className='wrapper background'>
            <div className='container grid2'>
            {data.map((product) => {
            return (
                <div className='product' key={product.id}>
                    <div className='img icon-circle'>
                        <i>{product.cover}</i>
                    </div>
                    <h3>{product.title}</h3>
                    <p>{product.decs}</p>
                </div>
            )
            })}
            </div>
        </section>
    </>
    )
}

export default Wrapper