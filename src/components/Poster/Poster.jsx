import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Poster.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function Poster(props) {
  let [likeActive, setLikeActive] = useState(false);
  let [dislikeActive, setDislikeActive] = useState(false);

  useEffect(() => {
    if (props.liked.includes(props.id)) {
      setLikeActive(true);
    }
  }, []);

  const addLike = () => {
    if (likeActive === true) {
      setLikeActive(false);
      props.removeLiked(props.id);
    } else {
      props.addLiked(props.id);
      setLikeActive(true);
      setDislikeActive(false);
    }
  };

  const removeLike = () => {
    if (dislikeActive === true) {
      setDislikeActive(false);
    } else {
      setDislikeActive(true);
      setLikeActive(false);
      props.removeLiked(props.id);
    }
  };

  let imageURL = `https://image.tmdb.org/t/p/original/${props.poster}`;
  return (
    <Card style={{ width: "18rem" }} className='poster'>
      <Card.Img variant='top' src={imageURL} />
      <Card.Body>
        <div className='thumbs'>
          <FontAwesomeIcon
            className='thumbs-up'
            style={likeActive ? { color: "green" } : null}
            icon={faThumbsUp}
            onClick={addLike}></FontAwesomeIcon>
          <FontAwesomeIcon
            className='thumbs-down'
            style={dislikeActive ? { color: "red" } : null}
            icon={faThumbsDown}
            onClick={removeLike}></FontAwesomeIcon>
        </div>
      </Card.Body>
    </Card>
  );
}
