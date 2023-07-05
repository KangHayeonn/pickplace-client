export type reservedCardProps = {
  adminReservationProps: {
    reservationId: number;
    placeId: number;
    placeName: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    reservationStatus: string;
  };
};

export type reservationBtnsProps = {
  reservationStatus: string;
  onClickRefuseBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickAcceptBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type placeCardProps = {
  adminPlaceProps: {
    placeId: number;
    placeName: string;
    placePhone: string;
    placeAddress: {
      address: string;
      latitude: number;
      longitude: number;
    };
    placeRating: number;
    placeReviewCnt: number;
    roomList: {
      roomId: number;
      roomName: string;
      roomPrice: number;
      roomStatus: string;
    }[];
  };
};

export type placeHeaderProps = {
  placeName: string;
  placePhone: string;
  address: string;
};

export type roomCardProps = {
  roomProps: {
    roomId: number;
    roomName: string;
    roomPrice: number;
    roomStatus: string;
  };
};

export type updateRoomInfoProps = {
  roomInfo: {
    roomName: string;
    roomPrice: number;
    roomId: number;
  };
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
  onClickUpdateBtn: (
    newRoomName: string,
    newRoomPrice: string,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
};
