import React from 'react';
import '../../styles/components/common/loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-circle">
        <div className="loading-empty"></div>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
