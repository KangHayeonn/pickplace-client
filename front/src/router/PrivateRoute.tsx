import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/modules';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  return isLogin ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
