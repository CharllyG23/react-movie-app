import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () =>{
    return(
        <header onClick={() => window.scroll(0, 0)}>
            <nav>
                <ul className="menu">
                    <li className="logo"><Link to="/">Mov&e.</Link></li>
                    <li><Link to="/">Trending</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                </ul>
            </nav>
        </header>
);
}

export default Header;