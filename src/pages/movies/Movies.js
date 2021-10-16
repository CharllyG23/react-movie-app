import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import SingleContent from "../../components/singleContent/SingleContent";
import CustomPagination from "../../components/pagination/CustomPagination";
import './Movies.css'

const Movies = () => {
    const [ page, setPage ] = useState(1);
    const [ content, setContent ] = useState([]);
    const [ numOfPages, setNumOfPages ] = useState();

    const  fetchMovies = async () =>{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);


    return(
        <div className="container-movies">
             <h2 className="title-movies">Movies</h2>    
                <Container  maxWidth='lg'>
                <div className="trending">
                    {content && content.map((c) => (
                        <SingleContent 
                            key={c.id} id={c.id} 
                            poster={c.poster_path} 
                            title={c.title || c.name} 
                            date={c.first_air_data || c.release_date }
                            media_type="movie"
                            vote_average={c.vote_average}
                        />
                    ))}
                </div>
                </Container>
                {numOfPages > 1 &&
                    <CustomPagination setPage={setPage} numOfPages={numOfPages} />
                }
     </div>
    );
}

export default Movies;