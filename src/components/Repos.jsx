import React from 'react';
import { useSelector } from 'react-redux';

const Repos = (props) => {
  const repos = useSelector((state) => state.repos);
  const { status } = { ...props };
  return repos && status === 'idle' ? (
    <div className="repos">
      <p>Top Repositories</p>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>
            <a href={repo.url} rel="noreferrer" target="_blank">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null
};

export default Repos;