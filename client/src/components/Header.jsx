//appears on multiple pages
// import { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Treatment Resistant Depression</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Our Story</Link>
                        </li>
                    <li>
                        <Link to="/projects">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                    <li>
                        <Link to="/resume">Schedule</Link>
                        </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;