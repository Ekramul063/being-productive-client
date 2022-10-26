import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayCourses.css';

const DisplayCourses = ({ course }) => {
    const { title, price, classes, duration, thumbnail, id } = course;
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">

                <Link to={'/home'}>
                    <figure>

                        <img className='home-thumbnail' src={thumbnail} alt="thumbnail" />
                    </figure>
                </Link>
                <div className="card-body">
                    <Link to={`/course/${id}`}>
                        <h2 className="card-title hover:text-sky-700 hover:underline	 ">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </Link>
                    <div className="card-actions justify-between mt-4">
                        <div className="badge badge-outline w-72  ">Course Fee: {price} Taka</div>
                        <div className="badge badge-outline w-72  ">Class duration: {duration} hours</div>
                        <div className="badge badge-outline w-72  ">Total Class: {classes}</div>
                        <div className="badge badge-outline w-72  font-bold py-5 mt-3 bg-blue-700 text-white ">Enroll</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DisplayCourses;