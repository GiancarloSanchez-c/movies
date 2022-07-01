import React, { useState, useEffect } from 'react'
import { searchMovies } from '../redux/action';
import { useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai'
import '../assets/css/search.css';

const Search = () => {

  const [name, setName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies(name));
  },[dispatch, name]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    if (!name) {
      e.preventDefault();
      return alert('Please enter a movie name');
    }
    e.preventDefault();
    dispatch(searchMovies(name));
    setName('')
  }

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit} >
        <input className="search-input" type="text" placeholder="Search" value={name} onChange={handleInputChange}/>
        <AiOutlineSearch className="icon" size={15} />
      </form>
    </div>
  )
}

export default Search