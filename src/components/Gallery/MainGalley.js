import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Import the CSS file
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Accordion, AccordionItem } from "@nextui-org/react";
const inaugralCeremony = require.context("../../inaugralCeremony", true);
const inaugralCeremonyList = inaugralCeremony
  .keys()
  .map((image) => inaugralCeremony(image));

function Galler() {
  const [openKeys, setOpenKeys] = useState(["1", "2", "3"]);

  const handleSelectionChange = (keys) => {
    // Convert Set to array
    const keysArray = Array.from(keys);
    setOpenKeys(keysArray);
  };

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
        <AccordionItem
          key="2"
          aria-label="Inaugral Ceremony"
          title={
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Inaugral Ceremony
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

export default Galler;
