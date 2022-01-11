import "./App.css";
import Homepage from "../Homepage/Homepage";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [movies, setMovies] = useState([]);
  let [liked, setLiked] = useState([]);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .then((response) => setLoaded(true));
  }, []);

  return (
    <div className='App'>{loaded ? <Homepage movies={movies} /> : <></>}</div>
  );
}

export default App;
