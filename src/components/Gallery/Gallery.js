import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Import the CSS file
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useNavigate } from "react-router-dom";

function Galler() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Gallery");
  };
  const images = [
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM1.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM18.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM2.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM14.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM29.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM7.jpg",
    },
    // {
    //   src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM2.jpg",
    // },
    // {
    //   src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/40ClubActivity.JPG",
    // },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM67.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM57.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/85ClubActivity.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/66Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/98ClubActivity.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/97ClubActivity.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/4ClubActivity.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM68.jpg",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/36ClubActivity.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/53ClubActivity.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/23Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/41Ceremony.JPG",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow on component unmount
    };
  }, [selectedImage]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full min-h-[100vh] pb-20 py-10 bg-black">
      <h2 className="max-w-7xl pl-4 mx-[2em] text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        The Essence of Moments.
      </h2>

      <div className="w-[85%] mx-auto mt-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image.src)}
                className="gallery-item"
              >
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="gallery-image"
                />
                <p className="gallery-caption">{image.caption}</p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div className="btn flex justify-center items-center h-[8vh]">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-black text-white flex items-center space-x-2"
          duration={1}
          clockwise={true}
          onClick={handleButtonClick}
        >
          <span>View More Photos</span>
        </HoverBorderGradient>
      </div>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "999",
          }}
          onClick={handleOverlayClick}
        >
          <img
            src={selectedImage}
            alt=""
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Galler;
