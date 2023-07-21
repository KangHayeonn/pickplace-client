import { instance, instanceWithToken } from '../../api';
import { CreatePlaceType } from './types';
const prefix = '/api/v1/host';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmNAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfSE9TVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk5MTk3MDIsImV4cCI6MTY4OTkyMTUwMn0.C2kpUMOx2wVMYVIuz2rXExKV5_zBEXfoXhCSfNYJvpw';

const defaultOptions = {
  headers: {
    accessToken: `${accessToken}`,
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
      const url = `${prefix}/${placeId}/reservations`;
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
      const url = `${prefix}/reservations`;
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
      const url = `${prefix}/reservations/${reservationId}`;
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
