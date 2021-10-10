import { Container } from "@material-ui/core";
import React from "react";
import Trending from "../trending/Trending";
import './Home.css'

const Home = () => {
    return(
        <div>
            <div className="banner">
                <div>
                    <h2 className="banner-title">Don't Miss Out On Our Next Webinar</h2>
                    <p className="banner-desc">Sign Up Now and Choose an Ebook for Free</p>
                </div>
                <button className="btn-signup" type="button" >
                    Play Now
                </button>
            </div>
                <Container>
                    <Trending/>
                </Container>
        </div>
    );
}


export default Home;
