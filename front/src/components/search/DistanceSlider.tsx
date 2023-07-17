import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { distanceSliderProps } from './types';

const DistanceSlider = ({ onChangeUserRangeInput }: distanceSliderProps) => {
  return (
    <div className="slider-container">
      <Slider
        min={0}
        max={10}
        defaultValue={5}
        onChange={(value) => {
          if (typeof value == 'number') onChangeUserRangeInput(value);
        }}
        handleRender={(node, handleProps) => {
          return (
            <Tooltip
              overlay={handleProps.value + 'km'}
              placement="top"
              overlayInnerStyle={{
                minHeight: 'auto',
                fontSize: '10px',
                borderRadius: '15px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                color: 'white',
              }}
              overlayStyle={{
                padding: '5px 0',
              }}
              visible={handleProps.dragging}
            >
              {node}
            </Tooltip>
          );
        }}
      />
    </div>
  );
};

export default DistanceSlider;
