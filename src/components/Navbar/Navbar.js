import React, { useContext, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../asets/images/logo.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Navbar.css';

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = event => {
        event.preventDefault();
        logOut()
    }
    return (
        <div>

            <div className="navbar bg-purple-400 py-4">
                <div className="navbar-start">
                    {/* mobile menu start */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/courses'}>Courses</Link></li>
                            <li><Link to={'/faq'}>FAQ</Link></li>
                            <li><Link to={'blogs'}>Blogs</Link></li>
                            <li>

                                {
                                    user?.uid ?
                                        <Link onClick={handleSignOut} to={'/signin'} className="btn mr-3">Sign Out</Link>
                                        :
                                        <>
                                            <Link to={'/signin'} className="btn mr-3 mb-4 mt-2">Sign In</Link>
                                            <Link to={'/signup'} className="btn mr-3">Sign Up</Link>
                                        </>

                                }


                            </li>

                        </ul>
                    </div>
                    {/* mobile-menu end*/}

                    <Link to={'/'}>
                        <div className='btn btn-ghost normal-case d-none '>
                            <img style={{ height: "30px" }} src={logo} alt="" />
                            <span className='text-lg font-bold'>Being Productive</span>
                        </div>
                    </Link>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/courses'}>Courses</Link></li>
                        <li><Link to={'/faq'}>FAQ</Link></li>
                        <li><Link to={'blogs'}>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='d-none'>
                        {
                            user?.uid ?
                                <Link onClick={handleSignOut} to={'/signin'} className="btn mr-3">Sign Out</Link>
                                :
                                <>
                                    <Link to={'/signin'} className="btn mr-3">Sign In</Link>
                                    <Link to={'/signup'} className="btn mr-3">Sign Up</Link>
                                </>

                        }

                    </div>


                    {
                        dark ?
                            <a className="btn" onClick={() => setDark(false)}>Dark</a>
                            :
                            <a className="btn" onClick={() => setDark(true)}>Light</a>
                    }

                    {
                        user?.photoURL ?
                            <img title={user?.displayName} className='mx-3 cursor-pointer' style={{ height: '45px', borderRadius: '100%' }} src={user.photoURL} alt="" />
                            :
                            <FaUserCircle title={user?.displayName} className='cursor-pointer text-3xl mx-3'></FaUserCircle>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;