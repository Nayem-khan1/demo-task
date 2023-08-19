import React from 'react';
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
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
                                <li className='mr-10 text-xl font-semibold hover:text-orange-400'><Link to="/">Login</Link></li>
                                <li className='text-xl font-semibold hover:text-orange-400'><Link to="/home">Home</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;