import React, { useEffect } from 'react'
import { getMovieDetails } from '../redux/action'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/detail.css';

const Detail = () => {

  const details = useSelector(state => state.moviesDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);

  return (
    <div className="detail-container">
      <div className="section-grid">
        <div className="section-one">
          <h1> {details.Title}</h1>
          <img className="poster" src={details.Poster} alt="poster de la pelicula" />
          <h5>Description</h5>
          <p><span>{details.Plot}</span></p>
          <Link to='/'><button className="btn-back">Regresar</button></Link>
        </div>
        <div className="section-detail">
          <p>Year: <span>{details.Year}</span></p>
          <p>Rated: <span>{details.Rated}</span></p>
          <p>Released:<span>{details.Released}</span> </p>
          <p>Director: <span>{details.Director}</span></p>
          <p>Actors:<span>{details.Actors}</span> </p>
          <p>Runtime: <span>{details.Runtime}</span></p>
          <p>Genre: <span>{details.Genre}</span></p>
          <p>Type: <span>{details.Type}</span></p>
          <p>Languages: <span>{details.Language}</span></p>
          <p>Country:<span>{details.Country}</span> </p>
          <p>Awards: <span>{details.Awards}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Detail