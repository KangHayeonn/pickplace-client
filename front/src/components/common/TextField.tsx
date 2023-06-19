import React, { useState } from 'react';
import '../../styles/components/common/textField.scss';
import eyeOnIcon from '../../assets/images/eyeOn.svg';
import eyeOffIcon from '../../assets/images/eyeOff.svg';

interface TextProps {
  disabled?: boolean | undefined;
  className?: string | undefined;
  placeholder?: string | undefined;
  isError?: boolean | undefined;
  errorMessage?: string | undefined;
  message?: string | undefined;
  textType?: string | undefined;
  inputType?: string | undefined;
  onChangeText?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField = ({
  disabled,
  className,
  placeholder,
  isError,
  errorMessage,
  textType,
  inputType,
  onChangeText,
}: TextProps) => {
  const [type, setType] = useState<string>(textType || 'text');

  const showPw = () => {
    if (type === 'text') setType('password');
    else setType('text');
  };

  return (
    <div className="text-container">
      <div className="text-field">
        <input
          type={type}
          className={`text-field__input ${className}`}
          placeholder={placeholder}
          onChange={onChangeText}
          disabled={disabled}
        />
        {inputType === 'pw' ? (
          <img
            src={`${type === 'text' ? eyeOffIcon : eyeOnIcon}`}
            width={27}
            height={27}
            alt="Password Show Icon"
            onClick={showPw}
          />
        ) : null}
      </div>
      <div className={`text-field__message ${isError && 'error'}`}>
        {isError ? errorMessage : ''}
      </div>
    </div>
  );
};

export default TextField;
