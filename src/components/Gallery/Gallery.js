import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Import the CSS file
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useNavigate } from "react-router-dom";
import EDM1 from "../../EDM2/EDM1.jpg";
import EDM18 from "../../EDM2/EDM18.jpg";
import EDM2 from "../../EDM2/EDM2.jpg";
import EDM14 from "../../EDM2/EDM14.jpg";
import EDM29 from "../../EDM2/EDM29.jpg";
import EDM7 from "../../EDM2/EDM7.jpg";
import EDM67 from "../../EDM2/EDM67.jpg";
import EDM57 from "../../EDM2/EDM57.jpg";
import ClubActivity85 from "../../ClubActivity/85ClubActivity.JPG";
import ceremony66 from "../../inaugralCeremony/66Ceremony.JPG";
import ClubActivity98 from "../../ClubActivity/98ClubActivity.JPG";
import ClubActivity97 from "../../ClubActivity/97ClubActivity.JPG";
import ClubActivity4 from "../../ClubActivity/4ClubActivity.JPG";
import EDM68 from "../../EDM2/EDM68.jpg";
import ClubActivity36 from "../../ClubActivity/36ClubActivity.JPG";
import ClubActivity53 from "../../ClubActivity/53ClubActivity.JPG";
import ceremony23 from "../../inaugralCeremony/23Ceremony.JPG";
import ceremony41 from "../../inaugralCeremony/41Ceremony.JPG";

function Galler() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Gallery");
  };
  const images = [
    {
      src: EDM1,
    },
    {
      src: EDM18,
    },
    {
      src: EDM2,
    },
    {
      src: EDM14,
    },
    {
      src: EDM29,
    },
    {
      src: EDM7,
    },
    // {
    //   src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM2.jpg",
    // },
    // {
    //   src: "https://snt-tess.s3.ap-south-1.amazonaws.com/40ClubActivity.JPG",
    // },
    {
      src: EDM67,
    },
    {
      src: EDM57,
    },
    {
      src: ClubActivity85,
    },
    {
      src: ceremony66,
    },
    {
      src: ClubActivity98,
    },
    {
      src: ClubActivity97,
    },
    {
      src: ClubActivity4,
    },
    {
      src: EDM68,
    },
    {
      src: ClubActivity36,
    },
    {
      src: ClubActivity53,
    },
    {
      src: ceremony23,
    },
    {
      src: ceremony41,
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
