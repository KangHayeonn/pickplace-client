export type distanceSliderProps = {
  onChangeUserRangeInput: (value: number) => void;
};

export type searchHeaderProps = {
  startDate: string;
  endDate: string;
  categoryName: string;
  onChangeAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type searchOptionMenuProps = {
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
  onSearchWithOptionBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDecreaseUserCount: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onIncreaseUserCount: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeUserRangeInput: (value: number) => void;
  onClickTagButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
