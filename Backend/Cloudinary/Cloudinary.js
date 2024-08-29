const express = require("express");
const { v2: cloudinary } = require("cloudinary");

// Cloudinary Configuration
cloudinary.config({
  cloud_name: "dr8kooipi",
  api_key: "357717749878839",
  api_secret: "0Ap9tnmSMMzJtLrh5XnhNC9eTJ0",
});

const router = express.Router();

// API Endpoint to Fetch Images
router.get("/EDM", async (req, res) => {
  try {
    // Fetch images from the folder "test"
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "test/",
    });

    console.log("Cloudinary API Response:", result); // Add this to inspect the result

    // Check if resources are available
    if (!result.resources || result.resources.length === 0) {
      return res.status(404).json({ error: "No images found in the folder" });
    }

    // Extract URLs of the images
    const imageUrls = result.resources.map((resource) => resource.secure_url);

    // Send the URLs as a JSON response
    res.json({ images: imageUrls });
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
