import React, { useState } from 'react';
import TextField from '../../common/TextField';
import '../../../styles/components/admin/managePlace/updateRoomInfo.scss';
import { updateRoomInfoProps } from '../types';

const UpdateRoomInfo = ({
  roomInfo,
  setUpdateState,
  onClickUpdateBtn,
}: updateRoomInfoProps) => {
  const [newRoomInfo, setNewRoomInfo] = useState({
    newRoomName: roomInfo.roomName,
    newRoomPrice: roomInfo.roomPrice,
    newroomMaxNum: roomInfo.roomMaxNum,
    newroomAmount: roomInfo.roomAmount,
  });
  const onChangeRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      newRoomName: e.currentTarget.value,
    });
  };
  const onChangeRoomPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      newRoomPrice: parseInt(e.currentTarget.value),
    });
  };

  const onChangeroomMaxNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      newroomMaxNum: parseInt(e.currentTarget.value),
    });
  };

  const onChangeroomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoomInfo({
      ...newRoomInfo,
      newroomAmount: parseInt(e.currentTarget.value),
    });
  };

  return (
    <div className="updateRoomInfo">
      <div className="roomCard-img__container" />
      <h4 className="updateRoomInfo-header">방 정보 변경</h4>
      <div className="updateRoomInfo-textField__container">
        <label className="updateRoomInfo-textField__label">방 이름</label>
        <TextField
          onChangeText={onChangeRoomName}
          value={newRoomInfo.newRoomName}
        />
      </div>
      <div className="updateRoomInfo-textField__container">
        <label className="updateRoomInfo-textField__label">가격</label>
        <TextField
          textType={'number'}
          onChangeText={onChangeRoomPrice}
          value={newRoomInfo.newRoomPrice}
        />
      </div>
      <div className="updateRoomInfo-textField__container">
        <label className="updateRoomInfo-textField__label">방 인원</label>
        <TextField
          textType={'number'}
          onChangeText={onChangeroomMaxNum}
          value={newRoomInfo.newroomMaxNum}
        />
      </div>
      <div className="updateRoomInfo-textField__container">
        <label className="updateRoomInfo-textField__label">방 개수</label>
        <TextField
          textType={'number'}
          onChangeText={onChangeroomAmount}
          value={newRoomInfo.newroomAmount}
        />
      </div>
      <div className="updateRoomInfo-btn__container">
        <button
          className="deleteRoomInfo-btn"
          onClick={() => {
            setUpdateState(false);
          }}
        >
          취소
        </button>
        <button
          className="updateRoomInfo-btn"
          onClick={onClickUpdateBtn(
            newRoomInfo.newRoomName,
            newRoomInfo.newRoomPrice,
            newRoomInfo.newroomMaxNum,
            newRoomInfo.newroomAmount,
          )}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default UpdateRoomInfo;
