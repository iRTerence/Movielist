import React from "react";
import Poster from "../../components/Poster/Poster";
import Row from "react-bootstrap/Row";
import "./Likes.css";
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

  let display = (
    <div>
      {props.liked.length > 0 ? (
        <div>
          <Row className='row-l'>{likedList}</Row>
        </div>
      ) : (
        <div>
          <h1>You do not have any liked posters!</h1>
        </div>
      )}
    </div>
  );

  return <div>{display}</div>;
}
