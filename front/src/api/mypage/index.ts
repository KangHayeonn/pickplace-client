import { instanceWithToken } from '../../api';
import { getAccessToken, getUserId } from '../../utils/tokenControl';
import { updateUserInfoType } from './types';
const prefix = '/api/v1/members';

const defaultOptions = {
  headers: {
    Authorization: getAccessToken(),
  },
};

const User = {
  async v1GetUserInfo() {
    try {
      const url = `${prefix}/${getUserId()}`;
      const result = await instanceWithToken.post(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdateNickname(data: updateUserInfoType) {
    try {
      const url = `${prefix}/nickname`;
      const result = await instanceWithToken.put(url, data, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdatePhone(data: updateUserInfoType) {
    try {
      const url = `${prefix}/phone`;
      const result = await instanceWithToken.put(url, data, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default User;
