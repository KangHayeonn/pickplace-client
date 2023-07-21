import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceCard from './PlaceCard';
import '../../../styles/components/admin/managePlace/managePlace.scss';
import Admin from '../../../api/admin';
import { adminPlaceProps } from '../types';

const ManagePlace = () => {
  const navigate = useNavigate();
  const [adminPlaceList, setAdminPlaceList] = useState<adminPlaceProps[]>([]);

  useEffect(() => {
    getAdminPlaceList();
  }, []);

  const getAdminPlaceList = () => {
    Admin.v1GetAdminPlace()
      .then((res) => {
        setAdminPlaceList(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const onClickAddPlaceBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/mypage/managePlace/createPlace`);
  };

  return (
    <div className="managePlace">
      {adminPlaceList.map((item, key) => (
        <PlaceCard key={key} adminPlace={item} />
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
