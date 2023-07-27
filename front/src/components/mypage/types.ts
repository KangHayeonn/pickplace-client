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
export type ReviewModalHeaderProps = {
  memberName?: string;
  reviewDate?: string;
  placeAddress: string;
  reservationDate: string;
};
export type CreateModalProps = {
  reservationId: number;
  setCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type updateUserInfoProps = {
  title: string;
  value: string;
  onCancleBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
  onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type ReviewCardProps = {
  reviewItem: reviewCardItemProps;
  onUpdateBtnClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteBtnClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCardClick: (
    reviewId: number,
  ) => (e: React.MouseEvent<HTMLDivElement>) => void;
};
export type reviewCardItemProps = {
  reviewId: number;
  reservationId: number;
  reviewContent: string;

  reviewCreatedDate: string;

  reviewRating: number;
  memberName: string;

  placeName: string;
};

export type reviewProps = {
  reviewId: number;
  reservationId: number;
  reservationDate: string;
  reviewDate: string;
  reviewContent: string;
  reviewRating: number;
  placeId: number;
  memberName: string;
  placeAddress: string;
  placeName: string;
};

export type reviewDetailProps = {
  reviewId: number;
  reviewContent: string;
  reviewRating: number;

  reservationDate: string;
  reviewDate: string;

  memberName: string;
  placeAddress: string;
  placeName: string;
};

export type UpdateModalProps = {
  reviewId: number;
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
