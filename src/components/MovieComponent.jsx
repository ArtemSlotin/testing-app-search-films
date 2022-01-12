import React, { useState } from 'react';
import '../components/MovieComponent.css';

const MovieComponent = (props) => {
  const [toggle, changeToggle] = useState('fas');

 
  const changeClass = (event) => {
    if(event.target.className == 'far fa-clock fa-2x') {
      event.target.className ='fas fa-clock fa-2x';
      console.log(`Ви додали фільм до списку переглядів`);
    } else {
      event.target.className ='far fa-clock fa-2x';
      console.log(`Ви прибрали фільм зі списку переглядів`);

    }
    // changeToggle('far' ? 'fas' : 'far')
    // console.log(event.target.className)
    
  }
  console.log(props);
 
  return (
    <div className="movie-container">
      {props.movies.map((elem) => {
        return( 
        <div key={elem.imdbID} className="movie-element">
          <img className="movie-poster" src={elem.Poster} alt={elem.Title}/>
          <div>
            <p className='title'>{elem.Title}</p>
            <p>{elem.Year}</p>
            <p>{elem.Type}</p>
            <i onClick={changeClass} className={`${toggle == 'far' ? 'fas' : 'far'} fa-clock fa-2x`}></i>
          </div>
        </div>
        )
      })}
    </div>
  )
}
export default MovieComponent;