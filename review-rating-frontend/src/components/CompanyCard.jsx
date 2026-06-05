import "./CompanyCard.css";
import { useNavigate } from "react-router-dom";
import RatingStars from './RatingStars';

function CompanyCard({ company }) {

  const navigate = useNavigate();

  return (
    <div className="company-card">

  <div className="company-left">

    <img
      src={company.logo}
      alt=""
      className="logo-image"
    />

    <div className="company-info">

      <h2>{company.companyName}</h2>

      <p>{`${company.location}, ${company.city}`}</p>
    


      <div className="rating-row">

<RatingStars
  rating={Math.round(company.averageRating)}
/>

<span>
  ({company.reviewCount} Reviews)
</span>

</div>

    </div>

  </div>

  <div className="company-right">

    <p>
      Founded:
      {" "}
      {new Date(
        company.foundedOn
      ).toLocaleDateString()}
    </p>

    <button
      className="review-btn"
      onClick={() =>
        navigate(`/company/${company._id}`)
      }
    >
      Detail Review
    </button>

  </div>

</div>
  );
}

export default CompanyCard;