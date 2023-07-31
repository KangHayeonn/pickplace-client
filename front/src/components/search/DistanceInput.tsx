import React from 'react';
import DistanceSlider from './DistanceSlider';
import { distanceInputProps } from './types';

const DistanceInput = ({ onChangeUserRangeInput }: distanceInputProps) => {
  return (
    <div className="distance-container">
      <h3 className="distance-header">거리</h3>
      <DistanceSlider onChangeUserRangeInput={onChangeUserRangeInput} />
      <p className="distance-content">
        <span>0km</span>
        <span>10km</span>
      </p>
    </div>
  );
};

export default DistanceInput;
