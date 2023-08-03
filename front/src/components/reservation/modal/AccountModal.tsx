import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/accountModal.scss';
import KBStartIcon from '../../../assets/images/kbstar-bank.svg';
import KEBHanaIcon from '../../../assets/images/kebhana-bank.svg';
import ShinhanIcon from '../../../assets/images/shinhan-bank.svg';
import WooriIcon from '../../../assets/images/woori-bank.svg';
import { RootState } from '../../../store/modules';
import { setAccount } from '../../../store/modules/reservation';

interface AccountModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

const AccountModal = ({ onClose, handleSubmit }: AccountModalProps) => {
  const dispatch = useDispatch();
  const { payment } = useSelector((state: RootState) => state.reservation);
  const [checkAccount, setCheckAccount] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ]);

  const changeAccount = (index: number) => {
    const tempArr = [false, false, false, false, false];
    tempArr[index] = true;
    setCheckAccount(tempArr);
  };

  const setAccountType = (index: number, type: string) => {
    changeAccount(index);
    dispatch(
      setAccount({
        paymentAccountType: type,
      }),
    );
  };

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
          <div className="account-modal-form__top--text">
            {payment.roomPrice.toLocaleString()}원
          </div>
        </div>
        <div className="account-modal-form__content">
          <div className="account-modal-form__content--text">
            결제할 은행을 선택해주세요.
          </div>
          <div className="account-modal-form__bank">
            <div
              className={`account-modal-form__bank--box ${
                checkAccount[0] && 'checked'
              }`}
              onClick={() => setAccountType(0, '국민은행')}
            >
              <img src={KBStartIcon} alt="국민은행" />
              <div className="account-modal-form__bank--text">국민은행</div>
            </div>
            <div
              className={`account-modal-form__bank--box ${
                checkAccount[1] && 'checked'
              }`}
              onClick={() => setAccountType(1, '하나은행')}
            >
              <img src={KEBHanaIcon} alt="하나은행" />
              <div className="account-modal-form__bank--text">하나은행</div>
            </div>
            <div
              className={`account-modal-form__bank--box ${
                checkAccount[2] && 'checked'
              }`}
              onClick={() => setAccountType(2, '신한은행')}
            >
              <img src={ShinhanIcon} alt="신한은행" />
              <div className="account-modal-form__bank--text">신한은행</div>
            </div>
            <div
              className={`account-modal-form__bank--box ${
                checkAccount[3] && 'checked'
              }`}
              onClick={() => setAccountType(3, '우리은행')}
            >
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
