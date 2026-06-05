const Company = require("../models/Company");
const Review = require("../models/Review");

const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);

    res.status(201).json({
      success: true,
      company,
    });
  } catch (error) {
    console.log("ERROR =>", error);
  
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCompanies = async (req, res) => {
  try {

    const companies = await Company.find().sort({
      createdAt: -1,
    });

    const companiesWithRatings =
      await Promise.all(
        companies.map(async (company) => {

          const reviews = await Review.find({
            companyId: company._id,
          });

          const reviewCount =
            reviews.length;

          const averageRating =
            reviewCount > 0
              ? (
                  reviews.reduce(
                    (sum, review) =>
                      sum + review.rating,
                    0
                  ) / reviewCount
                ).toFixed(1)
              : 0;

          return {
            ...company.toObject(),
            reviewCount,
            averageRating,
          };
        })
      );

    res.status(200).json({
      success: true,
      companies: companiesWithRatings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
};