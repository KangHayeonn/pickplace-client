import React, { useState } from 'react';
import '../../styles/components/mypage/userInfo.scss';
import UpdateUserInfo from './UpdateUserInfo';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    email: 'pickplace@gmail.com',
    phone: '010-1234-5678',
    nickName: 'pickplace',
  });

  const [updateNickname, setUpdateNickname] = useState(false);
  const [updatePhone, setUpdatePhone] = useState(false);

  // useEffect(() => {
  //   Mypage.getUserInfo()
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       return Promise.reject(err);
  //     });
  // }, []);

  const onUpdateNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   Mypage.updateNickname()
    //     .then((res) => {
    //       return res;
    //     })
    //     .catch((err) => {
    //       return Promise.reject(err);
    //     });
    setUpdateNickname(false);
  };
  const onUpdatePhone = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   Mypage.updatePhone()
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
      <div className="userInfo-email">
        <p>이메일</p>
        <p>{userInfo.email}</p>
      </div>
      <div className="userInfo-nickName">
        {updateNickname ? (
          <UpdateUserInfo
            title={'닉네임 변경'}
            search={userInfo.nickName}
            onChangeSearch={onNicknameChange}
            setUpdateState={setUpdateNickname}
            onClickUpdate={onUpdateNickname}
          />
        ) : (
          <>
            <div className="nickName-content">
              <p>닉네임</p>
              <p>{userInfo.nickName}</p>
            </div>
            <div className="update-btn">
              <button onClick={() => setUpdateNickname(true)}>변경하기</button>
            </div>
          </>
        )}
      </div>
      <div className="userInfo-phone">
        {updatePhone ? (
          <UpdateUserInfo
            title={'전화번호 변경'}
            search={userInfo.phone}
            onChangeSearch={onPhoneChange}
            setUpdateState={setUpdatePhone}
            onClickUpdate={onUpdatePhone}
          />
        ) : (
          <>
            <div className="phone-content">
              <p>전화번호</p>
              <p>{userInfo.phone}</p>
            </div>
            <div className="update-btn">
              <button onClick={() => setUpdatePhone(true)}>변경하기</button>
            </div>
          </>
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
