import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () =>{
    return(
        <header>
            <nav>
                <ul className="menu">
                    <li className="logo"><Link to="/">MOV&E</Link></li>
                    <li><Link to="/">Trending</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="series">Tv</Link></li>
                    <li><Link to="search">B</Link></li>
                </ul>
            </nav>
        </header>
);
}

export default Header;