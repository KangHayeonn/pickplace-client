import { instance, instanceWithToken } from '../../api';
import { CreatePlaceType } from './types';
const prefix = '/api/v1/host';

const defaultOptions = {
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJlbWFpbCI6ImFiY0BuYXZlci5jb20ifQ.QptS0V6x0RPP-MgXqKSYMaK-vIq0FTAaLGxeWIkNvo',
  },
};

const Admin = {
  async v1CreatePlace(data: CreatePlaceType) {
    try {
      const url = `${prefix}/place`;
      const result = await instanceWithToken.post(url, data, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetAdminPlace() {
    try {
      const url = `${prefix}/place`;
      const result = await instanceWithToken.get(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetPlaceDetailRoom(placeId: number) {
    try {
      const url = `${prefix}/${placeId}/rooms`;
      const result = await instanceWithToken.get(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetPlaceDetailResevations(placeId: number) {
    try {
      const url = `${prefix}/${placeId}/resevations`;
      const result = await instanceWithToken.get(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetReservations() {
    try {
      const url = `${prefix}/resevations`;
      const result = await instanceWithToken.get(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetReservationDetail(reservationId: number) {
    try {
      const url = `${prefix}/resevations/${reservationId}`;
      const result = await instanceWithToken.get(url, {
        ...defaultOptions,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default Admin;
