import { searchProps } from '@/store/modules/search';

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
  categoryName: string;
  onChangeCategory: (category: string) => void;
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

export type searchResultProps = {
  checkOptionFormIsEmpty: () => boolean;
  checkSearchFormIsEmpty: () => boolean;
  getSearchData: (item: searchProps) => Promise<void>;
  getSearchDataWithOptions: (item: searchProps) => Promise<void>;
  getCategoryData: (item: searchProps) => Promise<void>;
};
