import React, { useContext } from 'react';
import { RadioGroupContext } from './RadioGroupContext';
import '../../styles/components/common/radioButton.scss';

interface RadioButtonProps {
  children: React.ReactNode;
  value: string;
  defaultChecked?: boolean | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function useRadioGroup() {
  return useContext(RadioGroupContext);
}

const RadioButton = ({
  children,
  value,
  defaultChecked,
  onChange,
}: RadioButtonProps) => {
  const radioGroup = useRadioGroup();
  const { onRadioChange } = radioGroup;
  return (
    <div className="radioBtn">
      <input
        className="radioBtn-input"
        type="radio"
        defaultChecked={defaultChecked}
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
