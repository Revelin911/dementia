//appears on multiple pages

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Treatment Resistent Depression</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                        </li>
                    <li>
                        <Link to="/services">Services</Link>
                        </li>
                        <li>
                        <Link to="/tms">TMS</Link>
                        </li>
                        <li>
                            <Link to="/ketamine">Ketamine</Link>
                        </li>
                        <li>
                            <Link to="psilocybin">Psilocybin</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                            </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;