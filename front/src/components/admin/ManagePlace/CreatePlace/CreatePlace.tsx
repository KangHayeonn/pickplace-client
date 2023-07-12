import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceForm from './PlaceForm';
import RoomForm from './RoomForm';
import AddedRoom from './AddedRoom';
import '../../../../styles/components/admin/managePlace/createPlace/createPlace.scss';
import {
  roomProps,
  placeProps,
  newRoomProps,
  placeOptionsProps,
} from '../../types';
import { categoryList } from '../../../../utils/mock/categoryList';

const CreatePlace = () => {
  const navigate = useNavigate();
  const defaultNewRoomForm = {
    roomName: '',
    roomPrice: '0',
    roomPersonnel: '1',
    roomCount: '1',
    roomId: undefined,
  };

  const [newPlaceInfo, setNewPlaceInfo] = useState<placeProps>({
    placeName: '',
    address: '',
    phone: '',
  });
  const [newRoomInfo, setNewRoomInfo] =
    useState<newRoomProps>(defaultNewRoomForm);

  const [newRoomList, setRoomList] = useState<roomProps[]>([]);

  const [placeOptions, setPlaceOptions] = useState<placeOptionsProps>({
    category: { name: categoryList[0].name, id: categoryList[0].id },
    tagId: [],
  });

  const onPlaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlaceInfo({
      ...newPlaceInfo,
      placeName: e.currentTarget.value,
    });
  };
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlaceInfo({
      ...newPlaceInfo,
      address: e.currentTarget.value,
    });
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlaceInfo({
      ...newPlaceInfo,
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
          roomId: -1,
        },
      ]);
      setNewRoomInfo(defaultNewRoomForm);
    }
  };
  const onCancleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm('정말로 작성을 취소하시겠습니까?')) {
      navigate('/mypage');
    }
  };
  const onCreateBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newPlaceInfo.placeName == '') {
      window.alert('공간 이름을 입력해주세요');
    } else if (newPlaceInfo.address == '') {
      window.alert('주소를 입력해주세요');
    } else if (newPlaceInfo.phone == '') {
      window.alert('연락처를 입력해주세요');
    } else {
      // createApi
      navigate('/mypage');
    }
  };
  const onClickDeleteRoomBtn = (roomId: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      const deletedList = newRoomList.filter((item) => item.roomId !== roomId);
      setRoomList(deletedList);
    };
  };

  return (
    <div className="createPlace-container">
      <PlaceForm
        header={'신규 공간 등록'}
        newPlaceInfo={newPlaceInfo}
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
        <button className="createPlace-createBtn" onClick={onCreateBtnClick}>
          공간등록
        </button>
      </div>
    </div>
  );
};

export default CreatePlace;
