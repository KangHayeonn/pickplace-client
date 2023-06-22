import React from 'react';
import NumberForm from '../common/NumberForm';
import { personnelCounterProps } from './types';

const PersonnelCounter = ({
  optionForm,
  setOptionForm,
}: personnelCounterProps) => {
  const onChangeNum = (n: number) => {
    setOptionForm({
      ...optionForm,
      userCnt: n,
    });
  };
  return (
    <div className="container personnel">
      <h3>인원</h3>
      <div className="counter">
        <NumberForm min={0} onChangeNum={onChangeNum}></NumberForm>
      </div>
    </div>
  );
};

export default PersonnelCounter;
