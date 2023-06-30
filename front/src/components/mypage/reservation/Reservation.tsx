import React from 'react';
import ResevationCard from './ResevationCard';
import { reservationList } from '../../../utils/reservationList';
import '../../../styles/components/mypage/reservation/reservationCard.scss';

const Reservation = () => {
  return (
    <div className="reservation">
      {reservationList.map((item, key) => (
        <ResevationCard key={key} reservationProps={item} />
      ))}
    </div>
  );
};

export default Reservation;
