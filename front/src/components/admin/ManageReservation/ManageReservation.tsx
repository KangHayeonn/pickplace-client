import React, { useState, useEffect } from 'react';
import ReservedCard from './ReservedCard';
import Admin from '../../../api/admin';
import '../../../styles/components/admin/manageReservation/manageReservation.scss';
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
        setAdminReservationList(res.data.data.placeList);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  return (
    <div className="manageReservation">
      {adminReservationList && adminReservationList.length > 0 ? (
        adminReservationList.map((item, key) => (
          <div key={key} className="manageReservation-place__container">
            <h3 className="manageReservation-placeName">{item.placeName}</h3>
            <div className="manageReservation-place__reservations">
              {item.reservations.map((item, key) => (
                <ReservedCard key={key} adminReservationProps={item} />
              ))}
            </div>
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
