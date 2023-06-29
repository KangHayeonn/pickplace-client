import React from 'react';
import TextField from '../common/TextField';
import '../../styles/components/mypage/updateUserInfo.scss';
import * as type from './types';

const UpdateUserInfo = ({
  title,
  value,
  onChangeSearch,
  setUpdateState,
  onClickUpdate,
}: type.updateUserInfoProps) => {
  return (
    <div className="updateUserInfo">
      <h4>{title}</h4>
      <div className="textField-container">
        <TextField onChangeText={onChangeSearch} value={value} />
      </div>
      <div className="updateUserInfo-btn__container">
        <button onClick={() => setUpdateState(false)}>취소</button>
        <button onClick={onClickUpdate}>수정</button>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
