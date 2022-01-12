import React from "react";
import Row from "react-bootstrap/Row";
import Poster from "../../components/Poster/Poster";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  function listMovies() {
    let poster = props.movies.map((movies) => {
      return (
        <Poster
          className='poster'
          liked={props.liked}
          key={movies.id}
          id={movies.id}
          title={movies.original_title}
          poster={movies.poster_path}
          rating={movies.vote_average}
          release={movies.release_date}
          overview={movies.overview}
          addLiked={props.addLiked}
          removeLiked={props.removeLiked}
        />
      );
    });
    return poster;
  }

  return (
    <div>
      <Row>{listMovies()}</Row>
    </div>
  );
}
