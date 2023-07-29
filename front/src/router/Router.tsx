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

// const MainPage = lazy(() => import("../pages/MainPage"));
// const SignupPage = lazy(() => import("../pages/SignupPage"));
// const LoginPage = lazy(() => import("../pages/LoginPage"));

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
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/pwd" element={<PasswordPage />} />
          <Route path="/mail" element={<MailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route
            path="mypage/reservationDetail/:reservationId"
            element={<ReservationDetail />}
          />
          <Route
            path="mypage/manageReservation/detail/:reservationId"
            element={<ManageReservationDetail />}
          />
          <Route
            path="mypage/managePlace/detail/:placeId"
            element={<ManagePlaceDetail />}
          />
          <Route
            path="/mypage/managePlace/createPlace"
            element={<CreatePlace />}
          />
          <Route
            path="/mypage/managePlace/updatePlace/:placeId"
            element={<UpdatePlace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
