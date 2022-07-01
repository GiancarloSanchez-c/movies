import React from "react";
import { Link } from 'react-router-dom';
import { removeFavoritesMovie } from '../redux/action'
import { useSelector,useDispatch } from 'react-redux'

const Favorites = () => {


  const favorites = useSelector(state => state.movieFavorites);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Favorites Movies</h2>
      </div>
      <div>
        {
          favorites && favorites.map((favorite) => (
            <div key={favorite.imdbID} className="movie-search ">
              <Link to={`/detail/${favorite.imdbID}`}>
                <h3>{favorite.title}</h3>
              </Link>
              <button onClick={() => dispatch(removeFavoritesMovie(favorite.imdbID))}>
                x
              </button>
              <img src={favorite.Poster} alt={favorite.title} />
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Favorites