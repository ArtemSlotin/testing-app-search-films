import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { DetailsContainer } from '../components/DetailsContainer';


import '../pages/WatchLaterList.css'
const WatchLaterList = () => {
  const elem = [];

  let retrievedData = localStorage.getItem('watchList');
  let watchList = JSON.parse(retrievedData);

  const render = watchList.map(((id) => {
    axios.get(`http://www.omdbapi.com/?_&i=${id}&apikey=3d3fe426`)
    .then((result) => {
      elem.push(result.data)
      console.log(elem);

      })
  }))

  return (
  <>
  {
    elem.map((filmData) => {
      <div className="movie-element">
        {
          Object.entries(filmData).map(([key, value]) => (
            typeof value === 'string' && (<span>{key}</span>)
          ))
        }
      </div>
    })
      
  }
  </>
  )
}

export {WatchLaterList};