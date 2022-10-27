import React, { useEffect, useState } from 'react';
import DisplayCourseList from '../DisplayCourseList/DisplayCourseList';

const CourseList = () => {
   const [courseList,setCourseList] = useState('');
   useEffect(()=>{

    fetch('http://localhost:5000/courses')
    .then(res => res.json())
    .then(data => setCourseList(data));
   },[]);
   console.log(courseList);
    return (
        <div>
            {
                // courseList?.map(course => <DisplayCourseList
                // key={course?.id}
                // course={course}
                // >
                // </DisplayCourseList>)
            }
        </div>
    );
};

export default CourseList;