import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainPage from '../pages/MainPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import SamplePage from '../pages/SamplePage';
import SearchPage from '../pages/SearchPage';
import PasswordPage from '../pages/PasswordPage';
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
          <Route path="/pwd" element={<PasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
