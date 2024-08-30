import React, { useState } from "react";

function InauguralCeremonyImages() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const InauguralCeremony = [
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/10Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/11Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/12Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/13Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/14Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/15Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/16Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/17Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/18Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/19Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/1Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/20Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/21Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/22Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/23Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/24Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/25Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/26Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/27Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/28Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/29Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/2Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/30Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/31Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/32Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/33Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/34Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/35Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/36Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/37Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/38Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/39Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/3Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/40Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/41Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/42Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/43Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/44Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/45Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/46Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/47Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/48Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/49Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/4Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/50Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/51Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/52Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/53Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/54Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/55Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/56Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/57Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/58Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/59Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/5Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/60Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/61Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/62Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/63Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/64Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/65Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/66Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/67Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/68Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/6Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/7Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/8Ceremony.JPG",
    },
    {
      src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/9Ceremony.JPG",
    },
  ];

  return (
    <>
      {InauguralCeremony.map((image, index) => (
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
        </div>
      ))}
    </>
  );
}

export default InauguralCeremonyImages;
