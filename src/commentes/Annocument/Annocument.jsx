import React from 'react'

function Annocument() {
    const mystyle = {
        width: "30%",
        height: "340px",
    }
    const mystyle1 = {
        width: "68%",
        height: "340px",
    }
    return (
    <>
        <section className='annocument background'> 
            <div className='container d-flex'>
                <div className="img" style={mystyle}>
                    <img src="../../../public/imgs/banner-1.png" width='100%' height='100%' />
                </div>
                <div className="img" style={mystyle1}>
                    <img src="../../../public/imgs/banner-2.png" width='100%' height='100%'  />
                </div>
            </div>
        </section>
    </>
    )
}

export default Annocument
