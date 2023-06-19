import React, { useEffect, SetStateAction } from 'react';
import '../../styles/components/common/toastBox.scss';

interface ToastBoxProps {
  text?: string | undefined;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}

const ToastBox = ({ text, setIsShow }: ToastBoxProps) => {
  useEffect(() => {
    const close = setTimeout(() => {
      setIsShow(false);
    }, 3000);
    return () => {
      clearTimeout(close);
    };
  }, [setIsShow]);

  return <div className="toast">{text}</div>;
};

export default ToastBox;
