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
export type detailCardProps = {
  children: React.ReactNode;
  title?: string;
};
export type detailHeaderProps = {
  placeRating: number;
  placeName: string;
  reservationStatus: string;
  ReviewExistence: boolean;
  setCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  roomPrice?: number;
};
