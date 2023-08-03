import React from 'react';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/accountModal.scss';
import KBStartIcon from '../../../assets/images/kbstar-bank.svg';
import KEBHanaIcon from '../../../assets/images/kebhana-bank.svg';
import ShinhanIcon from '../../../assets/images/shinhan-bank.svg';
import WooriIcon from '../../../assets/images/woori-bank.svg';

interface AccountModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const AccountModal = ({ onClose, handleSubmit }: AccountModalProps) => {
  const onClickEvent = () => {
    handleSubmit();
  };
  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="간편 계좌 이체" onClickEvent={onClickClose}>
      <div>
        <div className="account-modal-form__top">
          <div className="account-modal-form__top--title">
            (주) 픽플레이스컴퍼니
          </div>
          <div className="account-modal-form__top--text">99,000원</div>
        </div>
        <div className="account-modal-form__content">
          <div className="account-modal-form__content--text">
            결제할 은행을 선택해주세요.
          </div>
          <div className="account-modal-form__bank">
            <div className="account-modal-form__bank--box checked">
              <img src={KBStartIcon} alt="국민은행" />
              <div className="account-modal-form__bank--text">국민은행</div>
            </div>
            <div className="account-modal-form__bank--box">
              <img src={KEBHanaIcon} alt="하나은행" />
              <div className="account-modal-form__bank--text">하나은행</div>
            </div>
            <div className="account-modal-form__bank--box">
              <img src={ShinhanIcon} alt="신한은행" />
              <div className="account-modal-form__bank--text">신한은행</div>
            </div>
            <div className="account-modal-form__bank--box">
              <img src={WooriIcon} alt="우리은행" />
              <div className="account-modal-form__bank--text">우리은행</div>
            </div>
          </div>
        </div>
        <div className="account-modal-form__footer">
          <div className="account-modal-form__footer--btn">
            <TextButton text="다음" onClick={onClickEvent} />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default AccountModal;
