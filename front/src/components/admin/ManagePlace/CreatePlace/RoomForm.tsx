import React from 'react';
import TextField from '../../../common/TextField';
import { roomFormProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/roomForm.scss';

const RoomForm = ({
  newRoomInfo,
  onRoomNameChange,
  onRoomPriceChange,
  onPersonnelChange,
  onroomAmountChange,
  onAddNewRoom,
}: roomFormProps) => {
  return (
    <div className="RoomForm-container">
      <h3 className="RoomForm-header">방 등록</h3>
      <div className="RoomForm-textField__container">
        <label className="RoomForm-textField__label">방 이름</label>
        <TextField
          onChangeText={onRoomNameChange}
          value={newRoomInfo.roomName}
          placeholder={'방 이름을 입력해주세요'}
        />
      </div>
      <div className="RoomForm-textField__container">
        <label className="RoomForm-textField__label">방 가격</label>
        <TextField
          onChangeText={onRoomPriceChange}
          value={newRoomInfo.roomPrice}
        />
      </div>
      <div className="RoomForm-textField__container">
        <label className="RoomForm-textField__label">방 인원</label>
        <TextField
          onChangeText={onPersonnelChange}
          value={newRoomInfo.roomMaxNum}
        />
      </div>
      <div className="RoomForm-textField__container">
        <label className="RoomForm-textField__label">방 개수</label>
        <TextField
          onChangeText={onroomAmountChange}
          value={newRoomInfo.roomAmount}
        />
      </div>
      <div className="RoomForm-btn__container">
        <button className="RoomForm-addBtn" onClick={onAddNewRoom}>
          방 추가
        </button>
      </div>
    </div>
  );
};

export default RoomForm;
