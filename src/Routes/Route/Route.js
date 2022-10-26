import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../components/Home/Home'
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Courses from '../../components/Courses/Courses';

   export const route = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    loader: async () => {
                        return fetch(`http://localhost:5000/courses`);
                      },
                    element:<Home></Home>
                },
                {
                    path:'/courses',
                    loader: async (params) => {
                        return fetch(`http://localhost:5000/courses`);
                      },
                    element:<Courses></Courses>
                },
                {
                    path:'/course/:id',
                    loader: async (params) => {
                        return fetch(`http://localhost:5000/course/${params.id}`);
                      },
                    element:<CourseDetails></CourseDetails>
                },
                
            ]
        },
      
        
    ]);
   