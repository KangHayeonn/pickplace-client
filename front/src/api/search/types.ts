export type getSearchDataProps = {
  address: string;
  x: number;
  y: number;
  startDate: string;
  endDate: string;
  distance: number;
  searchType: string;
  pageProps: pageProps;
  category: string;
};

export type pageProps = {
  countPerPage: number;
  pageNum: number;
};

export type getSearchDataWithOptionsProps = {
  address: string;
  x: number;
  y: number;
  startDate: string;
  endDate: string;
  distance: number;
  searchType: string;
  pageProps: pageProps;

  startTime: string;
  endTime: string;
  category: string;
  userCnt: number;
  tagList: Array<string>;
};
