export interface createReviewType {
  reservationId: number;
  content: string;
  rating: number;
}

export interface updateReviewType {
  reviewId: number;
  data: {
    content: string;
    rating: number;
  };
}
