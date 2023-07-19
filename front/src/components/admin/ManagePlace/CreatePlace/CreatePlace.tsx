import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceForm from './PlaceForm';
import AddressForm from './AddressForm';
import RoomForm from './RoomForm';
import OptionForm from './OptionForm';
import AddedRoom from './AddedRoom';
import '../../../../styles/components/admin/managePlace/createPlace/createPlace.scss';
import {
  roomProps,
  placeProps,
  newRoomProps,
  placeOptionsProps,
} from '../../types';
import { categoryList } from '../../../../utils/mock/categoryList';
import { confirmToAddRoom, confirmToPost } from '../PlaceManageFunc';
import Admin from '../../../../api/admin';

const CreatePlace = () => {
  const navigate = useNavigate();
  const defaultNewRoomForm = {
    roomName: '',
    roomPrice: '0',
    roomMaxNum: '1',
    roomAmount: '1',
    roomId: -1,
  };

  const [newPlaceInfo, setNewPlaceInfo] = useState<placeProps>({
    placeName: '',
    address: '',
    phone: '',
    x: 0,
    y: 0,
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
  const onAddressChange = (address: string, x: string, y: string) => {
    setNewPlaceInfo({
      ...newPlaceInfo,
      address: address,
      x: parseFloat(x),
      y: parseFloat(y),
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
      roomMaxNum: e.currentTarget.value,
    });
  };
  const onroomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      roomAmount: e.currentTarget.value,
    });
  };
  const onAddNewRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (confirmToAddRoom(newRoomInfo)) {
      setRoomList([
        ...newRoomList,
        {
          roomName: newRoomInfo.roomName,
          roomPrice: parseInt(newRoomInfo.roomPrice),
          roomMaxNum: parseInt(newRoomInfo.roomMaxNum),
          roomAmount: parseInt(newRoomInfo.roomAmount),
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
    if (confirmToPost(newPlaceInfo)) {
      const rooms = [];

      for (let i = 0; i < newRoomList.length; i++) {
        const { roomId, ...room } = newRoomList[i];
        rooms.push(room);
      }

      const data = {
        place: {
          placeAddress: newPlaceInfo.address,
          placeName: newPlaceInfo.placeName,
          placePhone: newPlaceInfo.phone,
        },
        rooms: rooms,
      };
      Admin.v1CreatePlace(data)
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
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
        newPlaceInfo={newPlaceInfo}
        header={'신규 공간 등록'}
        onPlaceNameChange={onPlaceNameChange}
        onPhoneChange={onPhoneChange}
      />
      <AddressForm
        onAddressChange={onAddressChange}
        newPlaceInfo={newPlaceInfo}
      />
      <OptionForm
        placeOptions={placeOptions}
        setPlaceOptions={setPlaceOptions}
      />
      <RoomForm
        newRoomInfo={newRoomInfo}
        onRoomNameChange={onRoomNameChange}
        onRoomPriceChange={onRoomPriceChange}
        onPersonnelChange={onPersonnelChange}
        onroomAmountChange={onroomAmountChange}
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
