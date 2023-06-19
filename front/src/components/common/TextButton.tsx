import React from 'react';
import '../../styles/components/common/textButton.scss';

interface ButtonProps {
  text?: string | undefined;
  disabled?: boolean | undefined;
  fontSize?: number | undefined;
  background?: string | undefined;
  color?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  weight?: number | undefined;
  border?: boolean | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const TextButton = ({
  text,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className="text-btn secondary short"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default TextButton;
