import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainPage from '../pages/MainPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import SamplePage from '../pages/SamplePage';
import SearchPage from '../pages/SearchPage';
import SearchDetailPage from '../pages/SearchDetailPage';
import PasswordPage from '../pages/PasswordPage';
import MailPage from '../pages/MailPage';
import MyPage from '../pages/MyPage';
import ReservationDetail from '../components/mypage/reservation/ReservationDetail';
// const MainPage = lazy(() => import("../pages/MainPage"));
// const SignupPage = lazy(() => import("../pages/SignupPage"));
// const LoginPage = lazy(() => import("../pages/LoginPage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
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
          <Route path="/pwd" element={<PasswordPage />} />
          <Route path="/mail" element={<MailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route
            path="/reservation/detail/:reservationId"
            element={<ReservationDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
