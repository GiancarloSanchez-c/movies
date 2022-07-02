import React from "react";
import { Link } from 'react-router-dom';
import { removeFavoritesMovie } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/css/favorites.css'
import NavBar from './NavBar'

const Favorites = () => {


  const favorites = useSelector(state => state.movieFavorites);
  const dispatch = useDispatch();

  return (
    <>
    <NavBar />
      <h1 className="favorites-h1">Favorites Movies</h1>
      <div className="favorites-content">
        {
          favorites && favorites.map((favorite) => (
            <div key={favorite.imdbID} className="favorite-search ">
              <Link to={`/detail/${favorite.imdbID}`}>
                <h3 className="favorite-title" >{favorite.Title}</h3>
              </Link>
              <button className="remove-favorite" onClick={() => dispatch(removeFavoritesMovie(favorite.imdbID))}>
                x
              </button>
              <div className="img">
                <img className="movie-img" src={favorite.Poster} alt="poster de la pelicula" />
              </div>
              <Link to={`/detail/${favorite.imdbID}`}>
                <button className='button-favorite'>Read More</button>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Favorites