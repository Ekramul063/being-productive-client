import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseList from '../components/CourseList/CourseList';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-between flex-wrap'>

                <div className="main-sidebar"> 
                    <CourseList></CourseList>
                </div>

                <div className="main-content">
                    <Outlet>
                        <Home></Home>
                    </Outlet>

                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;