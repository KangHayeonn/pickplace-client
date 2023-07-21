import { instance, instanceWithToken } from '../../api';
import { CreatePlaceType } from './types';
const prefix = '/api/v1/host';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3BoaWE0MTMwQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjg5ODMwMTUxLCJleHAiOjE2ODk4MzE5NTF9.-JWFK3aHxuKlMQiFUZdyEUv7lT52xmz57Y9kK_Rvc-A';

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
