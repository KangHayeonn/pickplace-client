import { instanceWithToken } from '../../api';
const prefix = '/api/v1/reservation';

interface ReservationAccountType {
  accountPassword: string;
  bankName: string;
  bankNum: string;
  checkInTime: string;
  checkOutTime: string;
  endDate: string;
  endTime: string;
  roomId: number;
  startDate: string;
  startTime: string;
}

interface ReservationCardType {
  cardNum: string;
  cardPassword: string;
  checkInTime: string;
  checkOutTime: string;
  cvc: string;
  endDate: string;
  endTime: string;
  roomId: number;
  startDate: string;
  startTime: string;
}

interface CardValidationType {
  cardNum: string;
  cvc: string;
}

interface ReservationQRCodeType {
  checkInTime: string;
  checkOutTime: string;
  endDate: string;
  endTime: string;
  qrPaymentCode: string;
  roomId: number;
  startDate: string;
  startTime: string;
}

interface QRImageRequestType {
  height: number;
  roomPrice: number;
  width: number;
}

const Reservation = {
  // 예약페이지 접근
  async v1GetReservation(memberId: number, roomId: number) {
    try {
      const url = `${prefix}/${roomId}`;
      const result = await instanceWithToken.get(url, {
        params: {
          memberId,
        },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 계좌이체 및 예약
  async v1ReservationAccount(data: ReservationAccountType) {
    try {
      const url = `${prefix}/account`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 은행 별 가상계좌 받아오기
  async v1GetBankNumber(bankName: string) {
    try {
      const url = `${prefix}/account/number`;
      const result = await instanceWithToken.post(url, { bankName });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 카드 결제 및 예약
  async v1ReservationCard(data: ReservationCardType) {
    try {
      const url = `${prefix}/card`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 카드 결제 검증
  async v1CardValidation(data: CardValidationType) {
    try {
      const url = `${prefix}/card/validation`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 결제
  async v1ReservationQRCode(data: ReservationQRCodeType) {
    try {
      const url = `${prefix}/qrcode`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 코드 결제 페이지 가격 정보
  async v1GetQRCodeInfo(code: string) {
    try {
      const url = `${prefix}/qrcode/${code}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 코드 비밀번호 인증
  async v1QRCodeValidation(code: string, password: string) {
    try {
      const url = `${prefix}/qrcode/${code}`;
      const result = await instanceWithToken.post(url, {
        qrPassword: password,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 코드 응답
  async v1GetQRCodeImage(memberId: number, data: QRImageRequestType) {
    try {
      const url = `${prefix}/qrcode/image?memberId=${memberId}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
