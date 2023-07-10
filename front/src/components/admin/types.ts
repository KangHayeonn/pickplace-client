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
    roomPersonnel: number;
    roomCount: number;
  };
};

export type updateRoomInfoProps = {
  roomInfo: roomProps;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
  onClickUpdateBtn: (
    newRoomName: string,
    newRoomPrice: number,
    newRoomPersonnel: number,
    newRoomCount: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type roomProps = {
  roomName: string;
  roomPrice: number;
  roomPersonnel: number;
  roomCount: number;
  roomId: undefined | number;
};

export type placeProps = {
  placeName: string;
  address: string;
  phone: string;
};

export type addedRoomProps = {
  newRoomList: roomProps[];
  onClickDeleteRoomBtn: (
    roomId: number,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type roomFormProps = {
  newRoomInfo: roomProps;
  onRoomNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoomPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPersonnelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoomCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddNewRoom: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type placeFormProps = {
  header: string;
  newPlaceInfo: {
    placeName: string;
    address: string;
    phone: string;
  };
  onPlaceNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
