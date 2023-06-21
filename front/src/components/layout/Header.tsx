import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import '../../styles/components/layout/header.scss';
import TextButton from '../common/TextButton';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src={logo}></img>
        <h1>PickPlace</h1>
      </div>
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
    </div>
  );
};
export default Header;
