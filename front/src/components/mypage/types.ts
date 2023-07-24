export type headerProps = {
  onClickHeaderButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ShowUserInfo = {
  parentClassname?: string | undefined;
  childClassname?: string | undefined;
  title: string;
  content: string | number;
  setUpdateState?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ShowCardInfo = {
  parentClassname?: string | undefined;
  childClassname?: string | undefined;
  title: string;
  content: string | number;
};

export type updateUserInfoProps = {
  title: string;
  value: string;
  onCancleBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
  onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type reviewProps = {
  reviewId: number;
  reservationId: number;
  date: string;
  content: string;
  rating: number;
  placeId: number;
  placeName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  nickname: string;
};

export type reviewDetailProps = {
  reviewId: number;
  date: string;
  content: string;
  rating: number;
  placeId: number;
  placeName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  nickname: string;
  placePhone: string;
  placeAddress: string;
};
