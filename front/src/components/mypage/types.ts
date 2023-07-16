export interface reservationProps {
  reservationId: number;
  placeId: number;
  placeName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  reservationStatus: string;
  ReviewExistence: boolean;
  reservationDate: string;
}

export type cardProps = {
  reservationProps: reservationProps;
};

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
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
  onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type detailCardProps = {
  children: React.ReactNode;
  title?: string;
};

export type reservationDetailProps = {
  reservationId: number;
};

export type detailHeaderProps = {
  placeRating: number;
  placeName: string;
  reservationStatus: string;
  ReviewExistence: boolean;
};

export type detailContentProps = {
  address: string;
  placePhone: string;
  reservationId: number;
  reservationDate: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  nickName: string;
  personnel: number;
  roomPrice: number;
};
