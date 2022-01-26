import React, { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';
import axios from 'axios';
import '../components/MovieComponent.css';
import {ReactComponent as WatchLaterSvg } from '../img/watch-later30_40.svg';
const watchListClassName = document.querySelectorAll('watch_later');


const MovieComponent = (props) => {
  const {id} = useParams();
  const [toggle] = useState('fas');
  const watchList = [];
  const [selectItem, setSelectItem] = useState();
  const [detailItem, setDetailItem] = useState([]);
 
  function addToList (props) {
    if(!watchList.includes(props)) {
      watchList.push(props)
    } else if (watchList.includes(props)) {
      watchList.pop(props)
    }
    // const watchListClassName = document.querySelectorAll('watch_later').classList.add('active')
    console.log(watchListClassName)


    // if (WatchLaterSvg.style.fill == "rgb(0%,0%,0%)") {
    //   WatchLaterSvg.style.fill = "rgb(0%,0%,100%)";
    // }
    // else {
    //   WatchLaterSvg.style.fill = "rgb(29, 172, 249)";
    // }


    localStorage.setItem('filmsData', JSON.stringify(watchList))
  }


  function handleClickLink(elem) {
    setSelectItem(elem);
  }

  useEffect(() => {
      axios.get(`http://www.omdbapi.com/?_limit=20&i=${selectItem}&apikey=3d3fe426`)
      .then((result) => {
        setDetailItem(result.data);
      })
  }, [selectItem])

  
 
  return (
    <div className="movie-container">
      {props.movies.map((elem) => ( 
        <div key={elem.imdbID} className="movie-element">
          <Link to={`/details/${elem.imdbID}`} id={elem.imdbID}>
            <img className="movie-poster" id={elem.imdbID} onClick={()=>handleClickLink(elem.imdbID)} src={elem.Poster !== 'N/A' ? elem.Poster : 'https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png'} alt={elem.Title}/>
          </Link>
          <div>
          <Link to={`/details/${elem.imdbID}`}>
            <div onClick={() => handleClickLink(elem.imdbID)} className='title'>
              {elem.Title}
            </div>
          </Link>    
            <div className='movie-describe'>
              <div>
                <p>{elem.Year}</p>
                <p>{elem.Type}</p>
              </div>
              <WatchLaterSvg className='watch_later' onClick={()=> addToList(elem)} imdbID={elem.imdbID}/>
            </div>
          </div>
        </div>
        )
      )}
    </div>
  )
}
export default MovieComponent;