import "./App.css";
import Homepage from "../Homepage/Homepage";
import Likes from "../Likes/Likes";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [movies, setMovies] = useState([]);
  let [liked, setLiked] = useState([]);
  let [loaded, setLoaded] = useState(false);

  let addLiked = (id) => {
    if (liked.includes(id)) {
      return null;
    } else {
      setLiked([...liked, id]);
    }
  };

  let removeLiked = (id) => {
    let updatedLikes = liked.filter((likes) => likes !== id);
    setLiked(updatedLikes);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .then((response) => setLoaded(true));
  }, []);

  return (
    <div className='App'>
      <Container>
        {/* <div>
          <Likes />
        </div> */}

        {loaded ? (
          <Homepage
            movies={movies}
            addLiked={addLiked}
            removeLiked={removeLiked}
          />
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

export default App;
