import React, { useState, useEffect } from 'react';
import ResevationCard from './ResevationCard';
import User from '../../../api/mypage';
import '../../../styles/components/mypage/reservation/reservationCard.scss';
import { reservationProps } from './types';

const Reservation = () => {
  const [reservationList, setReservationList] = useState<reservationProps[]>();

  useEffect(() => {
    getUserReservations();
  }, []);

  const getUserReservations = () => {
    User.v1GetUserReservations()
      .then((res) => {
        setReservationList(res.data.data.reservation);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  return (
    <div className="reservation">
      {reservationList &&
        reservationList.length > 0 &&
        reservationList.map((item, key) => (
          <ResevationCard key={key} reservationProps={item} />
        ))}
    </div>
  );
};

export default Reservation;
