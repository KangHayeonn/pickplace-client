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
};
export default Admin;
