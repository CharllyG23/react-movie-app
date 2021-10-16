import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import SingleContent from "../../components/singleContent/SingleContent";
import CustomPagination from "../../components/pagination/CustomPagination"
import './Trending.css'

const Trending = () => {
    const [ page, setPage ] = useState(1);
    const [ content, setContent ] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            );
             /* console.log(data.results); */
        setContent(data.results);  
        
    };

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    return(
        <div>
           <article className="article">
                <h2 className="titleTrending">Trending</h2>    
               <Container  maxWidth='lg'>
                <div className="trending">
                    {content && content.map((c) => (
                        <SingleContent 
                            key={c.id} id={c.id} 
                            poster={c.poster_path} 
                            title={c.title || c.name} 
                            date={c.first_air_data || c.release_date }
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))}
                </div>
               </Container>
               <CustomPagination setPage={setPage} />
            </article>
        </div>
    );
}


export default Trending;