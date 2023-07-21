import React, { useState, useEffect } from 'react';
import ReservedCard from './ReservedCard';

import Admin from '../../../api/admin';
import '../../../styles/components/admin/manageReservation/manageReservation.scss';
// import { adminReservationList } from '../../../utils/mock/adminReservationList';
import { adminReservation } from '../types';

const ManageReservation = () => {
  const [adminReservationList, setAdminReservationList] =
    useState<adminReservation[]>();

  useEffect(() => {
    getAdminReservations();
  }, []);

  const getAdminReservations = () => {
    Admin.v1GetReservations()
      .then((res) => {
        // setAdminReservationList(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  return (
    <div className="manageReservation">
      {adminReservationList ? (
        adminReservationList.map((item, key) => (
          <div key={key}>
            <p>{item.placeName}</p>
            {item.rooms.map((item, key) => (
              <ReservedCard key={key} adminReservationProps={item} />
            ))}
          </div>
        ))
      ) : (
        <div>
          <p>예약 내역이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default ManageReservation;
