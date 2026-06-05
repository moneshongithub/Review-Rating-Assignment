function RatingStars({ rating }) {

    return (
      <>
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < rating ? "⭐" : "☆"}
          </span>
        ))}
      </>
    );
  }
  
  export default RatingStars;