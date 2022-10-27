import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';
import DisplayCourseList from '../DisplayCourseList/DisplayCourseList';
import './CourseDetails.css';

const CourseDetails = () => {
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
                            <button className="btn btn-primary mt-2">BUY NOW</button>

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

export default CourseDetails;