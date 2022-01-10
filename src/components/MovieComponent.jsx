import React from 'react';
import '../components/MovieComponent.css';
const MovieComponent = (props) => {

  console.log(props);
 
  return (
    <div className="movie-container">
      {props.movies.map((elem) => {
        return( 
        <div key={elem.imdbID} className="movie-element">
          <img src={elem.Poster} alt={elem.Title}/>
          <h2>{elem.Title}</h2>
          <h2>{elem.Year}</h2>
        </div>
        )
      })}
    </div>
  )
}
export default MovieComponent;