import React, { useState } from 'react';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/paymentInfo.scss';
import arrowDownIcon from '../../assets/images/arrowDown.svg';
import arrowUpIcon from '../../assets/images/arrowUp.svg';

const PaymentInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="reservation__item">
      <div className="reservation__item--title secondary">
        <span>결제 정보</span>
      </div>
      <div className="payment__info-detail">
        <div className="payment__info-detail--title">
          결제 정보
          <img
            src={`${!isOpen ? arrowDownIcon : arrowUpIcon}`}
            width={15}
            height={15}
            alt="DropDown Button"
            onClick={() => setIsOpen((open) => !open)}
          />
        </div>
        {isOpen && (
          <div className="payment__info-detail--box">
            <div className="payment__info-detail--box__item">
              <span className="title">주문 금액</span>
              <span className="amount">104,000원</span>
            </div>
            <div className="payment__info-detail--box__item">
              <span className="title">할인/부가결제</span>
              <span className="amount">-5000원</span>
            </div>
          </div>
        )}
      </div>
      <div className="payment__info-total">
        <span className="title">총 결제금액</span>
        <span className="amount">99,000원</span>
      </div>
    </div>
  );
};

export default PaymentInfo;
