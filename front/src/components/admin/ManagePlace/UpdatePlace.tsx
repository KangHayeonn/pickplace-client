import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PlaceForm from './CreatePlace/PlaceForm';
import RoomForm from './CreatePlace/RoomForm';
import AddedRoom from './CreatePlace/AddedRoom';
import '../../../styles/components/admin/managePlace/createPlace/createPlace.scss';
import { roomProps, placeProps } from '../types';
import {
  adminPlaceList,
  adminRoomList,
} from '../../../utils/mock/adminPlaceList';

const UpdatePlace = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const defaultRoomInfo = {
    roomName: '',
    roomPrice: 0,
    roomPersonnel: 1,
    roomCount: 1,
    roomId: undefined,
  };
  const [placeInfo, setPlaceInfo] = useState<placeProps>({
    placeName: adminPlaceList[0].placeName,
    address: adminPlaceList[0].placeAddress.address,
    phone: adminPlaceList[0].placePhone,
  });
  const [newRoomInfo, setNewRoomInfo] = useState<roomProps>(defaultRoomInfo);
  const [newRoomList, setRoomList] = useState<roomProps[]>(adminRoomList);

  const onPlaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceInfo({
      ...placeInfo,
      placeName: e.currentTarget.value,
    });
  };
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceInfo({
      ...placeInfo,
      address: e.currentTarget.value,
    });
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceInfo({
      ...placeInfo,
      phone: e.currentTarget.value,
    });
  };
  const onRoomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      roomName: e.currentTarget.value,
    });
  };
  const onRoomPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      roomPrice: parseInt(e.currentTarget.value),
    });
  };
  const onPersonnelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      roomPersonnel: parseInt(e.currentTarget.value),
    });
  };
  const onRoomCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      roomCount: parseInt(e.currentTarget.value),
    });
  };
  const onAddNewRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newRoomInfo.roomName == '') window.alert('방 이름을 입력해주세요');
    else if (newRoomInfo.roomPrice == null)
      window.alert('방 가격을 입력해주세요');
    else if (newRoomInfo.roomPersonnel == null)
      window.alert('방 인원을 입력해주세요');
    else if (newRoomInfo.roomCount == null)
      window.alert('방 개수를 입력해주세요');
    else {
      setRoomList([...newRoomList, newRoomInfo]);
      setNewRoomInfo(defaultRoomInfo);
    }
  };
  const onCancleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm('정말로 수정을 취소하시겠습니까?')) {
      navigate('/mypage');
    }
  };
  const onUpdateBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (placeInfo.placeName == '') {
      window.alert('공간 이름을 입력해주세요');
    } else if (placeInfo.address == '') {
      window.alert('주소를 입력해주세요');
    } else if (placeInfo.phone == '') {
      window.alert('연락처를 입력해주세요');
    } else {
      // updateApi
      navigate('/mypage');
    }
  };
  const onClickDeleteRoomBtn = (roomId: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      const deletedList = newRoomList.filter((item) => item.roomId !== roomId);
      setRoomList(deletedList);
      if (roomId !== -1) {
        //   Mypage.deleteRoom(state.id)
        //     .then((res) => {
        //       return res;
        //     })
        //     .catch((err) => {
        //       return Promise.reject(err);
        //     });
      }
    };
  };

  return (
    <div className="createPlace-container">
      <PlaceForm
        header={'공간 수정'}
        newPlaceInfo={placeInfo}
        onPlaceNameChange={onPlaceNameChange}
        onAddressChange={onAddressChange}
        onPhoneChange={onPhoneChange}
      />
      <RoomForm
        newRoomInfo={newRoomInfo}
        onRoomNameChange={onRoomNameChange}
        onRoomPriceChange={onRoomPriceChange}
        onPersonnelChange={onPersonnelChange}
        onRoomCountChange={onRoomCountChange}
        onAddNewRoom={onAddNewRoom}
      />
      <AddedRoom
        newRoomList={newRoomList}
        onClickDeleteRoomBtn={onClickDeleteRoomBtn}
      />
      <div className="createPlace-btn__container">
        <button className="createPlace-cancelBtn" onClick={onCancleBtnClick}>
          등록취소
        </button>
        <button className="createPlace-createBtn" onClick={onUpdateBtnClick}>
          공간수정
        </button>
      </div>
    </div>
  );
};

export default UpdatePlace;
