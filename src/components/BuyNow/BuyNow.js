
import React from 'react';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import './BuyNow.css';

const BuyNow = () => {
    const course = useLoaderData();

    return (
        <div>
            <div className="course-detail-row mb-10">
                <div className="sidebar">
                </div>


                <div className="content">

                    <div className="details-card flex flex-wrap">
                        <div className='course-img'>
                            <img src={course.thumbnail} alt="" />
                            <h2 className='text-3xl font-bold mt-5'>{course.title}</h2>
                            <div className="font-bold mt-2">Total Class: {course.classes}</div>
                            <div className="font-bold mt-2">Course Fee: {course.price} Taka</div>
                            <div className="font-bold mt-2">Class duration: {course.duration} hours</div>
                            <div className='flex gap-5 mt-5'>
                                <FaCcMastercard className='text-6xl cursor-pointer'></FaCcMastercard>
                                <FaCcVisa className='text-6xl cursor-pointer'></FaCcVisa>
                            </div>
                           

                        </div>
                        <div className='course-content'>
                            <h3 className='text-3xl font-semi-bold  mb-5'>OVERVIEW</h3>
                            <p className='font-semi-bold pb-5'>{course.details}</p>
                            <hr />
                           
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default BuyNow;