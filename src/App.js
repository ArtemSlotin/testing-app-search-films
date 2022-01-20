  import React, {useState} from "react";
  import ReactPaginate from 'react-paginate';


  import './App.css';

  import SearchForm from './components/SearchForm.jsx';
  import MovieComponent from './components/MovieComponent.jsx';

  function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [moviesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);


   const  handlePageClick = (e) => {
      setCurrentPage(e.selected + 1);   
  };

  console.log(movies);
    const pageCounts = totalResults / moviesPerPage;
  return (
    <div className="App">
      <h1>Search movie app</h1>
      <SearchForm setMovies={setMovies} currentPage={currentPage} setTotalResults={setTotalResults}/>
      {(totalResults ==  0) ? <h2>По вашому запиту нічого не знайдено</h2> : <h5>Загальні результати пошуку:   {totalResults} фільмів</h5>}
      {movies && movies.length > 0 && <MovieComponent movies={movies}/>}
      <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    containerClassName={"pagination"}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    breakClassName={"break-me"}
                    activeClassName={"active"}
                    subContainerClassName={"pages pagination justify-content-end"}
                    pageCount={pageCounts}
                    breakLabel={"..."}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default App;
