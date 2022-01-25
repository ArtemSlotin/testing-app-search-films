import React from "react";

import '../pages/WatchLaterList.css'


const WatchLaterList = () => {
 
  let retrievedData = localStorage.getItem('filmsData');
  let watchList = JSON.parse(retrievedData);
  // setFilms(watchList)
 

  return (
    <div className="watch-list-container">
      <h1 className="watch-list-title">Watch Later List</h1>
        <div className="movie-container">
          {watchList ? watchList.map((movie) => (
              <div className="movie-element">
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png'} alt="" />
              <div>
                    <div className='title'>
                      {movie.Title}
                    </div>   
                    <div className='movie-describe'>
                      <div>
                        <p>{movie.Year}</p>
                        <p>{movie.Type}</p>
                      </div>
                      <i imdbID={movie.imdbID} className={`far fa-clock fa-2x`}></i>
                    </div>
                  </div>
            </div>
            ))
            :
            <h2>You don`t have the films in  a Watch Later List</h2> }
        </div>
    </div>
  )
}

export {WatchLaterList};