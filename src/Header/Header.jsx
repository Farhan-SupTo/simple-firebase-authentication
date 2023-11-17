import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl mb-2'>Welcome to firebase authentication</h1>
            <Link to='/' className='px-2'>Home</Link>
            <Link to='/Login'>Login</Link>
        </div>
    );
};

export default Header;