import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainPage from '../pages/MainPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import RedirectPage from '../pages/RedirectPage';
import SamplePage from '../pages/SamplePage';
import SearchPage from '../pages/SearchPage';
import SearchDetailPage from '../pages/SearchDetailPage';
import PasswordPage from '../pages/PasswordPage';
import MailPage from '../pages/MailPage';
import MyPage from '../pages/MyPage';
import ReservationDetail from '../components/mypage/reservation/ReservationDetail';
import ManageReservationDetail from '../components/admin/ManageReservation/ManageReservationDetail';
import ManagePlaceDetail from '../components/admin/ManagePlace/ManagePlaceDetail';
import ReservationPage from '../pages/ReservationPage';
import CreatePlace from '../components/admin/ManagePlace/CreatePlace/CreatePlace';
import UpdatePlace from '../components/admin/ManagePlace/UpdatePlace';
// qr test
import QRPasswordPage from '../pages/QRPasswordPage';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="/sample" element={<SamplePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/search/:searchId/detail"
            element={<SearchDetailPage />}
          />
          <Route
            path="/search/:searchId/review"
            element={<SearchDetailPage />}
          />
          <Route
            path="/reservation"
            element={
              <PrivateRoute>
                <ReservationPage />
              </PrivateRoute>
            }
          />
          <Route path="/pwd" element={<PasswordPage />} />
          <Route path="/mail" element={<MailPage />} />
          <Route
            path="/mypage"
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="mypage/reservationDetail/:reservationId"
            element={
              <PrivateRoute>
                <ReservationDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="mypage/manageReservation/detail/:reservationId"
            element={
              <PrivateRoute>
                <ManageReservationDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="mypage/managePlace/detail/:placeId"
            element={
              <PrivateRoute>
                <ManagePlaceDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/mypage/managePlace/createPlace"
            element={
              <PrivateRoute>
                <CreatePlace />
              </PrivateRoute>
            }
          />
          <Route
            path="/mypage/managePlace/updatePlace/:placeId"
            element={
              <PrivateRoute>
                <UpdatePlace />
              </PrivateRoute>
            }
          />
          <Route path="/qrcode/password" element={<QRPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
