import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../components/Home/Home'

   export const route = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/home',
                    element:<Home></Home>
                }
            ]
        },
        
    ]);
   