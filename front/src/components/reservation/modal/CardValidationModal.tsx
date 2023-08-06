import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalForm from '../../../components/common/modal/ModalForm';
import TextButton from '../../../components/common/TextButton';
import '../../../styles/components/reservation/modal/cardValidationModal.scss';
import { RootState } from '../../../store/modules';
import { setCard } from '../../../store/modules/reservation';
import { isShowError } from '../../../components/common/ToastBox';

interface CardValidationModalProps {
  onClose: () => void;
  handleSubmit: () => Promise<void>;
}

interface CardType {
  cardNum: string;
  cvc: string;
}

const CardValidationModal = ({
  onClose,
  handleSubmit,
}: CardValidationModalProps) => {
  const dispatch = useDispatch();
  const { payment } = useSelector((state: RootState) => state.reservation);
  const [cardType, setCardType] = useState<CardType>({
    cardNum: '',
    cvc: '',
  });

  const setCardNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardType({
      ...cardType,
      cardNum: String(e.target.value),
    });
  };

  const setCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardType({
      ...cardType,
      cvc: String(e.target.value),
    });
  };

  const onClickEvent = () => {
    if (cardType.cardNum === '') {
      isShowError('카드 번호를 입력해주세요.');
    } else if (cardType.cvc === '') {
      isShowError('cvc 번호를 입력해주세요.');
    } else {
      dispatch(setCard({ card: cardType }));
      handleSubmit();
    }
  };

  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalForm title="일반 결제" onClickEvent={onClickClose}>
      <div>
        <div className="card-validation-modal-form__top">
          <div className="card-validation-modal-form__top--title">
            (주) 픽플레이스컴퍼니
          </div>
          <div className="card-validation-modal-form__top--text">
            {payment.roomPrice.toLocaleString()}원
          </div>
        </div>
        <div className="card-validation-modal-form__content">
          <div className="card-validation-modal-form__content--text">
            카드 번호
          </div>
          <input
            type="text"
            className="card-validation-modal-form__content--input"
            placeholder="카드번호 - 없이 입력"
            autoComplete="off"
            maxLength={16}
            onChange={(e) => setCardNum(e)}
          />
        </div>
        <div className="card-validation-modal-form__content">
          <div className="card-validation-modal-form__content--text">
            CVC 번호
          </div>
          <input
            type="text"
            className="card-validation-modal-form__content--input"
            placeholder="CVC번호 뒤 3자리"
            autoComplete="off"
            maxLength={3}
            onChange={(e) => setCVC(e)}
          />
        </div>
        <div className="card-validation-modal-form__footer">
          <div className="card-validation-modal-form__footer--btn">
            <TextButton
              text="결제"
              classType="secondary long"
              onClick={onClickEvent}
            />
          </div>
        </div>
      </div>
    </ModalForm>
  );
};

export default CardValidationModal;
