import { Link } from 'react-router-dom';
import '../Header/Header.css'
import React from 'react';

const Header = () => {
    return (
        <div>
            <h2>My Website</h2>
            <nav>
                <Link to="">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;