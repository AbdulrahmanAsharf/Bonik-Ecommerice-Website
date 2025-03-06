import React from 'react'
import Categories from './Categories'
import SliderHome from './SliderHome'
import Flash from '../Flash/Flash'
import Top from '../Top/Top'
import NewArrivals from '../NewArrivals/NewArrivals'
import Discount from '../Discount/Discount'
import Wrapper from '../Wrapper/Wrapper'
import Annocument from '../Annocument/Annocument'
import Shops from '../Shops/Shops'

function Home({addTocart}) {
    return (
    <>
        <section className='home'>
            <div className='container d-flex'>
                <Categories />
                <SliderHome />
            </div>
        </section>
        <Flash addTocart={addTocart}/>
        <Top />
        <NewArrivals />
        <Discount />
        <Shops   addTocart={addTocart} />
        <Annocument />
        <Wrapper />
    </>
    )
}

export default Home
