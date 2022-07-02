import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addMovieFavorite } from '../redux/action'
import '../assets/css/movie.css'
import { BsHeart } from 'react-icons/bs'

const Movie = () => {

  const [heart, setHeart] = useState(false);


  const searchMovie = useSelector(state => state.moviesLoaded)
  const dispatch = useDispatch();


  return (
    <div className="movie-content">
      {
        searchMovie && searchMovie.map((movie) => (
          <div key={movie.imdbID} className="movie-search" onClick={() => setHeart(!heart)}>

            <Link to={`/detail/${movie.imdbID}`}>
              <h3 className="detail">{movie.Title}</h3>
            </Link>
            <button onClick={() => dispatch(addMovieFavorite(movie))} className='button-favorite'>
              Add Favorites
              { 
                heart ? <BsHeart style={{background:"red"}}/> : <BsHeart />
              }
            </button>
            <Link to={`/detail/${movie.imdbID}`}>
              <button className='button-favorite'>Read More</button>
            </Link>
            <div className='img' >
              <img className="movie-img" src={movie.Poster} alt="poster de la pelicula" />
            </div>
            <p> {movie.Plot} </p>
          </div>

        ))
      }
    </div>
  )
}

export default Movie