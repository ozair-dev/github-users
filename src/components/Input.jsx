import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import cs from 'classnames';
import { fetchUser, resetSearch } from '../reducers';

const Input = () => {
  const [name, setName] = useState('');
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) dispatch(fetchUser(name));
  };
  
  const handleReset = () => {
    setName('');
    dispatch(resetSearch());
  };

  return (
    <form className="search-div" onSubmit={handleSubmit}>
      <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter username" />
      <button type="button" onClick={handleReset} className="cancel-search-button">
        <AiOutlineClose />
      </button>
      <button type="submit" disabled={status !== 'idle'} className="search-button">
        <FaSearch className={cs('search-icon', { hidden: status !== 'idle' })} />
        <AiOutlineLoading3Quarters className={cs('loading-icon', { hidden: status === 'idle' })} />
      </button>
    </form>
  );
};

export default Input;
