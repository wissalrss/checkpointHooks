import React from "react";

import { Card, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
const  MovieCard = (props) =>{
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.itemMovie.posterURL} />
            <Card.Body>
                <Card.Title> {props.itemMovie.title}</Card.Title>
                <Card.Text>
                {props.itemMovie.description}
                </Card.Text>
                <Link to={{pathname:`/description/${props.itemMovie.id}`,params: props.itemM}}>Description</Link><br/>
                {props.itemMovie.rating} 
            </Card.Body>
            </Card>
        </>
        );
}
export default MovieCard;