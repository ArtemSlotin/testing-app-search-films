import React, { useState, useEffect } from "react";
import './SearchForm.css';
import axios from "axios";

const SearchForm = ({setMovies}) => {
const [inputValue, setInputValue] = useState('');
const [goSearch, setGoSearch] = useState(false);

  function handlerSearch() {
    setGoSearch(true);
    axios.get(`http://www.omdbapi.com/?s=${inputValue}&apikey=3d3fe426`)
    .then((result) => {setMovies(result.data.Search)})
    .finally(()=>{
      setGoSearch(false);
    })
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    // (goSearch && inputValue) ??
   
  }, [goSearch, inputValue])


  function handlerClean() {
    setInputValue('');
  }

  return (
    <div className="search-form">
      <input className="search" type='text' value={inputValue} onChange={handleChange} placeholder='Type the name of a movie' />
      <button className="search-btn" onClick={handlerSearch} type="search">search</button>
      <input className="reset-btn" onClick={handlerClean} type="reset" value="Reset"></input>
    </div>    
  )
}

export default SearchForm;