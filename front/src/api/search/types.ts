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

export type getCategoryDataProps = {
  address: string;
  x: number;
  y: number;
  searchType: string;
  pageProps: pageProps;
  category: string;
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

  category: string;
  userCnt: number;
  tagList: Array<string>;
};
