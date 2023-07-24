import React, { useState, useEffect } from 'react';
import ResevationCard from './ResevationCard';
import User from '../../../api/mypage';
import '../../../styles/components/mypage/reservation/reservationCard.scss';
import { reservationList } from '../../../utils/mock/reservationList';

const Reservation = () => {
  // const [reservationList, setReservationList] = useState();

  useEffect(() => {
    // getUserReservations();
  }, []);

  const getUserReservations = () => {
    User.v1GetUserReservations()
      .then((res) => {
        // setReservationList(res.data.data)
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  return (
    <div className="reservation">
      {reservationList.map((item, key) => (
        <ResevationCard key={key} reservationProps={item} />
      ))}
    </div>
  );
};

export default Reservation;
