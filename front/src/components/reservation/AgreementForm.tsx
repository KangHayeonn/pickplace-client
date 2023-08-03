import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/components/reservation/reservationTemplate.scss';
import '../../styles/components/reservation/agreementForm.scss';
import CheckBox from '../../components/common/CheckBox';
import { setAgreement } from '../../store/modules/reservation';

const AgreementForm = () => {
  const dispatch = useDispatch();
  const [checkAgreement, setCheckAgreement] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ]);

  const changeAgreement = (index: number) => {
    const tempArr = [...checkAgreement];
    tempArr[index] = !tempArr[index];
    setCheckAgreement(tempArr);
  };

  useEffect(() => {
    dispatch(setAgreement({ agreement: checkAgreement }));
  }, [checkAgreement]);

  return (
    <div className="reservation__item">
      <div className="reservation__item--title">
        <div className="reservation__item--check">
          <span className="secondary">동의 정보</span>
        </div>
      </div>
      <div className="agreement__form">
        <div className="agreement__form--check-btn">
          <CheckBox
            text="숙소 이용 및 취소/환불규정 동의 (필수)"
            handleClick={() => changeAgreement(0)}
            index={0}
          />
        </div>
        <div className="agreement__form--check-btn">
          <CheckBox
            text="개인정보 수집 및 이용 동의 (필수)"
            handleClick={() => changeAgreement(1)}
            index={1}
          />
        </div>
        <div className="agreement__form--check-btn">
          <CheckBox
            text="결제대행 서비스 약관 동의 (필수)"
            handleClick={() => changeAgreement(2)}
            index={2}
          />
        </div>
        <div className="agreement__form--check-btn">
          <CheckBox
            text="개인정보 제3자 제공 동의 (선택)"
            handleClick={() => changeAgreement(3)}
            index={3}
          />
        </div>
      </div>
    </div>
  );
};

export default AgreementForm;
