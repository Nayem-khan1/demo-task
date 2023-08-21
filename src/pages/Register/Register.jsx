import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
const Register = () => {

    const {googleLogin, emailAndPassSignUp} = useContext(AuthContext);
    const provider = new GoogleAuthProvider;
    const googleSignIn = () => {
        googleLogin(provider)
        .then((res) => {
            console.log(res);
            toast.success('Successfully Login');
        }).catch((error) => {
            console.error(error);
            toast.error(error);
        });
    }
    const ResisterHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        emailAndPassSignUp(email, password)
        .then((res) => {
            console.log(res);
            toast.success('Account Created')
        }).catch((err) => {
            console.error(err);
            console.log(err);
        });
    }
    return (
        <>
            <div className='bg-gray-200 h-[100vh]'>
                <form onSubmit={ResisterHandler} className='flex flex-col justify-center items-center p-10 pt-[10%] w-[400px] mx-auto'>
                    <div className='w-full'>
                        <button onClick={googleSignIn} className='w-full flex justify-center items-center bg-white py-2 rounded'><FcGoogle className='text-2xl mr-5'></FcGoogle> <span>Continue with Google</span></button>
                    </div>
                    <p className='mt-3 text-gray-500 text-center'>or</p>
                    <div className='w-full mt-3'>
                        <input className=' rounded w-full pl-5 py-2' type='email' name='email' placeholder='Your Email'></input>
                    </div>
                    <div className='mt-7 w-full'>
                        <input className='w-full rounded pl-5 py-2' type='password' name='password' placeholder='Your Password'></input>
                    </div>
                    <div className='mt-7 w-full'>
                        <input className=' w-full bg-blue-500 text-white px-4 py-3 cursor-pointer rounded' type='submit' value="Create Account"/>
                    </div>
                    <p className='mt-7 text-gray-500'>Already have an account?<Link to="/" className='text-blue-500 ml-1 inline-block'>Login</Link></p>
                </form>
            </div>
        </>
    );
};

export default Register;