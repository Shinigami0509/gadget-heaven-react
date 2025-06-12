import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import cart from '../../assets/shopping-cart.png'
import wishlist from '../../assets/wishlist.png'
import { getStoredCart, getStoredWishList } from '../../utility/addToDb';


const NavBar = () => {

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/statistics'>Statistics</Link></li>
        <li><Link to='dashboard'>Dashboard</Link></li>
    </>

    
    const { pathname } = useLocation()

    return (
        <div>
            <div className={`navbar bg-base-100 ${(pathname === '/') ? 'bg-[#9330E4] rounded-t-2xl' : ''}`}>
                <div className="navbar-start ml-20">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl" to='/'>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-2 mr-20">
                    <div className="relative">
                        <button className="btn btn-ghost btn-circle bg-white p-1">
                            <img className="w-3/4" src={cart} alt="Cart" />
                        </button>
                        {
                            getStoredCart().length ? <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {getStoredCart().length}
                            </span> : ''
                        }
                    </div>

                    <div className='relative'>
                        <button className="btn btn-ghost btn-circle bg-white p-1">
                            <img className='w-3/4' src={wishlist} alt="" />
                        </button>
                        {
                            getStoredWishList().length ? <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {getStoredWishList().length}
                            </span> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;