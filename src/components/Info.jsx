import React from 'react';
import { useSelector } from 'react-redux';

const Info = (props) => {
  const { user, status } = { ...props };
  if (user && status === 'idle') {
    return (
      <div className="info-div">
        <a href={user.url} target="_black">
          <img src={user.avatar} alt={user.username} />
        </a>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Followers: {user.followers}</p>
        <p>Repositories Count: {user.reposCount}</p>
      </div>
    );
  }
  return null;
};

export default Info;
