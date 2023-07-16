import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PlaceForm from './CreatePlace/PlaceForm';
import AddressForm from './CreatePlace/AddressForm';
import RoomForm from './CreatePlace/RoomForm';
import AddedRoom from './CreatePlace/AddedRoom';
import OptionForm from './CreatePlace/OptionForm';
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
import { confirmToAddRoom, confirmToPost } from './PlaceManageFunc';

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
    x: adminPlaceList[0].placeAddress.longitude,
    y: adminPlaceList[0].placeAddress.latitude,
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
  const onAddressChange = (address: string, x: string, y: string) => {
    setPlaceInfo({
      ...placeInfo,
      address: address,
      x: parseFloat(x),
      y: parseFloat(y),
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
    if (confirmToAddRoom(newRoomInfo)) {
      setRoomList([
        ...newRoomList,
        {
          roomName: newRoomInfo.roomName,
          roomPrice: parseInt(newRoomInfo.roomPrice),
          roomPersonnel: parseInt(newRoomInfo.roomPersonnel),
          roomCount: parseInt(newRoomInfo.roomCount),
          roomId: -1,
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
    if (confirmToPost(placeInfo)) {
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
        newPlaceInfo={placeInfo}
        header={'공간 수정'}
        onPlaceNameChange={onPlaceNameChange}
        onPhoneChange={onPhoneChange}
      />
      <AddressForm onAddressChange={onAddressChange} newPlaceInfo={placeInfo} />
      <OptionForm
        placeOptions={placeOptions}
        setPlaceOptions={setPlaceOptions}
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
