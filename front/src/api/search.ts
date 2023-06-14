// import { instance } from "../index";
//const prefix = "/api/v1";
import { SPACESEARCHRESULT, HOTELSEARCHRESULT } from '../utils/searchList';

type getSearchDataProps = {
  address: string;
  startDate: string;
  endDate: string;
  distance: number;
  searchType: string;
};

type getSearchDataWithOptionsProps = {
  searchform: getSearchDataProps;
  optionForm: {
    startTime: string;
    endTime: string;
    category: number;
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
        data: SPACESEARCHRESULT,
      };
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getSearchDataWithOptions({
    searchform,
    optionForm,
  }: getSearchDataWithOptionsProps) {
    try {
      //   const url = `${prefix}/search`;
      //   const result = await instance.post(url, {
      //     address: searchform.address,
      //     startDate: searchform.startDate,
      //     endDate: searchform.endDate,
      //     distance: searchform.distance,
      //     searchType: searchform.searchType,
      //     startTime: optionForm.startTime,
      //     endTime: optionForm.endTime,
      //     category: optionForm.category,
      //     userCnt: optionForm.userCnt,
      //     tagId: optionForm.tagId,
      //   });
      const result = {
        success: true,
        code: 200,
        data: HOTELSEARCHRESULT,
      };
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default SearchApi;
