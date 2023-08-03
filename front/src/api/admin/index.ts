import { instanceWithToken } from '../../api';
import { CreatePlaceType, UpdatePlaceType, UpdateRoomType } from './types';
import { getUserId } from '../../utils/tokenControl';
const prefix = '/api/v1/host';

const Admin = {
  async v1CreatePlace(data: CreatePlaceType) {
    try {
      const url = `${prefix}/place?memberId=${getUserId()}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdatePlace(data: UpdatePlaceType) {
    try {
      const url = `${prefix}/place/${data.placeId}?memberId=${getUserId()}`;
      const result = await instanceWithToken.put(url, data.data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DeletePlace(placeId: number) {
    try {
      const url = `${prefix}/place/${placeId}?memberId=${getUserId()}`;
      const result = await instanceWithToken.delete(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdateRoom(data: UpdateRoomType) {
    try {
      const url = `${prefix}/room/${data.roomId}?memberId=${getUserId()}`;
      const result = await instanceWithToken.put(url, data.data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DeleteRoom(roomId: number) {
    try {
      const url = `${prefix}/room/${roomId}?memberId=${getUserId()}`;
      const result = await instanceWithToken.delete(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetAdminPlace() {
    try {
      const url = `${prefix}/place?memberId=${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetPlaceDetailRoom(placeId: number) {
    try {
      const url = `${prefix}/${placeId}/rooms?memberId=${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetPlaceDetailResevations(placeId: number) {
    try {
      const url = `${prefix}/${placeId}/reservations?memberId=${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetReservations() {
    try {
      const url = `${prefix}/reservations?memberId=${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetReservationDetail(reservationId: number) {
    try {
      const url = `${prefix}/reservations/${reservationId}?memberId=${getUserId()}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default Admin;
