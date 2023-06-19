import React from 'react';
import '../../styles/components/common/textButton.scss';

interface ButtonProps {
  text?: string | undefined;
  disabled?: boolean | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const TextButton = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      className="text-btn secondary short"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default TextButton;
