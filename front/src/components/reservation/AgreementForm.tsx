import React from 'react';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/agreementForm.scss';
import CheckBox from '../../components/common/CheckBox';

const AgreementForm = () => {
  return (
    <div className="reservation__item">
      <div className="reservation__item--title">
        <div className="reservation__item--check">
          <CheckBox />
          <span className="secondary">동의 정보</span>
        </div>
      </div>
      <div className="agreement__form">
        <div className="agreement__form--check-btn">
          <CheckBox text="숙소 이용 및 취소/환불규정 동의 (필수)" />
        </div>
        <div className="agreement__form--check-btn">
          <CheckBox text="개인정보 수집 및 이용 동의 (필수)" />
        </div>
        <div className="agreement__form--check-btn">
          <CheckBox text="결제대행 서비스 약관 동의 (필수)" />
        </div>
        <div className="agreement__form--check-btn">
          <CheckBox text="개인정보 제3자 제공 동의 (선택)" />
        </div>
      </div>
    </div>
  );
};

export default AgreementForm;
