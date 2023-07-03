import React from 'react';
import '../../styles/components/admin/managePlace/managePlace.scss';
import { adminPlaceList } from '../../utils/adminPlaceList';
import PlaceCard from './PlaceCard';

const ManagePlace = () => {
  return (
    <div className="managePlace">
      {adminPlaceList.map((item, key) => (
        <PlaceCard key={key} adminPlaceProps={item} />
      ))}
    </div>
  );
};

export default ManagePlace;
