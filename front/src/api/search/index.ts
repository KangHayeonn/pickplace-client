import { instance } from '../../api';
import {
  getSearchDataProps,
  getSearchDataWithOptionsProps,
  getCategoryDataProps,
} from './types';
const prefix = '/api/v1/search';

const Search = {
  async getCategoryData(data: getCategoryDataProps) {
    try {
      const url = `${prefix}/category`;
      const result = await instance.post(url, {
        address: data.address,
        x: data.x,
        y: data.y,
        searchType: data.searchType,
        countPerPage: data.pageProps.countPerPage,
        pageNum: data.pageProps.pageNum,
        category: data.category,
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getSearchData(data: getSearchDataProps) {
    try {
      const url = `${prefix}/basic`;
      const result = await instance.post(url, {
        address: data.address,
        x: data.x,
        y: data.y,
        startDate: data.startDate.replaceAll('-', '.'),
        endDate: data.endDate.replaceAll('-', '.'),
        distance: data.distance * 1000,
        searchType: data.searchType,
        countPerPage: data.pageProps.countPerPage,
        pageNum: data.pageProps.pageNum,
        category: data.category,
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getSearchDataWithOptions(data: getSearchDataWithOptionsProps) {
    try {
      const url = `${prefix}/detail`;
      const result = await instance.post(url, {
        address: data.address,
        x: data.x,
        y: data.y,
        startDate: data.startDate.replaceAll('-', '.'),
        endDate: data.endDate.replaceAll('-', '.'),
        distance: data.distance * 1000,
        searchType: data.searchType,
        countPerPage: data.pageProps.countPerPage,
        pageNum: data.pageProps.pageNum,
        category: data.category,
        userCnt: data.userCnt,
        tagList: data.tagList,
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default Search;
