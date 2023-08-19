import React from 'react';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const LoginHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
    }
    return (
        <>
            <div className='bg-gray-200 h-[100vh]'>
                <form onSubmit={LoginHandler} className='flex flex-col justify-center items-center p-10 pt-[10%]'>
                    <div>
                        <label className='block mb-3'>Your Email</label>
                        <input className=' rounded' type='email' name='email'></input>
                    </div>
                    <div className='mt-7'>
                        <label className='block mb-3'>Your Password</label>
                        <input className='rounded' type='password' name='password'></input>
                    </div>
                    <div className='mt-5'>
                        <input className='bg-blue-500 text-white px-4 py-2 cursor-pointer rounded' type='submit' value="Login"/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;