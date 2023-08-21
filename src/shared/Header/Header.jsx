import React, { useContext } from 'react';
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const {logOut} = useContext(AuthContext);
    const signOut = () => {
        logOut()
        .then((res)=> {
            toast.success("Successfully Logout")
        }).catch((error) => {
            toast.error("error");
        })
    }
    return (
        <>
            <header>
                <div className='w-4/5 mx-auto flex justify-between py-10'>
                    <div>
                        <Link to="/"><img className='w-36' src={logo} alt="logo" /></Link>
                    </div>
                    <div>
                        <nav>
                            <ul className='flex'>                               
                                <li className='text-xl font-semibold hover:text-orange-400 mr-10'><Link to="/home">Home</Link></li>
                                <li className='text-xl font-semibold hover:text-orange-400 mr-10'><Link to="/add-course">Add Course</Link></li>
                                <li onClick={signOut} className='mr-10 text-xl font-semibold hover:text-orange-400'><Link to="/">Log Out</Link></li>
                                <li className=' text-xl font-semibold hover:text-orange-400'><Link to="/">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;