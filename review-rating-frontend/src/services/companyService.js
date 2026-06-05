import api from "./api";

export const getCompanies = () => {
  return api.get("/company");
};

export const getCompanyById = (id) => {
  return api.get(`/company/${id}`);
};

export const createCompany = (data) => {
  return api.post("/company", data);
};