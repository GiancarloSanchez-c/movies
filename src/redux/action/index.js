import axios from 'axios';
const { APIKEY } = process.env

export const searchMovies = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=a60fc12c&s=${title}`);
      return dispatch({
        type: 'SEARCH_MOVIES',
        payload: response.data
      })
    } catch (error) {
      console.log(error.message)

    }
  }
}

export const getMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=a60fc12c&i=${id}`);
      return dispatch({
        type: 'MOVIE_DETAILS',
        payload: response.data
      })
    } catch (error) {
      console.log(error.message)

    }
  }
}


export function removeFavoritesMovie(id) {
  return {
    type: 'REMOVE_FAVORITES_MOVIE',
    payload: id
  }
}

export function addMovieFavorite(movie) {
  return {
    type: 'ADD_MOVIE_FAVORITE',
    payload: movie
  }
}