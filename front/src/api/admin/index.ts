import { instanceWithToken } from '../../api';
import { CreatePlaceType, UpdatePlaceType, UpdateRoomType } from './types';
const prefix = '/api/v1/host';

const Admin = {
  async v1CreatePlace(data: CreatePlaceType) {
    console.log(data);
    try {
      const url = `${prefix}/place`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdatePlace(data: UpdatePlaceType) {
    try {
      const url = `${prefix}/place/${data.placeId}`;
      const result = await instanceWithToken.put(url, data.data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DeletePlace(placeId: number) {
    try {
      const url = `${prefix}/place/${placeId}`;
      const result = await instanceWithToken.delete(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdateRoom(data: UpdateRoomType) {
    try {
      const url = `${prefix}/room/${data.roomId}`;
      const result = await instanceWithToken.put(url, data.data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DeleteRoom(roomId: number) {
    try {
      const url = `${prefix}/room/${roomId}`;
      const result = await instanceWithToken.delete(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetAdminPlace() {
    try {
      const url = `${prefix}/place`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetPlaceDetailRoom(placeId: number) {
    try {
      const url = `${prefix}/${placeId}/rooms`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetPlaceDetailResevations(placeId: number) {
    try {
      const url = `${prefix}/${placeId}/reservations`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetReservations() {
    try {
      const url = `${prefix}/reservations`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetReservationDetail(reservationId: number) {
    try {
      const url = `${prefix}/reservations/${reservationId}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default Admin;
