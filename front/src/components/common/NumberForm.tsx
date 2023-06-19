import React, { useState } from 'react';
import '../../styles/components/common/numberForm.scss';
import minusIcon from '../../assets/images/minus.svg';
import plusIcon from '../../assets/images/plus.svg';
import minusDisabledIcon from '../../assets/images/minus-disabled.svg';
import plusDisabledIcon from '../../assets/images/plus-disabled.svg';

interface NumberProps {
  min?: number;
  max?: number;
}

const NumberForm = ({ min = 0, max = 20 }: NumberProps) => {
  const [number, setNumber] = useState<number>(min);
  const minNum = min;
  const maxNum = max;

  const minusNumber = () => {
    if (number <= minNum) return;
    setNumber((num: number) => (num -= 1));
  };

  const plusNumber = () => {
    if (number >= maxNum) return;
    setNumber((num: number) => (num += 1));
  };

  return (
    <div className="counter">
      <img
        src={number > minNum ? minusIcon : minusDisabledIcon}
        width={12}
        height={12}
        alt="Number Minus Button"
        className={`${number <= minNum ? 'disabled' : ''}`}
        onClick={minusNumber}
      />
      <div className="circle">
        <span>{number}</span>
      </div>
      <img
        src={number < maxNum ? plusIcon : plusDisabledIcon}
        width={12}
        height={12}
        alt="Number Plus Button"
        className={`${number >= maxNum ? 'disabled' : ''}`}
        onClick={plusNumber}
      />
    </div>
  );
};

export default NumberForm;
