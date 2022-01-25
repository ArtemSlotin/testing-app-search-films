import React, { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';
import axios from 'axios';
import '../components/MovieComponent.css';


const MovieComponent = (props) => {
  const {id} = useParams();
  const [toggle] = useState('fas');
  const watchList = [];
  const [addToWatchList, setAddToWatchList] = useState(false);
  const [selectItem, setSelectItem] = useState();
  const [detailItem, setDetailItem] = useState([]);
  const arr = []

  // function filmsData (){
  //   watchList.map((id) => {
  //     axios.get(`http://www.omdbapi.com/?_&i=${id}&apikey=3d3fe426`)
  //     .then((result) => {
  //       arr.push(result.data)
  //       console.log(arr);
  //     })
  //   })
  // } 

 
  function addToList (props) {
    alert(JSON.stringify(props))
    alert(!watchList.includes(props))
    if(!watchList.includes(props)) {
      watchList.push(props)
    } else if (watchList.includes(props)) {
      watchList.pop(props)
    }
    console.log(watchList)
    localStorage.setItem('filmsData', JSON.stringify(watchList))


    
    // if(event.target.className == 'far fa-clock fa-2x') {
    //   event.target.className ='fas fa-clock fa-2x';
    // } else {
    //   event.target.className ='far fa-clock fa-2x';
    // }  
  }

  useEffect(() => {
   

  }, [arr])

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
              <i onClick={()=> addToList(elem)} imdbID={elem.imdbID} className={`${toggle == 'far' ? 'fas' : 'far'} fa-clock fa-2x`}></i>
            </div>
          </div>
        </div>
        )
      )}
    </div>
  )
}
export default MovieComponent;