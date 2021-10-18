import React from "react";
import Logo from "../../assets/Logo.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdClose, MdOutlineAccountCircle } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";
import "../../utilities/utilities.scss";

export default function Navbar({ sidebar, setSidebar }) {
    return (
        <>
            <nav className="header hide-for-mobile">
                <div className="container">
                    <div className="header__logo">
                        <img src={Logo} alt="" className="header__logo-img" />
                    </div>

                    <ul className="header__links">
                        <li><a href="/">Sell on Shopka</a></li>
                        <li><a href="/">Register</a></li>
                    </ul>

                    <div className="header__search hide-for-mobile">
                        <div>
                            <FiSearch className="searchIcon" />
                            <input
                                type="text"
                                className="header__search-input"
                                placeholder="Search"
                            />
                        </div>
                        <MdClose className="closeIcon" />
                    </div>

                    <div className="header__catygories">Consumer Electronics</div>

                    <ul className="header__userOptions hide-for-mobile">
                        <li><a href="/" className="btn btn-primary">sign in</a></li>
                        <li><a href="/" className="btn btn-secondary">my account</a></li>
                    </ul>
                </div>
            </nav>

            <nav className="nav hide-for-desktop">
                <div className="nav-left">
                    <div className="nav__toggle" onClick={() => setSidebar(!sidebar)}>
                        <FaBars className="nav__toggle-btn" />
                    </div>

                    <div className="nav__logo">
                        <img className="nav__logo-img" src={Logo} alt="" />
                    </div>
                </div>
                
                <ul>
                    <li><MdOutlineAccountCircle /></li>
                    <li><FiShoppingCart /></li>
                </ul>

                <div className="header__search">
                    <div>
                        <FiSearch className="searchIcon" />
                        <input
                            type="text"
                            className="header__search-input"
                            placeholder="Search"
                        />
                    </div>
                    <MdClose className="closeIcon" />
                </div>
            </nav>
        </>
    );
}
