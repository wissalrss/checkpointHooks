import React from "react";

import { Card, Button } from 'react-bootstrap';

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
                <Button variant="primary">Go somewhere</Button><br/>
                {props.itemMovie.rating} 
            </Card.Body>
            </Card>
        </>
        );
}
export default MovieCard;