import React from 'react';
import { personnelCounterProps } from './types';

const PersonnelCounter = ({
  optionForm,
  setOptionForm,
}: personnelCounterProps) => {
  return (
    <div className="container personnel">
      <h3>인원</h3>
      <div className="counter">
        <button
          onClick={() => {
            if (optionForm.userCnt <= 1)
              window.alert('최소 인원은 1명 입니다.');
            else {
              setOptionForm({
                ...optionForm,
                userCnt: optionForm.userCnt - 1,
              });
            }
          }}
        >
          -
        </button>
        <span>{optionForm.userCnt}</span>
        <button
          onClick={() => {
            setOptionForm({
              ...optionForm,
              userCnt: optionForm.userCnt + 1,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PersonnelCounter;
