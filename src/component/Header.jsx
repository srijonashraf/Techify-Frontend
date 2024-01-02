import React from "react";
import {Link} from "react-router-dom";
import AppNavbar from "./AppNavbar.jsx";

const Header = () => {
    return (
        <div className="main-wrapper">
            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <div className="welcome-text text-center text-lg-start">
                                    <p className="mb-0">World Wide Completely Free Returns and Shipping</p>
                                </div>
                            </div>
                            <div className="col d-none d-lg-block text-end">
                                <div className="top-nav">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Link to="tel:0123456789" className="text-decoration-none">
                                                <i className="fa fa-phone"></i> +012 3456 789
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="mailto:demo@example.com" className="text-decoration-none">
                                                <i className="fa fa-envelope"></i> demo@example.com
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-decoration-none">
                                                <i className="fa fa-user"></i> Account
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom d-none d-lg-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-3 col">
                                <div className="header-logo text-center text-lg-start">
                                    <Link to="/" className="text-decoration-none">
                                        <h2 className="text-white mb-0">Techify</h2>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="search-element text-center rounded-1">
                                    <form action="#">
                                        <input type="text" placeholder="Search"/>
                                        <button type="submit" className="btn rounded-1">
                                            <i className="fa-solid fa-magnifying-glass text-white"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col text-end">
                                <div className="header-actions">
                                    <Link
                                        to="#offcanvas-wishlist"
                                        className="header-action-btn offcanvas-toggle text-decoration-none"
                                    >
                                        <i className="fa-regular fa-heart"></i>
                                    </Link>
                                    <Link
                                        to="#offcanvas-cart"
                                        className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0 text-decoration-none"
                                    >
                                        <i className="fa-solid fa-cart-plus"></i>
                                        <span className="header-action-num">0</span>
                                    </Link>
                                    <Link
                                        to="#offcanvas-mobile-menu"
                                        className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none text-decoration-none"
                                    >
                                        <i className="pe-7s-menu"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AppNavbar/>
            </header>
        </div>
    );
};

export default Header;
