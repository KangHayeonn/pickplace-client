import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import SamplePage from '../pages/SamplePage';
import Layout from '../components/layout/Layout';
// const MainPage = lazy(() => import("../pages/MainPage"));
// const SignupPage = lazy(() => import("../pages/SignupPage"));
// const LoginPage = lazy(() => import("../pages/LoginPage"));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sample" element={<SamplePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
