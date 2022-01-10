  import React, {useState} from "react";
  import './App.css';

  import SearchForm from './components/SearchForm.jsx';
  import MovieComponent from "./components/MovieComponent";

  function App() {
    const [movies, setMovies] = useState([]);
    
  return (
    <div className="App">
      <h1>Search movie app</h1>
      <SearchForm setMovies={setMovies}/>
      {movies && movies.length > 0 && <MovieComponent movies={movies}/>}
    </div>
  );
}

export default App;
