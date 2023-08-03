import studyRoomImg from '../../assets/images/place-default-small.svg';
import guestHouseImg from '../../assets/images/place-guestHouse-img.svg';
import pensionImg from '../../assets/images/place-pension-img.svg';
import partyRoomImg from '../../assets/images/place-partyRoom-img.png';
import hotelImg from '../../assets/images/place-hotel-img.svg';

export const GetCategoryImage = (category: string) => {
  if (category == '펜션' || category == 'Pension') return pensionImg;
  else if (category == '게스트하우스' || category == 'GuestHouse')
    return guestHouseImg;
  else if (category == '파티룸' || category == 'PartyRoom') return partyRoomImg;
  else if (category == '스터디룸' || category == 'StudyRoom')
    return studyRoomImg;
  else return hotelImg;
};
