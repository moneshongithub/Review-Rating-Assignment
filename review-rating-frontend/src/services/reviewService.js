import api from "./api";

export const createReview = (data) => {
  return api.post("/review", data);
};

export const getReviewsByCompany =
(companyId, sortBy) => {
  return api.get(
   `/review/${companyId}?sortBy=${sortBy}`
  );
};