import React from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/qrCodeModal.scss';
import searchIcon from '../../../assets/images/searchIcon.svg';

interface QRCodeModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const QRCodeModal = ({ onClose, handleSubmit }: QRCodeModalProps) => {
  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="네이버페이" onClickEvent={onClickClose}>
      <div>
        <div className="qrcode-modal-form__top">
          <div className="qrcode-modal-form__top--title">
            (주) 픽플레이스컴퍼니
          </div>
          <div className="qrcode-modal-form__top--text">99,000원</div>
        </div>
        <div className="qrcode-modal-form__wrapper">
          <div className="qrcode-modal-form__box toss">
            <img src={searchIcon} alt="QRCode" />
          </div>
        </div>
        <div className="qrcode-modal-form__footer">
          <div className="qrcode-modal-form__footer--btn">
            <TextButton text="다음" onClick={onClickEvent} />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default QRCodeModal;
