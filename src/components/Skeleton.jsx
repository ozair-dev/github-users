import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cs from 'classnames';

const Skeleton = (props) => {
  const status = useSelector((state) => state.status);

  return (
    <div className={cs('skeleton', { hidden: status === 'idle' })}>
      <div className="skeleton-image" />
      <div className="skeleton-info">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Skeleton;
