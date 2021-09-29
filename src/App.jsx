import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import cs from 'classnames';
import { Navbar, Input, Skeleton, Info, Repos } from './components';

function App() {
  const user = useSelector((state) => state.user)
  const night = useSelector((state) => state.night)
  const status = useSelector((state) => state.status)
  return (
    <div className={cs('app', { night: night })}>
      <Navbar night={night} />
      <Input />
      <Skeleton />
      <Info status={status} user={user} />
      <Repos status={status} user={user} />
    </div>
  )
}

export default App
