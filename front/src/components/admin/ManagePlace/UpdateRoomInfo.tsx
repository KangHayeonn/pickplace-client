import React, { useState } from 'react';
import TextField from '../../common/TextField';
import '../../../styles/components/admin/managePlace/updateRoomInfo.scss';
import { updateRoomInfoProps } from '../types';

const UpdateRoomInfo = ({
  roomInfo,
  setUpdateState,
  onClickUpdateBtn,
}: updateRoomInfoProps) => {
  const [newRoomName, setNewRoomName] = useState(roomInfo.roomName);
  const [newRoomPrice, setNewRoomPrice] = useState(
    roomInfo.roomPrice.toString(),
  );
  const onChangeRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomName(e.currentTarget.value);
  };
  const onChangeRoomPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomPrice(e.currentTarget.value);
  };

  return (
    <div className="updateRoomInfo">
      <h4 className="updateRoomInfo-header">방 정보 변경</h4>
      <div className="updateRoomInfo-textField__container">
        <TextField onChangeText={onChangeRoomName} value={newRoomName} />
      </div>
      <div className="updateRoomInfo-textField__container">
        <TextField
          onChangeText={onChangeRoomPrice}
          value={newRoomPrice.toString()}
        />
      </div>
      <div className="updateRoomInfo-btn__container">
        <button
          className="updateRoomInfo-btn"
          onClick={() => setUpdateState(false)}
        >
          취소
        </button>
        <button
          className="updateRoomInfo-btn"
          onClick={onClickUpdateBtn(newRoomName, newRoomPrice)}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default UpdateRoomInfo;
