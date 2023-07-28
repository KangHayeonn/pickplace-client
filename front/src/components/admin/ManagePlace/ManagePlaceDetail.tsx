import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PlaceHeader from './PlaceHeader';
import RadioButton from '../../../components/common/RadioButton';
import RadioGroup from '../../common/RadioGroupContext';
import RoomCard from './RoomCard';
import ReservedCard from '../../admin/ManageReservation/ReservedCard';

import Admin from '../../../api/admin';
import { roomProps, reservedRoom } from '../types';
import leftArrow from '../../../assets/images/arrow-left.svg';
import '../../../styles/components/admin/managePlace/managePlaceDetail.scss';

const ManagePlaceDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const managePlaceTabs = [
    { value: '0', name: '방조회', defualtcheck: true },
    { value: '1', name: '예약조회' },
  ];
  const [clickedMenu, setClickedMenu] = useState(0);

  const [adminReservationList, setAdminReservationList] =
    useState<reservedRoom[]>();

  const [adminRoomList, setAdminRoomList] = useState<roomProps[]>();

  useEffect(() => {
    getAdminDetailReservation();
    getAdminDetailRoom();
  }, []);

  const getAdminDetailRoom = () => {
    Admin.v1GetPlaceDetailRoom(state.placeId)
      .then((res) => {
        setAdminRoomList(res.data.data.room);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getAdminDetailReservation = () => {
    Admin.v1GetPlaceDetailResevations(state.placeId)
      .then((res) => {
        setAdminReservationList(res.data.data.reservation);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onClickHeaderBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClickedMenu(parseInt(e.currentTarget.value));
  };
  const onClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/mypage');
  };
  const onUpdateBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/mypage/managePlace/updatePlace/${state.placeId}`, {
      state: {
        placeId: state.placeId,
      },
    });
  };
  const onDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm('정말로 해당 공간을 삭제하시겠습니까?')) {
      Admin.v1DeletePlace(state.placeId)
        .then((res) => {
          navigate(`/mypage`);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
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
          placeName={state.placeName}
          placePhone={state.placePhone}
          address={state.placeAddress}
        />
      </div>
      <div className="managePlace-detail__btn--container">
        <RadioGroup onRadioChange={onClickHeaderBtn}>
          {managePlaceTabs.map((item, key) => (
            <RadioButton
              key={key}
              value={item.value}
              defaultChecked={item.defualtcheck}
            >
              {item.name}
            </RadioButton>
          ))}
        </RadioGroup>
        <div className="managePlace-manage__btn--container">
          <button className="updatePlace-btn" onClick={onUpdateBtnClick}>
            공간 수정
          </button>
          <button className="deletePlace-btn" onClick={onDeleteBtnClick}>
            공간 삭제
          </button>
        </div>
      </div>
      <div className="managePlace-detail__content">
        {clickedMenu === 0 &&
          (adminRoomList && adminRoomList.length > 0 ? (
            adminRoomList.map((item, key) => (
              <RoomCard
                key={key}
                roomProps={item}
                getAdminDetailRoom={getAdminDetailRoom}
              />
            ))
          ) : (
            <div>
              <p>등록된 방이 없습니다.</p>
            </div>
          ))}
        {clickedMenu === 1 &&
          (adminReservationList && adminReservationList.length > 0 ? (
            adminReservationList.map((item, key) => (
              <ReservedCard key={key} adminReservationProps={item} />
            ))
          ) : (
            <div>
              <p>예약 내역이 없습니다.</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ManagePlaceDetail;
