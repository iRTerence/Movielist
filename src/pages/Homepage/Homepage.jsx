import React from "react";
import Row from "react-bootstrap/Row";
import Poster from "../../components/Poster/Poster";
import "./Homepage.css";

export default function Homepage(props) {
  function listMovies() {
    let poster = props.movies.map((movies) => {
      return (
        <Poster
          className='poster'
          liked={props.liked}
          disliked={props.disliked}
          key={movies.id}
          id={movies.id}
          poster={movies.poster_path}
          addLiked={props.addLiked}
          removeLiked={props.removeLiked}
          addDisliked={props.addDisliked}
          removeDisliked={props.removeDisliked}
        />
      );
    });
    return poster;
  }

  return (
    <div>
      <Row className='row'>{listMovies()}</Row>
    </div>
  );
}
