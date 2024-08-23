import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Import the CSS file
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Split images array into groups of 3 for each column
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    chunkedImages.push(images.slice(i, i + 3));
  }

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

      <div className="flex mt-10 justify-center items-center w-full min-h-[100vh] gallery-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[85%]">
          {chunkedImages.map((columnImages, columnIndex) => (
            <div key={columnIndex} className="grid gap-4">
              {columnImages.map((src, imgIndex) => (
                <div key={imgIndex} className="relative">
                  <img
                    className="gallery-image h-auto max-w-full rounded-lg cursor-pointer"
                    src={src}
                    alt={`Gallery image ${imgIndex + 1}`}
                    onClick={() => handleImageClick(src)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-overlay active" onClick={handleOverlayClick}>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        )}
      </div>

      <div className="btn flex justify-center items-center h-[13vh]">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-black text-white flex items-center space-x-2"
          duration={1}
          clockwise={true}
        >
          <span>View More Photos</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}

export default Gallery;
