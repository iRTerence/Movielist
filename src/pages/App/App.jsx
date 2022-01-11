import "./App.css";
import Homepage from "../Homepage/Homepage";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  let [movies, setMovies] = useState([]);
  let [liked, setLiked] = useState([]);

  // https://image.tmdb.org/t/p/original/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg images saved here

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className='App'>
      <Homepage movies={movies} />
      <div>Hello</div>
    </div>
  );
}

export default App;
