import React, { useEffect, useState } from 'react';
import DisplayCourseList from '../DisplayCourseList/DisplayCourseList';

const CourseList = () => {
   const [courseList,setCourseList] = useState([]);
   useEffect(()=>{

    fetch('https://being-productive-server.vercel.app/courses')
    .then(res => res.json())
    .then(data => setCourseList(data));
   },[]);
  
    return (
        <div className='mb-5'>
            {
                courseList?.map(course => <DisplayCourseList
                key={course?.id}
                course={course}
                >
                </DisplayCourseList>)
            }
        </div>
    );
};

export default CourseList;