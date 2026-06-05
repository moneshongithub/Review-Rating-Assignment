function ReviewCard({ review }) {
    return (
      <div>
  
        <h3>{review.subject}</h3>
  
        <p>{review.fullName}</p>
  
        <p>{review.reviewText}</p>
  
        <p>⭐ {review.rating}</p>
        <p className="review-author">
  {new Date(review.createdAt).toLocaleDateString()}
</p>
  
      </div>
    );
  }
  
  export default ReviewCard;