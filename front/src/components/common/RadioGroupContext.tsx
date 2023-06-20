import React, { createContext } from 'react';
import '../../styles/components/common/radioButton.scss';

interface RadioGroupProps {
  children: React.ReactNode;
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface contextProps {
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroupContext = createContext<contextProps | null>(null);
const RadioGroup = ({ children, onRadioChange }: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{ onRadioChange }}>
      <div className="radioGroup">{children}</div>
    </RadioGroupContext.Provider>
  );
};
export default RadioGroup;
