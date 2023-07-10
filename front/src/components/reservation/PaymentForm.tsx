import React from 'react';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/paymentForm.scss';
import DropDown from '../../components/common/DropDown';
import kakaoPayIcon from '../../assets/images/kakao-pay.svg';
import tossPayIcon from '../../assets/images/toss-pay.svg';
import naverPayIcon from '../../assets/images/naver-pay.svg';
import saleEventIcon from '../../assets/images/event-icon.svg';

const PaymentForm = () => {
  const cardTypeList = ['현대', '삼성', '국민', '신한', '우리', '카카오뱅크'];
  const payTypeList = ['일시불', '3개월(무이자)', '6개월', '12개월'];

  return (
    <div className="reservation__item">
      <div className="reservation__item--title">
        <span>결제 수단</span>
      </div>
      <div className="payment__form--radio">
        <div className="payment__form--radio-btn">
          <img src={kakaoPayIcon} width={55} height={25} alt="Kakao Pay Icon" />
          <img
            src={saleEventIcon}
            width={45}
            height={30}
            alt="Sale Event Icon"
            className="sale-icon"
          />
        </div>
        <div className="payment__form--radio-btn">
          <img src={tossPayIcon} width={85} height={30} alt="Toss Pay Icon" />
          <img
            src={saleEventIcon}
            width={45}
            height={30}
            alt="Sale Event Icon"
            className="sale-icon"
          />
        </div>
        <div className="payment__form--radio-btn">신용/체크 카드</div>
        <div className="payment__form--radio-btn">간편 계좌 이체</div>
        <div className="payment__form--radio-btn">
          <img src={naverPayIcon} width={90} height={30} alt="Naver Pay Icon" />
        </div>
      </div>
      <div className="payment__form--dropdown">
        <DropDown dropDownList={cardTypeList} defaultText={cardTypeList[0]} />
        <DropDown dropDownList={payTypeList} defaultText={payTypeList[0]} />
      </div>
    </div>
  );
};

export default PaymentForm;
