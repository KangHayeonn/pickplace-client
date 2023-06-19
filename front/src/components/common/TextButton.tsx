import React from 'react';
import '../../styles/components/common/textButton.scss';

interface ButtonProps {
  text?: string | undefined;
  disabled?: boolean | undefined;
  classType?: string | undefined; // default: basic
  onClick: React.MouseEventHandler<HTMLElement>;
}

const TextButton = ({
  text,
  disabled = false,
  classType,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`text-btn ${classType}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default TextButton;
