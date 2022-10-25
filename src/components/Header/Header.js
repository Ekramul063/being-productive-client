import React from 'react';
import Navbar from '../Navbar/Navbar';
import banner from '../../asets/images/banner.jpg';
import banner2 from '../../asets/images/banner2.jpg';
import banner3 from '../../asets/images/banner3.jpg';
import banner4 from '../../asets/images/banner4.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='header-slider'>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner} className="w-full slider-img" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full slider-img" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full slider-img" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={banner4} className="w-full slider-img" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='slider-text '>
                <h3 className='font-bold text-3xl leading-9 widest'>THE BEST SOLUTION</h3>
                <h4 className='font-semi-bold text-xl leading-8'>TO CREATE AND SELL ONLINE COURSE</h4>
                <p className='text-semi-bold'>Make your self productive and contribute to develope own the nation</p>

            </div>

        </div>
    );
};

export default Header;