export interface CreatePlaceType {
  place: {
    placeAddress: string;
    placeName: string;
    placePhone: string;
  };
  rooms: {
    roomAmount: number;
    roomMaxNum: number;
    roomName: string;
    roomPrice: number;
  }[];
}
