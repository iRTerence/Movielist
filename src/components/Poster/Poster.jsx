import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroup";

export default function Poster(props) {
  const addLike = () => {
    props.addLiked(props.id);
  };

  const removeLike = () => {
    console.log(props.id);
    props.removeLiked(props.id);
  };

  let imageURL = `https://image.tmdb.org/t/p/original/${props.poster}`;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={imageURL} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.overview}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Rating: {props.rating}</ListGroupItem>
        <ListGroupItem>Release: {props.release}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          <button onClick={addLike}>Add</button>
        </Card.Text>
        <Card.Text>
          <button onClick={removeLike}>Remove</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
