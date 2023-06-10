import React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../styles/header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo}></img>
        <h1>PickPlace</h1>
      </div>
      <div className="buttons">
        <button className="button signup">회원가입</button>
        <button className="button login">로그인</button>
      </div>
    </div>
  );
};
export default Header;
