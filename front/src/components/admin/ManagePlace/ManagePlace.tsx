import React from 'react';
import PlaceCard from './PlaceCard';

import '../../../styles/components/admin/managePlace/managePlace.scss';
import { adminPlaceList } from '../../../utils/mock/adminPlaceList';

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
