import './App.css';
import React, { useState } from "react";
import Movie1 from '../src/img/movie1.jpg';
import DetailsMovie from './DetailsMovie';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  let  [movie]= useState([
    {id :1, title : "Blade Runner",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "1"},
    {id :2, title : "Citizen Kane",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "2"},
    {id :3, title : "Eyes Wide Shut",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "3"},
    {id :4, title : "The Good, the Bad and the Ugly",  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry", posterURL : Movie1 , rating : "4"},
  ]);
 return (
    <div className="App">
       <Switch>
          
            
          
          <Route path="/description/:id" render={(props) => <DetailsMovie data={movie} {...props}  />} />

          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
  

}

export default App;
