import React, { useState } from 'react';
import { ReactComponent as Star } from '../../assets/images/star-for-rate.svg';
import '../../styles/components/common/starRate.scss';

interface starRateProps {
  defaultStar?: number;
  onClickStar: (rate: number) => void;
}

const StarRate = ({ onClickStar, defaultStar }: starRateProps) => {
  const numArr = [1, 2, 3, 4, 5];
  const [hoveredStarIndex, setHoveredStarIndex] = useState(0);
  const [clickedStarIndex, setClickedStarIndex] = useState(
    defaultStar ? defaultStar : 0,
  );

  const fillStarOfIndex = (num: number, event?: string): string => {
    if (event === 'enter' && hoveredStarIndex >= num) {
      return '#F9C74F';
    }
    if (event === 'leave' && clickedStarIndex >= num) {
      return '#F9C74F';
    }
    return '#eeeeee';
  };

  return (
    <div className="StarRate-container">
      {numArr.map((num) => (
        <button
          key={num}
          className="StarRate-starBtn"
          onMouseEnter={() => setHoveredStarIndex(num)}
          onMouseLeave={() => setHoveredStarIndex(0)}
          onClick={() => {
            setClickedStarIndex(num);
            onClickStar(num);
          }}
        >
          <Star
            key={num}
            fill={fillStarOfIndex(
              num,
              hoveredStarIndex === 0 ? 'leave' : 'enter',
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRate;
