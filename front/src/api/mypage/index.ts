import { instanceWithToken } from '../../api';
import { getUserId } from '../../utils/tokenControl';
const prefix = '/api/v1/members';
const prefixReservation = '/api/v1/reservation';

const User = {
  async v1GetUserInfo() {
    try {
      const url = `${prefix}/info/${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdateNickname(nickname: string) {
    try {
      const url = `${prefix}/info/nickname`;
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
      const url = `${prefix}/info/phone`;
      const result = await instanceWithToken.put(url, {
        memberId: getUserId(),
        phone: phone,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetUserReservations() {
    try {
      const url = `${prefixReservation}/info/${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetUserReservationDetail(reservationId: number) {
    try {
      const url = `${prefixReservation}/info/details/${reservationId}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default User;
