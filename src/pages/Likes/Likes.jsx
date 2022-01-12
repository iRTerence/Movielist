import React from "react";
import Poster from "../../components/Poster/Poster";
import Row from "react-bootstrap/Row";

export default function Likes(props) {
  let likedList = props.movies.map((movie) => {
    if (props.liked.includes(movie.id)) {
      return (
        <Poster
          liked={props.liked}
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          poster={movie.poster_path}
          rating={movie.vote_average}
          release={movie.release_date}
          overview={movie.overview}
          addLiked={props.addLiked}
          removeLiked={props.removeLiked}
        />
      );
    }
  });

  return (
    <div>
      <Row>{likedList}</Row>
    </div>
  );
}
