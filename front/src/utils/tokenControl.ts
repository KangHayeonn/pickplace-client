export const setUserId = (id: string) => {
  localStorage.setItem('userId', id);
};

export const getUserId = () => {
  return localStorage.getItem('userId');
};

export const setNickName = (nickName: string) => {
  localStorage.setItem('nickName', nickName);
};

export const getNickName = () => {
  return localStorage.getItem('nickName');
};

export const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem('refreshToken', token);
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const clearToken = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('nickName');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
