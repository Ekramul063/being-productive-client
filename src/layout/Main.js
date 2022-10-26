import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Outlet>
             <Home></Home>
            </Outlet>
           
        </div>
    );
};

export default Main;