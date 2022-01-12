import "./App.css";
import Homepage from "../Homepage/Homepage";
import Likes from "../Likes/Likes";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

function App() {
  let [movies, setMovies] = useState([]);
  let [liked, setLiked] = useState([]);
  let [loaded, setLoaded] = useState(false);

  let addLiked = (id) => {
    if (!liked.includes(id)) setLiked([...liked, id]);
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
        <Nav />
        <Routes>
          {loaded ? (
            <>
              <Route
                exact
                path='/'
                element={
                  <Homepage
                    movies={movies}
                    liked={liked}
                    addLiked={addLiked}
                    removeLiked={removeLiked}
                  />
                }
              />
              <Route
                exact
                path='/liked'
                element={
                  <Likes
                    movies={movies}
                    removeLiked={removeLiked}
                    addLiked={addLiked}
                    liked={liked}
                  />
                }
              />
            </>
          ) : (
            <></>
          )}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
