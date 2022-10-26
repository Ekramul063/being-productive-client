import React, { useContext } from 'react';
import './SignUp.css'
import { FaGithubSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const SignUp = () => {

    const { signUp, signINWithGoole } = useContext(AuthContext);

    const googleSignIn = event => {
        event.preventDefault();
        signINWithGoole(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error.message))
    }
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password, name)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user)
            })
            .catch(error => console.error(error))
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
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
                        <FaGoogle onClick={googleSignIn} className='text-4xl cursor-pointer'></FaGoogle>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;