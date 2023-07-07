import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PlaceHeader from './PlaceHeader';
import RadioButton from '../../../components/common/RadioButton';
import RadioGroup from '../../common/RadioGroupContext';
import RoomCard from './RoomCard';
import ReservedCard from '../../admin/ManageReservation/ReservedCard';

import { adminReservationList } from '../../../utils/mock/adminReservationList';
import { adminPlaceList } from '../../../utils/mock/adminPlaceList';
import { adminRoomList } from '../../../utils/mock/adminPlaceList';
import leftArrow from '../../../assets/images/arrow-left.svg';
import '../../../styles/components/admin/managePlace/managePlaceDetail.scss';

const ManagePlaceDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const managePlaceTabs = [
    { value: '0', name: '방조회' },
    { value: '1', name: '예약조회' },
  ];
  const [clickedMenu, setClickedMenu] = useState(0);

  const onClickHeaderBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClickedMenu(parseInt(e.currentTarget.value));
  };

  // useEffect(() => {
  //   Mypage.getAdmiPlaceDetail(state.id)
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       return Promise.reject(err);
  //     });
  // }, []);

  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/mypage');
  };

  return (
    <div className="managePlace-detail">
      <div className="managePlace-detail__header">
        <div className="managePlace-detail__img--container">
          <button
            className="managePlace-detail__back--btn"
            onClick={onClickBack}
          >
            <img className="managePlace-detail__leftArrow" src={leftArrow} />
          </button>
        </div>
        <PlaceHeader
          placeName={adminPlaceList[0].placeName}
          placePhone={adminPlaceList[0].placePhone}
          address={adminPlaceList[0].placeAddress.address}
        />
      </div>
      <div className="managePlace-detail__btn--container">
        <RadioGroup onRadioChange={onClickHeaderBtn}>
          {managePlaceTabs.map((item, key) => (
            <RadioButton key={key} value={item.value}>
              {item.name}
            </RadioButton>
          ))}
        </RadioGroup>
        <button className="addPlace-btn">공간 추가</button>
      </div>
      <div className="managePlace-detail__content">
        {clickedMenu === 0 &&
          adminRoomList.map((item, key) => (
            <RoomCard key={key} roomProps={item} />
          ))}
        {clickedMenu === 1 &&
          adminReservationList.map((item, key) => (
            <ReservedCard key={key} adminReservationProps={item} />
          ))}
      </div>
    </div>
  );
};

export default ManagePlaceDetail;
