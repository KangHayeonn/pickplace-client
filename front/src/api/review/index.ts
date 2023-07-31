import { instance, instanceWithToken } from '../../api';
import { createReviewType, updateReviewType } from './types';
const prefix = '/api/v1/review';

const Review = {
  async v1GetUserReview() {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetPlaceReview(placeId: number) {
    try {
      const url = `${prefix}/places/${placeId}`;
      const result = await instance.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1GetReviewDetail(reviewId: number) {
    try {
      const url = `${prefix}/${reviewId}`;
      const result = await instance.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1CreateReview(data: createReviewType) {
    try {
      const url = `${prefix}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1UpdateReview(data: updateReviewType) {
    try {
      const url = `${prefix}/${data.reviewId}`;
      const result = await instanceWithToken.put(url, data.data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async v1DetleteReview(reviewId: number) {
    try {
      const url = `${prefix}/${reviewId}`;
      const result = await instanceWithToken.delete(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
export default Review;
