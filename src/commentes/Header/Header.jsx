import React, { useState } from 'react';
import { FaBorderNone, FaChevronDown, FaPhone, FaSearch, FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Header.css';
import { Link } from 'react-router-dom';
import { IoMdClose} from 'react-icons/io';
import logo from '../../../public/imgs/logo/logo.svg';
import { CiShoppingCart } from 'react-icons/ci';
import { FiAlignJustify } from 'react-icons/fi';
function Header({Carts}) {
    const [MobileMenu, setMobileMenu] = useState(false);
    const Search = ({Carts}) => {
    //   // fixed Header
        window.addEventListener("scroll", function () {
            const search = document.querySelector(".search")
            search.classList.toggle("active", window.scrollY > 100)
        })
    }
    return (
        <>
            <section className='head'>
                <div className="container d-flex">
                    <div className="left row">
                        <i><FaPhone /></i>
                        <label >+8807 5454 5465</label>
                        <i><MdEmail /></i>
                        <label >info@yourdomain.com</label>
                    </div>
                    <div className="right row RText">
                        <label>THeme FAQ S</label>
                        <label >Need Helps</label>
                        <span>🏳️‍⚧️</span>
                        <label htmlFor="">EN</label>
                        <span>🏳️‍⚧️</span>
                        <label htmlFor="">USD</label>
                    </div>
                </div>
            </section>
            <section className='search'>
                <div className="container c-flex">
                    <div className="logo width">
                        <img src={logo} alt="" />
                    </div>
                    <div className="search-box f-flex">
                        <i><FaSearch /></i>
                        <input type="text" placeholder='search and hit enter...' />
                        <span>All Category</span>
                    </div>
                    <div className="icon width f-flex">
                        <i><FaUserCircle  className='icon-circle'/></i>
                        <div className="cart">
                            <Link to='/cart'>
                                <i><CiShoppingCart className='icon-circle' /></i>
                                <span>{Carts.length === 0 ? "" : Carts.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <header className='header'>
                <div className="container d-flex">
                    <div className="categories d-flex">
                        <span><FaBorderNone /></span>
                        <h4>Categories<i><FaChevronDown /></i></h4>
                    </div>
                    <div className="navlink">
                        <ul className={MobileMenu ?"nav-links-mobile": "link f-flex capitalize"} onClick={()=>setMobileMenu(false)}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/pages">Pages</Link>
                            </li>
                            <li>
                                <Link to="/user">user account</Link>
                            </li>
                            <li>
                                <Link to="/vendor">vendor account </Link>
                            </li>
                            <li>
                                <Link to='/track'>track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                        </ul>
                        <button onClick={()=>{setMobileMenu(!MobileMenu)}}>
                            {MobileMenu ? <IoMdClose className='close' /> :<FiAlignJustify  className='open'/>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header