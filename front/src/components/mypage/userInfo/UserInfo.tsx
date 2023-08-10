import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateUserInfo from './UpdateUserInfo';
import ShowUserInfo from '../ShowUserInfo';
import '../../../styles/components/mypage/userInfo/userInfo.scss';
import User from '../../../api/mypage';
import useModals from '../../../components/common/modal/UseModals';
import ConfirmModal from '../../../components/common/modal/ConfirmModal';
import Api from '../../../api/auth';
import { getUserId, clearToken } from '../../../utils/tokenControl';
import { isShowError } from '../../../components/common/ToastBox';

const UserInfo = () => {
  const navigate = useNavigate();
  const userId = typeof window !== 'undefined' && getUserId();
  const [userInfo, setUserInfo] = useState({
    email: '',
    phone: '',
    nickname: '',
  });
  const [newNickname, setNewNickname] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [updateNickname, setUpdateNickname] = useState(false);
  const [updatePhone, setUpdatePhone] = useState(false);
  const { openModal } = useModals();

  const handlerMemberDelete = () => {
    openModal(ConfirmModal, {
      onSubmit: async () => {
        await Api.v1DeleteMember(Number(userId)).then((res) => {
          if (res.data.code === 200) {
            isShowError('회원 탈퇴가 완료되었습니다.');
            clearToken();
            window.location.replace('/main');
          }
        });
      },
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    User.v1GetUserInfo()
      .then((res) => {
        setUserInfo(res.data.data.member);
        setNewNickname(res.data.data.member.nickname);
        setNewPhone(res.data.data.member.phone);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const onUpdateNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    User.v1UpdateNickname(newNickname)
      .then((res) => {
        setUserInfo({
          ...userInfo,
          nickname: newNickname,
        });
        getUserInfo();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
    setUpdateNickname(false);
  };
  const onUpdatePhone = (e: React.MouseEvent<HTMLButtonElement>) => {
    User.v1UpdatePhone(newPhone)
      .then((res) => {
        setUserInfo({
          ...userInfo,
          phone: newPhone,
        });
        getUserInfo();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
    setUpdatePhone(false);
  };
  const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.currentTarget.value);
  };
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhone(e.currentTarget.value);
  };

  const onNicknameUpdateCancle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUpdateNickname(false);
    setNewNickname(userInfo.nickname);
  };
  const onPhoneUpdateCancle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUpdatePhone(false);
    setNewPhone(userInfo.phone);
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
            value={newNickname}
            onCancleBtnClick={onNicknameUpdateCancle}
            onChangeSearch={onNicknameChange}
            onClickUpdate={onUpdateNickname}
          />
        ) : (
          <ShowUserInfo
            title={'닉네임'}
            content={userInfo.nickname}
            setUpdateState={setUpdateNickname}
          />
        )}
      </div>
      <div className="userInfo-phone">
        {updatePhone ? (
          <UpdateUserInfo
            title={'전화번호 변경'}
            value={newPhone}
            onChangeSearch={onPhoneChange}
            onCancleBtnClick={onPhoneUpdateCancle}
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
        <button onClick={() => navigate('/pwd')}>비밀번호 변경</button>
        <button onClick={handlerMemberDelete}>회원탈퇴</button>
      </div>
    </div>
  );
};

export default UserInfo;
