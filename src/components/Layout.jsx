  import React, {useState} from "react";
  import ReactPaginate from 'react-paginate';


  import './Layout.css';

  import SearchForm from './SearchForm.jsx';
  import MovieComponent from './MovieComponent.jsx';

  const Layout = () =>  {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [moviesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);


   const  handlePageClick = (e) => {
      setCurrentPage(e.selected + 1);   
    };

  return (
    <div className="Layout">
      <h1>Search movie app</h1>
      <SearchForm setMovies={setMovies} currentPage={currentPage} setTotalResults={setTotalResults}/>
      {(totalResults ==  0) ? <h2>Your search did not match any results</h2> : <h5>Total search:   {totalResults} films</h5>}
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
                    pageCount={Math.ceil(totalResults / moviesPerPage)}
                    breakLabel={"..."}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
      />
    </div>
  );
}

export {Layout};
