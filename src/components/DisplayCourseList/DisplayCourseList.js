import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCourseList = ({course}) => {
    return (
        <div className='mt-5'>
            <Link to={`/course/${course?.id}`} className="pb-2 text-base font-bold">{course?.title}</Link>
        </div>
    );
};

export default DisplayCourseList;