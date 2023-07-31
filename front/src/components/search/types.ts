export type searchHeaderProps = {
  onSearchBtnClick: () => void;
};

export interface optionFormProps {
  category: string;
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
  onSearchWithOptionBtnClick: () => void;
};

export type categorySelectorProps = {
  categoryName?: string;
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
  category: string;
  tags: string[];
}

export type searchResultProps = {
  searchResult: searchResultListProps[];
  pageNum: number;
  hasNext: boolean;
  checkOptionFormIsEmpty: () => boolean;
  checkSearchFormIsEmpty: () => boolean;

  getSearchData: (item?: { newPageNum?: number; searchType?: string }) => void;
  getSearchDataWithOptions: (item: {
    newPageNum?: number;
    searchType?: string;
  }) => void;

  getCategoryData: (item?: {
    newPageNum?: number;
    searchType?: string;
  }) => void;
};
