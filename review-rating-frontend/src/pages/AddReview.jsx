import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { createReview } from "../services/reviewService";

import "../styles/AddReview.css";

function AddReview() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    reviewText: "",
    rating: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const payload = {
        companyId: id,
        ...formData,
      };

      await createReview(payload);

      alert("Review Added Successfully");

      navigate(`/company/${id}`);

    } catch (error) {

      console.log(error);

      alert("Failed to add review");

    }
  };

  return (
    <div className="review-form-container">

      <h1 className="review-form-title">
        Add Review
      </h1>

      <form onSubmit={handleSubmit}>

        <div className="review-form-group">

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

        </div>

        <div className="review-form-group">

          <label>
            Subject
          </label>

          <input
            type="text"
            name="subject"
            placeholder="Enter review subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

        </div>

        <div className="review-form-group">

          <label>
            Review
          </label>

          <textarea
            name="reviewText"
            placeholder="Write your review"
            value={formData.reviewText}
            onChange={handleChange}
            required
          />

        </div>

        <div className="review-form-group">

          <label>
            Rating
          </label>

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="1">⭐ 1</option>
            <option value="2">⭐⭐ 2</option>
            <option value="3">⭐⭐⭐ 3</option>
            <option value="4">⭐⭐⭐⭐ 4</option>
            <option value="5">⭐⭐⭐⭐⭐ 5</option>
          </select>

        </div>

        <button
          type="submit"
          className="review-submit-btn"
        >
          Submit Review
        </button>

      </form>

    </div>
  );
}

export default AddReview;