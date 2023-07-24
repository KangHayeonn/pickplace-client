import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/modules';
import logo from '../../assets/images/logo.svg';
import '../../styles/components/layout/header.scss';
import TextButton from '../common/TextButton';
// redux
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { setLogout } from '../../store/modules/auth';

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  // redux
  const dispatch: ThunkDispatch<void, void, AnyAction> = useDispatch();

  const logout = async () => {
    await dispatch(setLogout())
      .then(() => {
        navigate('/');
        return;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
    // logout api logic
  };

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src={logo}></img>
        <h1>PickPlace</h1>
      </div>
      {!isLogin ? (
        <div className="buttons">
          <div className="button">
            <TextButton text="회원가입" onClick={() => navigate('/signup')} />
          </div>
          <div className="button">
            <TextButton
              text="로그인"
              classType="secondary short"
              onClick={() => navigate('/login')}
            />
          </div>
        </div>
      ) : (
        <div className="buttons">
          <div className="button">
            <TextButton text="로그아웃" onClick={() => logout()} />
          </div>
          <div className="button">
            <TextButton
              text="내 정보"
              classType="secondary short"
              onClick={() => navigate('/mypage')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
