import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceCard from './PlaceCard';

import '../../../styles/components/admin/managePlace/managePlace.scss';
import { adminPlaceList } from '../../../utils/mock/adminPlaceList';

const ManagePlace = () => {
  const navigate = useNavigate();
  const onClickAddPlaceBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/mypage/managePlace/createPlace`);
  };
  return (
    <div className="managePlace">
      {adminPlaceList.map((item, key) => (
        <PlaceCard key={key} adminPlaceProps={item} />
      ))}
      <div className="managePlace-btn__container">
        <button className="addPlace-btn" onClick={onClickAddPlaceBtn}>
          공간추가
        </button>
      </div>
    </div>
  );
};

export default ManagePlace;
