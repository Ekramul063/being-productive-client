import React from 'react';
import banner from '../../asets/images/banner.jpg';
import banner2 from '../../asets/images/banner2.jpg';
import banner3 from '../../asets/images/banner3.jpg';
import banner4 from '../../asets/images/banner4.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>


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
                        <div className='slider-text '>
                            <h3 className='font-bold lg:text-3xl md:text-2xl sm:text-normal leading-10 '>THE BEST SOLUTION</h3>
                            <h4 className='font-semi-bold sm:text-sm lg:text-xl text-normal mdleading-8'>TO CREATE AND SELL ONLINE COURSE</h4>
                            <p className='text-semi-bold'>Make different and reward your self</p>

                        </div>

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
            
            <div className='slider-text '>
                <h3 className='font-bold lg:text-3xl md:text-2xl sm:text-normal lg:leading-10 sm:leading-4'>THE BEST SOLUTION</h3>
                <h4 className='font-semi-bold sm:text-sm lg:text-xl text-normal mdleading-8'>TO CREATE AND SELL ONLINE COURSE</h4>
                <p className='text-semi-bold'>Make different and reward your self</p>
            </div>

           
               


               

            </div>
          

        </div>
    );
};

export default Header;