const express = require("express");

const router = express.Router();

const {
  createReview,
  getReviewsByCompany,
} = require("../controllers/reviewController");

router.post("/", createReview);

router.get("/:companyId", getReviewsByCompany);

module.exports = router;