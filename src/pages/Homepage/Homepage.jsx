import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Poster from "../../components/Poster/Poster";

export default function Homepage(props) {
  function listMovies() {
    let poster = props.movies.map((movies) => {
      return (
        <Poster
          className='box'
          key={movies.id}
          title={movies.original_title}
          poster={movies.poster_path}
          rating={movies.vote_average}
          release={movies.release_date}
          overview={movies.overview}
        />
      );
    });
    return poster;
  }

  return (
    <div>
      <Container>
        <h1>Movie Lists!!</h1>
        <Row>{listMovies()}</Row>
      </Container>
    </div>
  );
}
