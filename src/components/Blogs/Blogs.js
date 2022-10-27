import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mt-10'>
            <div className='blogs-container'>
                <h2 className='text-3xl font-semibold text-green-500 mb-3'> what is cors?</h2>
                <p className='text-red-400 font-semibold'>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API</p>
            </div>
            <div className='blogs-container'>
                <h2 className='text-3xl font-semibold text-green-500 mb-3'>Why are you using firebase? What other options do you have to implement authentication? </h2>
                <p className='text-red-400 font-semibold'>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Customize Your App. Build Fast For Any Device. Trusted by +200,000 Devs. Thats why i use firebase<br/>
                </p>
            </div>
            
            <div className='blogs-container'>
                <h2 className='text-3xl font-semibold text-green-500 mb-3'>How does the private route work? </h2>
                <p className='text-red-400 font-semibold'>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div className='blogs-container'>
                <h2 className='text-3xl font-semibold text-green-500 mb-3'> What is Node? How does Node work?</h2>
                <p className='text-red-400 font-semibold'>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
                <p className='text-red-400 font-semibold'></p>
            </div>
        </div>
    );
};

export default Blogs;