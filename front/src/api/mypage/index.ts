import { instanceWithToken, instance } from '../../api';
import { getAccessToken, getUserId } from '../../utils/tokenControl';
const prefix = '/api/v1/members';

const User = {
  async v1GetUserInfo() {
    try {
      const url = `${prefix}/${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdateNickname(nickname: string) {
    try {
      const url = `${prefix}/nickname`;
      const result = await instanceWithToken.put(url, {
        memberId: getUserId(),
        nickname: nickname,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdatePhone(phone: string) {
    try {
      const url = `${prefix}/phone`;
      const result = await instanceWithToken.put(url, {
        memberId: getUserId(),
        nickname: phone,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetUserReservations() {
    try {
      const url = `${prefix}/reservations`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetUserReservationDetail(reservationId: number) {
    try {
      const url = `${prefix}/reservations/${reservationId}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DeleteUserReservation(reservationId: number) {
    try {
      const url = `${prefix}/reservations/${reservationId}`;
      const result = await instanceWithToken.delete(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default User;
