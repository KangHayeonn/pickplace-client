import React from 'react';
import '../../styles/components/admin/manageReservation/manageReservation.scss';
import { adminReservationList } from '../../utils/mock/adminReservationList';
import ReservedCard from './ReservedCard';

const ManageReservation = () => {
  return (
    <div className="manageReservation">
      {adminReservationList.map((item, key) => (
        <ReservedCard key={key} adminReservationProps={item} />
      ))}
    </div>
  );
};

export default ManageReservation;
