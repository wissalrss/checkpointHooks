import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Movie1 from '../src/img/movie1.jpg';

import MovieList from './MovieList';
import MovieCard from './MovieCard';
import Filter from './Filter';

const App = () => {
const [movie, setMovie]= useState([
  {id :1, title : "Blade Runner",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "1"},
  {id :2, title : "Citizen Kane",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "2"},
  {id :3, title : "Eyes Wide Shut",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "3"},
  {id :4, title : "The Good, the Bad and the Ugly",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "4"},
]);
const [FiltredMovie,setFiltredMovie]=useState(movie)
const handelSearch=(val)=>{
  if(val !=""){
    setFiltredMovie(movie.filter((item)=> item.title.match(val)))
  }else{
    setFiltredMovie(movie)
  }
}
 return (
    <div className="App">
      <Filter handelChangeEvent={handelSearch} />
      <MovieList movieList={FiltredMovie} />
    </div>
  );
  

}

export default App;
