import React, { useState } from 'react';
import Header from '../components/mypage/Header';
import Reservation from '../components/mypage/reservation/Reservation';
import UserInfo from '../components/mypage/userInfo/UserInfo';
import ManagePlace from '../components/admin/ManagePlace/ManagePlace';
import ManageReservation from '../components/admin/ManageReservation/ManageReservation';
import '../styles/components/mypage/mypage.scss';

const MyPage = () => {
  const [clickedMenu, setClickedMenu] = useState(0);

  const onClickHeaderButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClickedMenu(parseInt(e.currentTarget.value));
  };

  return (
    <div className="mypage">
      <div className="mypage-header">
        <Header onClickHeaderButton={onClickHeaderButton} />
      </div>
      <div className="mypage-content">
        {clickedMenu === 0 && <Reservation />}
        {clickedMenu === 1 && <UserInfo />}
        {clickedMenu === 2 && <ManagePlace />}
        {clickedMenu === 3 && <ManageReservation />}
      </div>
    </div>
  );
};

export default MyPage;