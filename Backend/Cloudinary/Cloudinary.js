const express = require("express");
const { v2: cloudinary } = require("cloudinary");

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

const router = express.Router();

// API Endpoint to Fetch Images
router.get("/EDM", async (req, res) => {
  try {
    // Fetch images from the folder "EDM"
    const resources = await cloudinary.api.resources({
      type: "upload",
      prefix: "EDM/", // Folder name
    });

    // Extract URLs of the images
    const imageUrls = resources.resources.map(
      (resource) => resource.secure_url
    );

    // Send the URLs as a JSON response
    res.json({ images: imageUrls });
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
