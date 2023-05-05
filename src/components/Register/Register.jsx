import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { updateProfile } from 'firebase/auth';
import { ChefContext } from '../../ChefProvider/ChefProvider';


const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { signUp } = useContext(ChefContext);
    const HandleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserData(user, name, photo);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                console.log('User name updated')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero py-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:ps-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Create a new account for explore auth master the coding universe for learn something.</p>
                </div>
                <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 rounded-3xl">
                    <form className="card-body pb-1" onSubmit={HandleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter email</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" name='email' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Your Photo</span>
                            </label>
                            <input type="text" placeholder="Your photo" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="relative input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-orange-400 border-0">Sign Up</button>
                        </div>
                    </form>
                    <label className="p-10">
                        <p className='text-center'>Already have an account ? <Link to="/login" className="text-blue-400 link link-hover">Login Now!</Link></p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Register;