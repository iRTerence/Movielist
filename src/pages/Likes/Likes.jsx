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
          disliked={props.disliked}
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          addLiked={props.addLiked}
          removeLiked={props.removeLiked}
          addDisliked={props.addDisliked}
          removeDisliked={props.removeDisliked}
        />
      );
    } else {
      return <></>;
    }
  });

  let display = (
    <div>
      {props.liked.length > 0 ? (
        <div>
          <Row className='row-l'>{likedList}</Row>
        </div>
      ) : (
        <div className='message'>
          <h3>You do not have any liked posters!</h3>
        </div>
      )}
    </div>
  );

  return <div>{display}</div>;
}
