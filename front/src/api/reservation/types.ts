export interface ReservationAccountType {
  accountPassword: string;
  bankName: string;
  bankNum: string;
  checkInTime: string;
  checkOutTime: string;
  roomId: number;
}

export interface ReservationCardType {
  cardNum: string;
  cardPassword: string;
  checkInTime: string;
  checkOutTime: string;
  cvc: string;
  roomId: number;
}

export interface CardValidationType {
  cardNum: string;
  cvc: string;
}

export interface ReservationQRCodeType {
  checkInTime: string;
  checkOutTime: string;
  qrPaymentCode: string;
  roomId: number;
}

export interface QRImageRequestType {
  height: number;
  roomPrice: number;
  width: number;
}
