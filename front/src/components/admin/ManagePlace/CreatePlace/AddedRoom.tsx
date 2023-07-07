import React from 'react';

import { addedRoomProps } from '../../types';
import '../../../../styles/components/admin/managePlace/createPlace/addedRoom.scss';

const AddedRoom = ({ newRoomList, onClickDeleteRoomBtn }: addedRoomProps) => {
  return (
    <div className="AddedRoom-container">
      <h4 className="AddedRoom-header">추가한 방</h4>
      {newRoomList.length > 0 ? (
        newRoomList.map((item, key) => (
          <div className="AddedRoom-content" key={key}>
            <div className="AddedRoom-Info">
              <span className="AddedRoom-roomName">{item.roomName}</span>
              <span>/</span>
              <span className="AddedRoom-roomPrice">{item.roomPrice} 원</span>
              <span>/</span>
              <span className="AddedRoom-roomPersonnel">
                {item.roomPersonnel} 명
              </span>
              <span>/</span>
              <span className="AddedRoom-roomCount">{item.roomCount} 개</span>
            </div>
            <button
              className="AddedRoom-deleteBtn"
              onClick={onClickDeleteRoomBtn(item.roomId ? item.roomId : -1)}
            >
              삭제
            </button>
          </div>
        ))
      ) : (
        <span className="AddedRoom-noList">없음</span>
      )}
    </div>
  );
};

export default AddedRoom;
