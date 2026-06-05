const Review = require("../models/Review");

const createReview = async (req, res) => {
    try {
      const review = await Review.create(req.body);
  
      res.status(201).json({
        success: true,
        review,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  const getReviewsByCompany = async (req, res) => {
    try {
      const reviews = await Review.find({
        companyId: req.params.companyId,
      }).sort({
        createdAt: -1,
      });
  
      const averageRating =
        reviews.length > 0
          ? (
              reviews.reduce(
                (sum, review) => sum + review.rating,
                0
              ) / reviews.length
            ).toFixed(1)
          : 0;
  
      res.status(200).json({
        success: true,
        averageRating,
        reviews,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


  module.exports = {
    createReview,
    getReviewsByCompany,
  };