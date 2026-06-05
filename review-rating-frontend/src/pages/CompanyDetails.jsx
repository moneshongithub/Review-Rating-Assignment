import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getCompanyById } from "../services/companyService";
import { getReviewsByCompany } from "../services/reviewService";

import "../styles/CompanyDetails.css";

function CompanyDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [company, setCompany] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchCompany();
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [sortBy]);

  const fetchCompany = async () => {
    try {
      const response = await getCompanyById(id);

      setCompany(response.data.company);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await getReviewsByCompany(
        id,
        sortBy
      );

      setReviews(response.data.reviews);

      setAverageRating(
        response.data.averageRating
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!company) return <h2>Loading...</h2>;

  return (
    <div className="company-details-container">

      <div className="company-header">

        <img
          src={
            company.logo ||
            "https://via.placeholder.com/120"
          }
          alt={company.companyName}
          className="company-logo"
        />

        <div className="company-content">

          <h1>{company.companyName}</h1>

          <p>{company.location}</p>

          <p>{company.city}</p>

          <div className="rating-box">
            ⭐ Average Rating :
            {" "}
            {averageRating}
          </div>

          <button
            className="add-review-btn"
            onClick={() =>
              navigate(`/add-review/${id}`)
            }
          >
            Add Review
          </button>

        </div>

      </div>

      <div className="review-section">

        <div className="review-header">

          <h2>
            Reviews ({reviews.length})
          </h2>

          <select
            className="sort-dropdown"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >
            <option value="">
              Sort Reviews
            </option>

            <option value="rating">
              Rating
            </option>
            
          </select>

        </div>

        {reviews.length === 0 ? (
          <div className="review-card">
            <h3>No Reviews Yet</h3>
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              className="review-card"
            >

              <h3>{review.subject}</h3>

              <p className="review-author">
                By: {review.fullName}
              </p>

              <p>{review.reviewText}</p>

              <p className="review-rating">
                ⭐ {review.rating}
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default CompanyDetails;