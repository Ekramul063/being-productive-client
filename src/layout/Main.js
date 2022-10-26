import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Outlet>
             <Home></Home>
            </Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Main;