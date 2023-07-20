export type searchHeaderProps = {
  startDate: string;
  endDate: string;
  category: string;
  address: string;
  x: number;
  y: number;
  onChangeAddress: (address: string, x: string, y: string) => void;
  onChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchBtnClick: () => void;
};

export interface optionFormProps {
  category: {
    name: string;
    id: number;
  };
  userCnt: number;
  tagList: Array<string>;
}
export interface searchFormProps {
  address: string;
  x: number;
  y: number;
  startDate: string;
  endDate: string;
  distance: number;
  searchType: string;
}

export type searchOptionMenuProps = {
  optionForm: optionFormProps;
  setOptionForm: React.Dispatch<React.SetStateAction<optionFormProps>>;
  searchForm: searchFormProps;
  setSearchForm: React.Dispatch<React.SetStateAction<searchFormProps>>;
  onSearchWithOptionBtnClick: () => void;
};

export type categorySelectorProps = {
  categoryName: string;
  onChangeCategory: (category: string) => void;
};

export type personnelCounterProps = {
  optionForm: optionFormProps;
  setOptionForm: React.Dispatch<React.SetStateAction<optionFormProps>>;
};

export type tagSelectorProps = {
  onClickTagButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type distanceInputProps = {
  onChangeUserRangeInput: (value: number) => void;
};
export type distanceSliderProps = {
  onChangeUserRangeInput: (value: number) => void;
};
export type searchFilterProps = {
  onClickFilterButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface searchResultListProps {
  placeId: number;
  placeName: string;
  placeAddress: {
    address: string;
    latitude: number;
    longitude: number;
  };
  placeRating: number;
  placeReviewCnt: number;
}

export type searchResultProps = {
  searchResult: searchResultListProps[];
  pageNum: number;
  hasNext: boolean;
  setSearchResult: React.Dispatch<
    React.SetStateAction<searchResultListProps[]>
  >;
  getSearchDataWithOptions: (newPageNum?: number) => searchResultListProps[];
};
