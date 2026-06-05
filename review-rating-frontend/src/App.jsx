import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddCompany from "./pages/AddCompany";
import CompanyDetails from "./pages/CompanyDetails";
import AddReview from "./pages/AddReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/add-company"
          element={<AddCompany />}
        />

        <Route
          path="/company/:id"
          element={<CompanyDetails />}
        />

        <Route
          path="/add-review/:id"
          element={<AddReview />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;