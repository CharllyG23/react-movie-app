import React, { useEffect, useState } from "react";
import axios from "axios";
import Trending from "../trending/Trending";
import { original, unavailable } from "../../config/Config";

import './Home.css'

const Home = () => {
    const [ content, setContent ] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
            );
        setContent(data.results[5]);   
        
    };

    useEffect(() => {
        fetchTrending();
    },[]);

    return(
        <div>
            <div className="banner">
                <img  
                className="imgBanner"
                src={ content.poster_path ? `${original}/${content.backdrop_path}` : unavailable } 
                alt={ content.title} 
                />
                <button className="button">hola</button>
            </div>
            <Trending/>
        </div>
    );
}


export default Home;
