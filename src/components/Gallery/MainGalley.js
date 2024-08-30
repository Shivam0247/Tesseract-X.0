import React, { useState, useEffect, useContext } from "react";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FetchImageContext from "../../Context/FetchImage/FetchImageContext";
import { Accordion, AccordionItem } from "@nextui-org/react";
const inaugralCeremony = require.context("../../inaugralCeremony", true);
const inaugralCeremonyList = inaugralCeremony
  .keys()
  .map((image) => inaugralCeremony(image));

const EDM2 = require.context("../../EDM2", true);
const EDMList2 = EDM2.keys().map((image) => EDM2(image));

function Gallery() {
  const [openKeys, setOpenKeys] = useState(["1", "2", "3"]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImageContext = useContext(FetchImageContext);
  const { images, getEDMImages } = fetchImageContext;

  useEffect(() => {
    getEDMImages();
    console.log(images);
  }, []);

  const EDM = [
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM1.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM10.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM11.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM12.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM13.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM14.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM15.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM16.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM17.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM18.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM19.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM2.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM20.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM21.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM22.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM23.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM24.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM25.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM26.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM27.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM28.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM29.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM3.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM30.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM31.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM32.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM33.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM34.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM35.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM36.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM37.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM38.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM39.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM4.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM40.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM41.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM42.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM43.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM44.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM45.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM46.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM47.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM48.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM49.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM5.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM50.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM51.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM52.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM53.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM54.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM55.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM56.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM57.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM58.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM59.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM6.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM60.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM61.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM62.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM63.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM64.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM65.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM66.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM67.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM68.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM69.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM7.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM70.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM71.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM72.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM73.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM74.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM75.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM76.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM77.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM78.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM79.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM8.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM80.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM81.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM82.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM83.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM84.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM85.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM86.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM87.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM88.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM89.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM9.jpg" },
    { src: "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/EDM90.jpg" },
  ];

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

  // Function to preload images
  const preloadImages = (imageList) => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  useEffect(() => {
    // Preload images in the background
    preloadImages(inaugralCeremonyList);
    preloadImages(EDMList2);

    // Mark images as loaded after preloading
    setImagesLoaded(true);
  }, []);

  const handleSelectionChange = (keys) => {
    setOpenKeys(Array.from(keys));
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  if (!imagesLoaded) {
    return <div>Loading...</div>; // Optionally show a loading indicator
  }

  return (
    <div className="MainGallery w-full min-h-[50vh] pb-20 py-10 bg-black">
      <h2 className="max-w-[100%] mb-[1rem] text-[22px] md:text-5xl flex justify-center font-bold text-neutral-200 mt-[6rem]">
        Moments from Tesseract
      </h2>
      <h4 className="text-neutral-300 flex justify-center text-[10px] md:text-[17px] mb-[3em]">
        Relive the Best Moments Through Our Gallery
      </h4>

      <Accordion
        selectionMode="multiple"
        selectedKeys={openKeys}
        onSelectionChange={handleSelectionChange}
        className="text-white px-5 sm:px-[6em]"
        fullWidth
      >
        <AccordionItem
          key="1"
          aria-label="EDM"
          title={
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>EDM</span>
          }
          keepContentMounted
        >
          <div className="w-[100%] mx-auto mt-10">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="10px">
                {EDM.map((image, index) => (
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
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Inaugural Ceremony"
          title={
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Inaugural Ceremony
            </span>
          }
          keepContentMounted
        >
          <div className="w-[100%] mx-auto mt-10">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="10px">
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
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Club Activities"
          title={
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Club Activities
            </span>
          }
          keepContentMounted
        >
          <div className="w-[100%] mx-auto mt-10">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="10px">
                {inaugralCeremonyList.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(image)}
                    className="gallery-item"
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </AccordionItem>
      </Accordion>

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

export default Gallery;
