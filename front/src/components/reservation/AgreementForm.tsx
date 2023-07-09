import React from 'react';
import '../../styles/components/reservation/reservationTemplate.scss';
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
    </div>
  );
};

export default AgreementForm;
