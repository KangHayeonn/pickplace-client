import React, { useContext } from 'react';
import { RadioGroupContext } from './RadioGroupContext';
import '../../styles/components/common/radioButton.scss';

interface RadioButtonProps {
  children: React.ReactNode;
  value: string;
  checked?: boolean | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function useRadioGroup() {
  return useContext(RadioGroupContext);
}

const RadioButton = ({
  children,
  value,
  checked,
  onChange,
}: RadioButtonProps) => {
  const radioGroup = useRadioGroup();
  if (!radioGroup) {
    return (
      <div className="radioBtn">
        <input
          className="radioBtn-input"
          type="radio"
          checked={checked}
          id={value}
          value={value}
          onChange={onChange}
        />
        <label className="radioBtn-label" htmlFor={value}>
          {children}
        </label>
      </div>
    );
  }

  const { onRadioChange } = radioGroup;

  return (
    <div className="radioBtn">
      <input
        className="radioBtn-input"
        type="radio"
        checked={checked}
        onChange={onRadioChange}
        name="radio"
        id={value}
        value={value}
      />
      <label className="radioBtn-label" htmlFor={value}>
        {children}
      </label>
    </div>
  );
};
export default RadioButton;
