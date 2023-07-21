import { instanceWithToken } from '../../api';
import { getAccessToken, getUserId } from '../../utils/tokenControl';
import { updatePhoneType, updateNicknameType } from './types';
const prefix = '/api/v1/members';

const defaultOptions = {
  headers: {
    accessToken: getAccessToken(),
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
  async v1UpdateNickname(data: updateNicknameType) {
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
  async v1UpdatePhone(data: updatePhoneType) {
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
  async v1GetUserReservations() {
    try {
      const url = `${prefix}/reservations`;
      const result = await instanceWithToken.get(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetUserReservationDetail(reservationId: number) {
    try {
      const url = `${prefix}/reservations/${reservationId}`;
      const result = await instanceWithToken.get(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DeleteUserReservation(reservationId: number) {
    try {
      const url = `${prefix}/reservations/${reservationId}`;
      const result = await instanceWithToken.delete(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default User;
