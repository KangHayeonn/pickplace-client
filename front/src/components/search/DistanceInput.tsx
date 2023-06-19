import React from 'react';
import DistanceSlider from './DistanceSlider';
import { distanceInputProps } from './types';

const DistanceInput = ({ onChangeUserRangeInput }: distanceInputProps) => {
  return (
    <div className="container distance">
      <h3>거리</h3>
      <DistanceSlider
        onChangeUserRangeInput={onChangeUserRangeInput}
      ></DistanceSlider>
      <p>
        <span>0km</span>
        <span>10km</span>
      </p>
    </div>
  );
};

export default DistanceInput;
