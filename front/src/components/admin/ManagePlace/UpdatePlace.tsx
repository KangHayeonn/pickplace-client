import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PlaceForm from './CreatePlace/PlaceForm';
import RoomForm from './CreatePlace/RoomForm';
import AddedRoom from './CreatePlace/AddedRoom';
import '../../../styles/components/admin/managePlace/createPlace/createPlace.scss';
import {
  roomProps,
  placeProps,
  newRoomProps,
  placeOptionsProps,
} from '../types';
import {
  adminPlaceList,
  adminRoomList,
} from '../../../utils/mock/adminPlaceList';

const UpdatePlace = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const defaultNewRoomForm = {
    roomName: '',
    roomPrice: '0',
    roomPersonnel: '1',
    roomCount: '1',
    roomId: undefined,
  };

  const [placeInfo, setPlaceInfo] = useState<placeProps>({
    placeName: adminPlaceList[0].placeName,
    address: adminPlaceList[0].placeAddress.address,
    phone: adminPlaceList[0].placePhone,
  });

  const [newRoomInfo, setNewRoomInfo] =
    useState<newRoomProps>(defaultNewRoomForm);

  const [newRoomList, setRoomList] = useState<roomProps[]>(adminRoomList);

  const [placeOptions, setPlaceOptions] = useState<placeOptionsProps>({
    category: {
      name: adminPlaceList[0].category.name,
      id: adminPlaceList[0].category.id,
    },
    tagId: [],
  });

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
      roomPrice: e.currentTarget.value,
    });
  };
  const onPersonnelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      roomPersonnel: e.currentTarget.value,
    });
  };
  const onRoomCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      roomCount: e.currentTarget.value,
    });
  };
  const onAddNewRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newRoomInfo.roomName == '') window.alert('방 이름을 입력해주세요');
    else if (newRoomInfo.roomPrice == '')
      window.alert('방 가격을 입력해주세요');
    else if (newRoomInfo.roomPersonnel == '')
      window.alert('방 인원을 입력해주세요');
    else if (newRoomInfo.roomCount == '')
      window.alert('방 개수를 입력해주세요');
    else if (isNaN(parseInt(newRoomInfo.roomPrice))) {
      window.alert('방 가격을 숫자로 입력해주세요');
    } else if (isNaN(parseInt(newRoomInfo.roomPersonnel))) {
      window.alert('방 인원을 숫자로 입력해주세요');
    } else if (isNaN(parseInt(newRoomInfo.roomCount))) {
      window.alert('방 개수를 숫자로 입력해주세요');
    } else {
      setRoomList([
        ...newRoomList,
        {
          roomName: newRoomInfo.roomName,
          roomPrice: parseInt(newRoomInfo.roomPrice),
          roomPersonnel: parseInt(newRoomInfo.roomPersonnel),
          roomCount: parseInt(newRoomInfo.roomCount),
          roomId: undefined,
        },
      ]);
      setNewRoomInfo(defaultNewRoomForm);
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
        // delete room api
      }
    };
  };

  return (
    <div className="createPlace-container">
      <PlaceForm
        header={'공간 수정'}
        newPlaceInfo={placeInfo}
        placeOptions={placeOptions}
        setPlaceOptions={setPlaceOptions}
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
