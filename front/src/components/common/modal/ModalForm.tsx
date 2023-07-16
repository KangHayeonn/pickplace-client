import React from 'react';
import '../../../styles/components/common/modalForm.scss';
import CloseIcon from '../../../assets/images/close_big.svg';

interface ModalFormProps {
  title?: string | undefined;
  onClickEvent?: () => void;
  children: JSX.Element;
}

const ModalForm = ({ title, onClickEvent, children }: ModalFormProps) => {
  return (
    <div className="modal-container">
      <div className="modal-form">
        <div className="modal-form__title">
          <h3 className="modal-form__title--logo">{title}</h3>
          <img
            src={CloseIcon}
            width={23}
            height={23}
            alt="Close Modal Icon"
            onClick={onClickEvent}
          />
        </div>
        <div className="modal-form__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalForm;
