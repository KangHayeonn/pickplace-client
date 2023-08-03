import React from 'react';
import Header from '../components/mypage/Header';
import Reservation from '../components/mypage/reservation/Reservation';
import UserInfo from '../components/mypage/userInfo/UserInfo';
import ManagePlace from '../components/admin/ManagePlace/ManagePlace';
import ManageReservation from '../components/admin/ManageReservation/ManageReservation';
import MyReview from '../components/mypage/review/MyReview';
import '../styles/components/mypage/mypage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/modules';
import { setRadioState } from '../store/modules/radio';

const MyPage = () => {
  const dispatch = useDispatch();

  const clickedMenu = useSelector(
    (state: RootState) => state.radioReducer.clickedBtn,
  );
  const onClickHeaderButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRadioState(parseInt(e.currentTarget.value)));
  };

  return (
    <div className="mypage">
      <div className="mypage-header">
        <Header onClickHeaderButton={onClickHeaderButton} />
      </div>
      <div className="mypage-content">
        {clickedMenu === 0 && <Reservation />}
        {clickedMenu === 1 && <UserInfo />}
        {clickedMenu === 2 && <MyReview />}
        {clickedMenu === 3 && <ManagePlace />}
        {clickedMenu === 4 && <ManageReservation />}
      </div>
    </div>
  );
};

export default MyPage;
