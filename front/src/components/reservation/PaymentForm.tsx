import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/paymentForm.scss';
import DropDown from '../../components/common/DropDown';
import kakaoPayIcon from '../../assets/images/kakao-pay.svg';
import tossPayIcon from '../../assets/images/toss-pay.svg';
import naverPayIcon from '../../assets/images/naver-pay.svg';
import saleEventIcon from '../../assets/images/event-icon.svg';
import { setPaymentType } from '../../store/modules/reservation';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const cardTypeList = ['현대', '삼성', '국민', '신한', '우리', '카카오뱅크'];
  const payTypeList = ['일시불', '3개월(무이자)', '6개월', '12개월'];
  const [checkPayment, setCheckPayment] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const changePayment = (index: number) => {
    const tempArr = [false, false, false, false, false];
    tempArr[index] = true;
    setCheckPayment(tempArr);
  };

  const setPayment = (index: number, type: string) => {
    changePayment(index);
    dispatch(
      setPaymentType({
        paymentType: type,
      }),
    );
  };

  return (
    <div className="reservation__item">
      <div className="reservation__item--title">
        <span>결제 수단</span>
      </div>
      <div className="payment__form--radio">
        <div
          className={`payment__form--radio-btn ${checkPayment[0] && 'checked'}`}
          onClick={() => setPayment(0, '카카오페이')}
        >
          <img src={kakaoPayIcon} width={55} height={25} alt="Kakao Pay Icon" />
          <img
            src={saleEventIcon}
            width={45}
            height={30}
            alt="Sale Event Icon"
            className="sale-icon"
          />
        </div>
        <div
          className={`payment__form--radio-btn ${checkPayment[1] && 'checked'}`}
          onClick={() => setPayment(1, '토스페이')}
        >
          <img src={tossPayIcon} width={85} height={30} alt="Toss Pay Icon" />
          <img
            src={saleEventIcon}
            width={45}
            height={30}
            alt="Sale Event Icon"
            className="sale-icon"
          />
        </div>
        <div
          className={`payment__form--radio-btn ${checkPayment[2] && 'checked'}`}
          onClick={() => setPayment(2, '일반')}
        >
          신용/체크 카드
        </div>
        <div
          className={`payment__form--radio-btn ${checkPayment[3] && 'checked'}`}
          onClick={() => setPayment(3, '간편 계좌 이체')}
        >
          간편 계좌 이체
        </div>
        <div
          className={`payment__form--radio-btn ${checkPayment[4] && 'checked'}`}
          onClick={() => setPayment(4, '네이버페이')}
        >
          <img src={naverPayIcon} width={90} height={30} alt="Naver Pay Icon" />
        </div>
      </div>
      {checkPayment[2] && (
        <div className="payment__form--dropdown">
          <DropDown dropDownList={cardTypeList} defaultText={cardTypeList[0]} />
          <DropDown dropDownList={payTypeList} defaultText={payTypeList[0]} />
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
