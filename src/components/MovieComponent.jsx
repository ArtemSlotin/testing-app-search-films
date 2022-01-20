import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/MovieComponent.css';



const MovieComponent = (props) => {
  const [toggle] = useState('fas');
  const [selectItem, setSelectItem] = useState();
  const [detailItem, setDetailItem] = useState([]);


 
  const changeClass = (event) => {
    if(event.target.className == 'far fa-clock fa-2x') {
      event.target.className ='fas fa-clock fa-2x';
      console.log(`Ви додали фільм до списку переглядів`);
    } else {
      event.target.className ='far fa-clock fa-2x';
      console.log(`Ви прибрали фільм зі списку переглядів`);
    }  
  }

  function handleClickLink(elem) {
    console.log(elem, ' return when click');
    setSelectItem(elem);
  }


  useEffect(() => {
      axios.get(`http://www.omdbapi.com/?_limit=20&i=${selectItem}&apikey=3d3fe426`)
      .then((result) => {
        console.log('this is result from ID: ', result.data);
        setDetailItem(result.data);
      })
  }, [selectItem])

  useEffect(() => {
    console.log(' Actors from films ', detailItem);
  }, [detailItem])

  
 
  return (
    <div className="movie-container">
      {props.movies.map((elem) => {

        return( 
        <div key={elem.imdbID} className="movie-element">
            <img className="movie-poster" id={elem.imdbID} onClick={()=>handleClickLink(elem.imdbID)} src={elem.Poster} alt={elem.Title}/>
          <div>
              <div onClick={() => handleClickLink(elem.imdbID)} className='title'>
                {elem.Title}
              </div> 
            <div className='movie-describe'>
              <div>
                <p>{elem.Year}</p>
                <p>{elem.Type}</p>
              </div>
              <i onClick={changeClass} className={`${toggle == 'far' ? 'fas' : 'far'} fa-clock fa-2x`}></i>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}
export default MovieComponent;