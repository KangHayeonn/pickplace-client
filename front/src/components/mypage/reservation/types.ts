export interface reservationProps {
  reservationId: number;
  placeId: number;
  placeName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  reservationStatus: string;
  reviewExistence: boolean;
  reservationDate: string;
}
export type cardProps = {
  reservationProps: reservationProps;
};
export type detailCardProps = {
  children: React.ReactNode;
  title?: string;
};
export type detailHeaderProps = {
  placeRating: number;
  placeName: string;
  ReviewExistence: boolean;
  setCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type detailProps = {
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
  roomPrice?: number;
};
export type detailContentProps = {
  reservation: detailProps;
};

export type reservationDetailProps = {
  placeAddress: {
    address: string;
    latitude: number;
    longitude: number;
  };
  placeId: number;
  placeName: string;
  placePhone: string;
  placeRating: number;
  placeReviewCnt: number;

  userId: number;
  nickname: string;
  personnel: number;

  reservationDate: string;
  reservationId: number;
  reservationStatus: string;
  reviewExistence: true;
  roomId: number;
  roomName: string;
  roomPrice: number;

  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
};
