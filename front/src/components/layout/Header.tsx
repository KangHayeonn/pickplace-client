import React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../styles/components/layout/header.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate('./')}>
        <img src={logo}></img>
        <h1>PickPlace</h1>
      </div>
      <div className="buttons">
        <button className="button signup" onClick={() => navigate('./signup')}>
          회원가입
        </button>
        <button className="button login" onClick={() => navigate('./login')}>
          로그인
        </button>
      </div>
    </div>
  );
};
export default Header;
