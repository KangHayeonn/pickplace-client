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
  key: number;
};

export type headerProps = {
  onClickHeaderButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ShowUserInfo = {
  classname?: string | undefined;
  title: string;
  content: string;
  setUpdateState?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type updateUserInfoProps = {
  title: string;
  value: string;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
  onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
