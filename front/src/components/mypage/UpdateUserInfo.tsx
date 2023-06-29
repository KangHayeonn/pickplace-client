import React, { useState } from 'react';
import TextField from '../common/TextField';
import '../../styles/components/mypage/updateUserInfo.scss';

type updateUserInfoProps = {
  title: string;
  search: string;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
  onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const UpdateUserInfo = ({
  title,
  search,
  onChangeSearch,
  setUpdateState,
  onClickUpdate,
}: updateUserInfoProps) => {
  return (
    <div className="updateUserInfo">
      <h4>{title}</h4>
      <div className="textField-container">
        <TextField onChangeText={onChangeSearch} value={search} />
      </div>
      <div className="updateUserInfo-btn__container">
        <button onClick={() => setUpdateState(false)}>취소</button>
        <button onClick={onClickUpdate}>수정</button>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
