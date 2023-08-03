import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PlaceHeader from './PlaceHeader';
import RadioButton from '../../../components/common/RadioButton';
import RadioGroup from '../../common/RadioGroupContext';
import RoomCard from './RoomCard';
import ReservedCard from '../../admin/ManageReservation/ReservedCard';
import DeleteConfirmModal from '../../../components/mypage/DeleteConfirmModal';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';
import Admin from '../../../api/admin';
import { roomProps, reservedRoom, adminPlaceProps } from '../types';
import leftArrow from '../../../assets/images/arrow-left.svg';
import '../../../styles/components/admin/managePlace/managePlaceDetail.scss';
import { isShowError } from '../../../components/common/ToastBox';

const ManagePlaceDetail = () => {
  const navigate = useNavigate();
  const urlParams = new URL(location.href).pathname.split('/');
  const id = parseInt(urlParams[urlParams.length - 1]);

  const managePlaceTabs = [
    { value: '0', name: '방조회', defualtcheck: true },
    { value: '1', name: '예약조회' },
  ];
  const [clickedMenu, setClickedMenu] = useState(0);
  const [adminReservationList, setAdminReservationList] =
    useState<reservedRoom[]>();

  const [adminRoomList, setAdminRoomList] = useState<roomProps[]>();
  const [placeInfo, setPlaceInfo] = useState<adminPlaceProps>();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  useEffect(() => {
    getAdminDetailReservation();
    getAdminDetailRoom();
  }, []);

  const getAdminDetailRoom = () => {
    Admin.v1GetPlaceDetailRoom(id)
      .then((res) => {
        setAdminRoomList(res.data.data.room);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getAdminDetailReservation = () => {
    Admin.v1GetPlaceDetailResevations(id)
      .then((res) => {
        setAdminReservationList(res.data.data.reservation);
        setPlaceInfo(res.data.data.place);
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
    placeInfo &&
      navigate(`/mypage/managePlace/updatePlace/${id}`, {
        state: {
          placeId: placeInfo.placeId,
          placeCategory: placeInfo.placeCategory,
        },
      });
  };
  const onDeletePlace = (id: number) => {
    Admin.v1DeletePlace(id)
      .then((res) => {
        isShowError('공간 삭제 완료');
        navigate(`/mypage`);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  return (
    <>
      {confirmModalOpen && (
        <DeleteConfirmModal
          title={'공간 삭제'}
          content={'삭제 시 공간을 복구할 수 없습니다. 정말 삭제하시겠습니까?'}
          onClose={onCloseConfirmModal}
          onSelectDelete={onDeletePlace}
          id={id}
        />
      )}

      <div className="managePlace-detail">
        <div className="managePlace-detail__header">
          {placeInfo && (
            <div
              className="managePlace-detail__img--container"
              style={{
                backgroundImage: `url(${GetCategoryImage(
                  placeInfo.placeCategory,
                )})`,
              }}
            >
              <button
                className="managePlace-detail__back--btn"
                onClick={onClickBack}
              >
                <img
                  className="managePlace-detail__leftArrow"
                  src={leftArrow}
                />
              </button>
            </div>
          )}
          {placeInfo && (
            <PlaceHeader
              placeName={placeInfo.placeName}
              placePhone={placeInfo.placePhone}
              address={placeInfo.placeAddress}
              placeCategory={placeInfo.placeCategory}
            />
          )}
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
            <button
              className="deletePlace-btn"
              onClick={() => setConfirmModalOpen(true)}
            >
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
                  placeCategory={placeInfo ? placeInfo.placeCategory : ''}
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
                <ReservedCard
                  key={key}
                  adminReservationProps={item}
                  placeCategory={
                    placeInfo?.placeCategory ? placeInfo?.placeCategory : ''
                  }
                  placeName={placeInfo?.placeName ? placeInfo?.placeName : ''}
                />
              ))
            ) : (
              <div>
                <p>예약 내역이 없습니다.</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManagePlaceDetail;
