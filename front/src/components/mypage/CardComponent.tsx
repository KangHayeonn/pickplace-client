import React, { useState } from 'react';

type cardProps = {
  children: React.ReactNode;
};
const CardComponent = ({ children }: cardProps) => {
  return (
    <div className="card-container">
      <div className="card">{children}</div>
    </div>
  );
};

export default CardComponent;
