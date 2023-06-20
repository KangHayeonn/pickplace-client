import React from 'react';
import '../../styles/components/common/textButton.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text?: string | undefined;
  disabled?: boolean | undefined;
  classType?: string | undefined; // default: basic
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const TextButton = ({
  type = 'button',
  text,
  disabled = false,
  classType,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-btn ${classType}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default TextButton;
