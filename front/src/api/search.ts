// import { instance } from "../index";
//const prefix = "/api/v1";
import { spaceSearchResult, hotelSearchResult } from '../utils/searchList';

type getSearchDataProps = {
  address: string;
  startDate: string;
  endDate: string;
  distance: number;
  searchType: string;
};

type getSearchDataWithOptionsProps = {
  searchForm: getSearchDataProps;
  optionForm: {
    startTime: string;
    endTime: string;
    category: {
      categoryName: string;
      id: number;
    };
    userCnt: number;
    tagId: Array<number>;
  };
};
const SearchApi = {
  async getSearchData({
    address,
    startDate,
    endDate,
    distance,
    searchType,
  }: getSearchDataProps) {
    try {
      //   const url = `${prefix}/search`;
      //     const result = await instance.post(url, {
      //       address: address,
      //       startDate: startDate,
      //       endDate: endDate,
      //       distance: distance,
      //       searchType: searchType,
      //   });
      const result = {
        success: true,
        code: 200,
        data: spaceSearchResult,
      };
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getSearchDataWithOptions({
    searchForm,
    optionForm,
  }: getSearchDataWithOptionsProps) {
    console.log({
      address: searchForm.address,
      startDate: searchForm.startDate,
      endDate: searchForm.endDate,
      distance: searchForm.distance,
      searchType: searchForm.searchType,
      startTime: optionForm.startTime,
      endTime: optionForm.endTime,
      category: optionForm.category.id,
      userCnt: optionForm.userCnt,
      tagId: optionForm.tagId,
    });
    try {
      //   const url = `${prefix}/search`;
      //   const result = await instance.post(url, {
      //     address: searchForm.address,
      //     startDate: searchForm.startDate,
      //     endDate: searchForm.endDate,
      //     distance: searchForm.distance,
      //     searchType: searchForm.searchType,
      //     startTime: optionForm.startTime,
      //     endTime: optionForm.endTime,
      //     category: optionForm.category.id,
      //     userCnt: optionForm.userCnt,
      //     tagId: optionForm.tagId,
      //   });
      const result = {
        success: true,
        code: 200,
        data: hotelSearchResult,
      };
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default SearchApi;
