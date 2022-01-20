import React, { useState, useEffect } from "react";
import './SearchForm.css';
import axios from "axios";

const SearchForm = ({setMovies, setTotalResults, currentPage}) => {
  const [inputValue, setInputValue] = useState('Artem');
  const [goSearch, setGoSearch] = useState(false);
  console.log(currentPage)

  function handlerSearch() {
    setGoSearch(true);
    axios.get(`http://www.omdbapi.com/?_limit=20&s=${inputValue}&apikey=3d3fe426&page=${currentPage}`)
    .then((result) => {
      setMovies(result.data.Search);
      setTotalResults(result.data.totalResults)
    })
    .finally(()=>{
      setGoSearch(false);
    })
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect((currentPage) => {
  handlerSearch(currentPage)
  }, [currentPage])


  function handlerClean() {
    setInputValue('');
  }

  return (
    <div className="search-form">
      <input className="search-input" type='text' value={inputValue} onChange={handleChange} placeholder='Type the name of a movie' />
      <button className="search-btn" onClick={handlerSearch} type="search">search</button>
      <button className="reset-btn" onClick={handlerClean} type="reset" >reset</button>
    </div>    
  )
}

export default SearchForm;