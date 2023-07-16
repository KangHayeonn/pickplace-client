import React from 'react';
import '../../styles/components/common/checkBox.scss';

interface CheckBoxProps {
  text?: string | undefined;
}

const CheckBox = ({ text }: CheckBoxProps) => {
  return (
    <div className="checkbox-form">
      <input type="checkbox" className="checkbox-form__input" />
      <span className="checkbox-form__text">{text}</span>
    </div>
  );
};

export default CheckBox;
