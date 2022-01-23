import React from 'react';



const DetailsOfFilm = ({ details }) => {
let {Year, imdbRating, Runtime: Duration,  Actors, Awards, Country, Language, Director, Genre, Plot, Released } = details;

return (
<ul className='film_data_ul'>
<li>
  <span className='data_keys'>Year: </span>
  <span className='data_values'>{Year}</span>
</li>
<li>
  <span className='data_keys'>Director: </span>
  <span className='data_values'>{Director}</span>
</li>
<li>
  <span className='data_keys'>Actors: </span>
  <span className='data_values'>{Actors}</span>
</li>
<li>
  <span className='data_keys'>Country: </span>
  <span className='data_values'>{Country}</span>
</li>
<li>
  <span className='data_keys'>Language: </span>
  <span className='data_values'>{Language}</span>
</li>
<li>
  <span className='data_keys'>Genre: </span>
  <span className='data_values'>{Genre}</span>
</li>
<li>
  <span className='data_keys'>Duration: </span>
  <span className='data_values'>{Duration}</span>
</li>
<li>
  <span className='data_keys'>Short about film: </span>
  <span className='data_values'>{Plot}</span>
</li>
<li>
  <span className='data_keys'>Rating imdb: </span>
  <span className='data_values'>{imdbRating}</span>
</li>
<li>
  <span className='data_keys'>Released: </span>
  <span className='data_values'>{Released}</span>
</li>
</ul>
)
}

export {DetailsOfFilm}