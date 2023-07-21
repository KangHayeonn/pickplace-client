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
        console.log(res.data.data);
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
          <ReservedCard key={key} adminReservationProps={item} />
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
