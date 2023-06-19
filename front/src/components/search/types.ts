export type searchHeaderProps = {
  startDate: string;
  endDate: string;
  categoryName: string;
  onChangeAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export interface optionFormProps {
  startTime: string;
  endTime: string;
  category: {
    categoryName: string;
    id: number;
  };
  userCnt: number;
  tagId: Array<number>;
}
export interface searchFormProps {
  address: string;
  startDate: string;
  endDate: string;
  distance: number;
  searchType: string;
}

export type searchOptionMenuProps = {
  optionForm: optionFormProps;
  setOptionForm: React.Dispatch<React.SetStateAction<optionFormProps>>;
  searchForm: searchFormProps;
  setsearchForm: React.Dispatch<React.SetStateAction<searchFormProps>>;
  onSearchWithOptionBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type categorySelectorProps = {
  optionForm: optionFormProps;
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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

export type searchResultProps = {
  searchResult: {
    placeId: number;
    placeName: string;
    placeAddress: {
      address: string;
      latitude: number;
      longitude: number;
    };
    placeRating: number;
    placeReviewCnt: number;
  }[];
};
