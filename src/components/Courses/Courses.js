import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCourses from '../DisplayCourses/DisplayCourses';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='container mx-auto my-10'>
            <h1 className='text-4xl text-center font-bold mb-10'>Our Courses</h1>
            <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                 courses.map(course =><DisplayCourses 
                    key={course.id}
                    course={course}
                 ></DisplayCourses> )
            }
            </div>
           
        </div>
            
        </div>
    );
};

export default Courses;