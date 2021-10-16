import React from 'react';
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import './Header.css';

const Header = () =>{
    return(
        <header onClick={() => window.scroll(0, 0)}>
            <nav>
                <ul className="menu">
                    <li className="logo"><Link to="/">Mov&e.</Link></li>
                    <li><Link to="/">Trending</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="series">Tv</Link></li>
                    <li><Link to="search"><MdSearch className="iconSearch" /></Link></li>
                </ul>
            </nav>
        </header>
);
}

export default Header;