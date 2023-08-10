import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showToast } from '../store/modules/common';
import Loading from '../components/common/Loading';
import Api from '../api/auth';
import {
  setUserId,
  setNickName,
  setAccessToken,
  setRefreshToken,
  setRole,
} from '../utils/tokenControl';
import { setSocialLogin } from '../store/modules/auth';
import { isShowError } from '../components/common/ToastBox';

const RedirectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');
  const [loading, setLoading] = useState<boolean>(true);

  const kakaoLogin = async () => {
    if (code) {
      setLoading(true);
      await Api.v1KakaoLogin(code)
        .then((res) => {
          if (res.data.code === 200) {
            const { member } = res.data.data;
            dispatch(setSocialLogin());
            setLoading(false);
            setUserId(`${member.memberId}`);
            setNickName(member.nickname);
            setAccessToken(member.accessToken);
            setRefreshToken(member.refreshToken);
            setRole(member.role);
            navigate('/main');
            dispatch(showToast('로그인을 성공하였습니다.'));
          } else {
            isShowError('에러가 발생하였습니다.');
          }
        })
        .catch((err) => {
          navigate('/login');
          return Promise.reject(err);
        });
    }
  };

  useEffect(() => {
    kakaoLogin();
  }, [code]);

  return <div>{loading ? <Loading /> : null}</div>;
};

export default RedirectPage;
