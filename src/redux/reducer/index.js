const initialState = {
  moviesLoaded: [],
  movieFavorites: [],
  moviesDetails: [],
}


const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SEARCH_MOVIES':
      return {
        ...state,
        moviesLoaded: action.payload.Search
      }

    case 'MOVIE_DETAILS':
      return {
        ...state,
        moviesDetails: action.payload
      }
    case "ADD_MOVIE_FAVORITE":
      return {
        ...state,
        movieFavorites: [...state.movieFavorites, action.payload]
      }

    case "REMOVE_FAVORITES_MOVIE":
      return {
        ...state,
        movieFavorites: state.movieFavorites.filter(movie => movie.imdbID !== action.payload)
      }
    default:
      return state;
  }
}


export default rootReducer;