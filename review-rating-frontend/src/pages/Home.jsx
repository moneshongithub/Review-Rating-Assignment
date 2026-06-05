import { useEffect, useState } from "react";
import { getCompanies } from "../services/companyService";
import CompanyCard from '../components/CompanyCard';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [sortBy, setSortBy] =
  useState("");

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getCompanies();

      setCompanies(response.data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredCompanies = companies.filter(
    (company) =>
      company.companyName
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      company.city
        .toLowerCase()
        .includes(city.toLowerCase())
  );
  
  const sortedCompanies =
 [...filteredCompanies];

 if(sortBy === "name"){

    sortedCompanies.sort((a,b)=>
      a.companyName.localeCompare(
        b.companyName
      )
    );
  }
  
  if(sortBy === "rating"){
  
    sortedCompanies.sort(
      (a,b)=>
        b.averageRating -
        a.averageRating
    );
  }

  return (
    <div>
      <Navbar
  search={search}
  setSearch={setSearch}
/>
<div className="container">

  <div className="filter-section">

    <div className="filter-left">

    <input
  className="input"
  type="text"
  placeholder="Search City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>

      <button className="btn">
        Find Company
      </button>

      <button
        className="btn"
        onClick={() => navigate("/add-company")}
      >
        Add Company
      </button>

    </div>

    <div className="filter-right">

    <select
  className="sort"
  value={sortBy}
  onChange={(e)=>
    setSortBy(e.target.value)
  }
>
  <option value="">
    Sort
  </option>

  <option value="name">
    Name
  </option>

  <option value="rating">
    Rating
  </option>

</select>

    </div>

  </div>

  <div className="cards">

    {sortedCompanies.map((company) => (
      <CompanyCard
        key={company._id}
        company={company}
      />
    ))}

  </div>

</div>

    </div>
  );
}

export default Home;