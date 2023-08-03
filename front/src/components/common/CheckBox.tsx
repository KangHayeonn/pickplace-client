import React from 'react';
import '../../styles/components/common/checkBox.scss';

interface CheckBoxProps {
  text?: string | undefined;
  handleClick?: (index: number) => void;
  index?: number;
}

const CheckBox = ({ text, handleClick, index }: CheckBoxProps) => {
  const clickEvent = () => {
    if (handleClick && index !== undefined) {
      handleClick(0);
    }
  };

  return (
    <div className="checkbox-form">
      <input
        type="checkbox"
        id={`checkbox${index}`}
        className="checkbox-form__input"
        onClick={() => clickEvent()}
      />
      <span className="checkbox-form__text">{text}</span>
    </div>
  );
};

export default CheckBox;
