import React from "react";
import MovieCard from "./MovieCard";


const  MovieList = (props) =>{
    return(
        <>
            {props.movieList.map((item)=> <MovieCard itemMovie={item}/>)}
          
        </>
        );
}
export default MovieList;