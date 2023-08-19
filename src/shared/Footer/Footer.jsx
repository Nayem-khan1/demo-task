import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Footer = () => {
    const {name, age, address} = useContext(AuthContext);
    return (
        <div>
            <h2>{name} {age} {address}</h2>
            <h1>This is Footer part</h1>
        </div>
    );
};

export default Footer;