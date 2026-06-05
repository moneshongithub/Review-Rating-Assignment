import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./AddCompany.css"

function AddCompany() {
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    city: "",
    foundedOn: "",
    logo: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/company", formData);

      console.log(response.data);

      alert("Company Added Successfully");
      navigate(`/`);

      setFormData({
        companyName: "",
        location: "",
        city: "",
        foundedOn: "",
        logo: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="form-container">
  
      <h1 className="form-title">
        Add Company
      </h1>
  
      <form onSubmit={handleSubmit}>
  
        <div className="form-group">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <input
            type="date"
            name="foundedOn"
            value={formData.foundedOn}
            onChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <input
            type="text"
            name="logo"
            placeholder="Logo URL"
            value={formData.logo}
            onChange={handleChange}
          />
        </div>
  
        <button
          type="submit"
          className="submit-btn"
        >
          Add Company
        </button>
  
      </form>
  
    </div>
  );
}

export default AddCompany;