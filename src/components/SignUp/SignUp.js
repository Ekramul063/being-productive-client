import React from 'react';
import './SignUp.css'
import { FaGithubSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
    }

    return (
        <div className='from-container'>

            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                <form onSubmit={handleSignUp} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary" >Sign Up</button>
                    </div>

                </form>

                <p className='text-center font-bold text-base '>OR</p>
                <hr />
                <div className=''>
                    <p className='text-center font-bold text-base my-3'>Sign In With</p>
                    <div className="flex justify-center gap-3 items-center">
                        <FaGithubSquare className='text-5xl  cursor-pointer text-purple'></FaGithubSquare>
                        <FaGoogle className='text-4xl cursor-pointer'></FaGoogle>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;