import React, { useState } from 'react';
import UpdateUserInfo from './UpdateUserInfo';
import ShowUserInfo from '../ShowUserInfo';
import '../../../styles/components/mypage/userInfo/userInfo.scss';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    email: 'pickplace@gmail.com',
    phone: '010-1234-5678',
    nickName: 'pickplace',
  });

  const [updateNickname, setUpdateNickname] = useState(false);
  const [updatePhone, setUpdatePhone] = useState(false);

  const onUpdateNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   Mypage.updateNickname(memberId,userInfo.nickName)
    //     .then((res) => {
    //       return res;
    //     })
    //     .catch((err) => {
    //       return Promise.reject(err);
    //     });
    setUpdateNickname(false);
  };
  const onUpdatePhone = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   Mypage.updatePhone(memberId,userInfo.phone)
    //     .then((res) => {
    //       return res;
    //     })
    //     .catch((err) => {
    //       return Promise.reject(err);
    //     });
    setUpdatePhone(false);
  };
  const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      nickName: e.target.value,
    });
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      phone: e.target.value,
    });
  };

  return (
    <div className="userInfo">
      <ShowUserInfo
        title={'이메일'}
        content={userInfo.email}
        parentClassname={'userInfo-email'}
      />
      <div className="userInfo-nickName">
        {updateNickname ? (
          <UpdateUserInfo
            title={'닉네임 변경'}
            value={userInfo.nickName}
            onChangeSearch={onNicknameChange}
            setUpdateState={setUpdateNickname}
            onClickUpdate={onUpdateNickname}
          />
        ) : (
          <ShowUserInfo
            title={'닉네임'}
            content={userInfo.nickName}
            setUpdateState={setUpdateNickname}
          />
        )}
      </div>
      <div className="userInfo-phone">
        {updatePhone ? (
          <UpdateUserInfo
            title={'전화번호 변경'}
            value={userInfo.phone}
            onChangeSearch={onPhoneChange}
            setUpdateState={setUpdatePhone}
            onClickUpdate={onUpdatePhone}
          />
        ) : (
          <ShowUserInfo
            title={'전화번호'}
            content={userInfo.phone}
            setUpdateState={setUpdatePhone}
          />
        )}
      </div>
      <div className="userInfo-btn__container">
        <button>비밀번호변경</button>
        <button>회원탈퇴</button>
      </div>
    </div>
  );
};

export default UserInfo;
