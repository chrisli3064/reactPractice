import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7'

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2021",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [movies, setMovies] = useState([])
  const[searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  } // asynch is for when it takes some time for the funciton to happen

  useEffect(() => {
    
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value= {searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies Found</h2>
            </div>
          )
      }




    </div>
  );
}

export default App