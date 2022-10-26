import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asets/images/logo.png'

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-purple-400 py-4">
                <div className="navbar-start">
                    {/* mobile menu start */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Courses
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Web Developement</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    {/* mobile-menu end*/}

                    <Link to={'/'}>
                        <div className='btn btn-ghost normal-case'> 
                            <img style={{ height: "30px" }} src={logo} alt="" /> 
                            <span className='text-lg font-bold'>Being Productive</span>
                        </div>
                    </Link>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/courses'}>Courses</Link></li>
                        <li><a>FAQ</a></li>
                        <li><Link to={'blogs'}>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to={'/signup'} className="btn mr-3">Sign Up</Link>
                    <a className="btn">Get started</a>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;