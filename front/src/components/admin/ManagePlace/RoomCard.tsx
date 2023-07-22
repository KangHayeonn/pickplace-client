import React, { useState } from 'react';
import ShowCardInfo from '../../mypage/ShowCardInfo';
import UpdateRoomInfo from './UpdateRoomInfo';
import { roomCardProps } from '../types';
import '../../../styles/components/admin/managePlace/roomCard.scss';

const RoomCard = ({ roomProps }: roomCardProps) => {
  const [roomInfo, setRoomInfo] = useState({
    roomName: roomProps.roomName,
    roomPrice: roomProps.roomPrice,
    roomId: roomProps.roomId,
    roomMaxNum: roomProps.roomMaxNum,
    roomAmount: roomProps.roomAmount,
  });
  const [updateState, setUpdateState] = useState<boolean>(false);

  const onClickDeleteBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('삭제');
  };

  const onClickUpdateBtn = (
    newRoomName: string,
    newRoomPrice: number,
    newroomMaxNum: number,
    newroomAmount: number,
  ) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      //room update api
      setRoomInfo({
        ...roomInfo,
        roomName: newRoomName,
        roomPrice: newRoomPrice,
        roomMaxNum: newroomMaxNum,
        roomAmount: newroomAmount,
      });
      setUpdateState(false);
    };
  };
  return (
    <div className="roomCard-container" key={roomProps.roomId}>
      {updateState ? (
        <div className="roomCard-update__container">
          <div className="roomCard-img__container" />
          <UpdateRoomInfo
            roomInfo={roomInfo}
            setUpdateState={setUpdateState}
            onClickUpdateBtn={onClickUpdateBtn}
          />
        </div>
      ) : (
        <div className="roomCard-show__container">
          <div className="roomCard-img__container" />
          <div className="roomCard-right__container">
            <div className="roomCard-header">
              <h2 className="roomCard-placeName">{roomInfo.roomName}</h2>
            </div>
            <div className="roomCard-content">
              <ShowCardInfo
                childClassname={'price'}
                title={'가격'}
                content={roomInfo.roomPrice + ' 원'}
              />
              <ShowCardInfo
                childClassname={'personnel'}
                title={'인원 수'}
                content={roomInfo.roomMaxNum + ' 명'}
              />
              <ShowCardInfo
                childClassname={'count'}
                title={'방 개수'}
                content={roomInfo.roomAmount + ' 개'}
              />
            </div>
            <div className="managePlace-detail__btn--container">
              <button
                className="managePlace-detail__delete--btn"
                onClick={onClickDeleteBtn}
              >
                삭제
              </button>
              <button
                className="managePlace-detail__update--btn"
                onClick={() => setUpdateState(true)}
              >
                수정
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
