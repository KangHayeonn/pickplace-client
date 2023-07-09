import React from 'react';
import '../../styles/components/reservation/reservationTemplate.scss';

interface ReservationTemplateProps {
  children?: React.ReactNode;
}

const ReservationTemplate = ({ children }: ReservationTemplateProps) => {
  const pay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : pay api logic
  };

  return (
    <div className="reservation-container">
      <form className="reservation-container__form" onSubmit={pay}>
        {children}
        <button type="submit" className="reservation__btn">
          99,000원 결제하기
        </button>
      </form>
    </div>
  );
};

export default ReservationTemplate;
