import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleNight } from '../reducers';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { night } = { ...props };

  return (
    <div className="navbar">
      <p>InfoHub</p>
      <div onClick={() => dispatch(toggleNight())} className="toggle-day-night">
        <div />
      </div>
    </div>
  )
};

export default Navbar;
