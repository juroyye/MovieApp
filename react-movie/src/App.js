import {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/Moviedisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "98e3fb1f";


  const [movie, setMovie] = useState(null);


  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };


  useEffect(() => {
    getMovie("Clueless");
  }, []);


  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

