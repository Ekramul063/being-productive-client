import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../components/Home/Home'
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Courses from '../../components/Courses/Courses';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import PageNotFound from '../../components/pageNotFound/PageNotFound';
import PrivateRoute from '../../context/PrivateRoute/PrivateRoute';
import Blogs from '../../components/Blogs/Blogs';
import BuyNow from '../../components/BuyNow/BuyNow';
import Faq from '../../components/Faq/Faq';


   export const route = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    loader: async () => {
                        return fetch(`https://being-productive-server.vercel.app/courses`);
                      },
                    element:<Home></Home>
                },
                {
                    path:'/courses',
                    loader: async (params) => {
                        return fetch(`https://being-productive-server.vercel.app/courses`);
                      },
                    element:<Courses></Courses>
                },
               
                {
                    path:'/course/:id',
                    loader: async ({params}) => {
                        return fetch(`https://being-productive-server.vercel.app/course/${params.id}`);
                      },
                    element:<CourseDetails></CourseDetails>
                },

                {
                    path:'/Buynow/:id',
                    loader: async ({params}) => {
                        return fetch(`https://being-productive-server.vercel.app/course/${params.id}`);
                      },
                    element:<PrivateRoute><BuyNow></BuyNow></PrivateRoute>
                },
                
                {
                    path:'/blogs',
                    element:<Blogs></Blogs>
                },
                {
                    path:'/faq',
                    element:<Faq></Faq>
                },
               
               
            ]
        },
        {
            path:'/signup',
           
            element:<SignUp></SignUp>
        },
        {
            path:'/signin', 
            element:<SignIn></SignIn>
        },
        
        {
            path:'*',
            element:<PageNotFound></PageNotFound>
        },
        
    ]);
   