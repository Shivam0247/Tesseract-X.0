import React, { useState, useEffect, useContext } from "react";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FetchImageContext from "../../Context/FetchImage/FetchImageContext";
import { Accordion, AccordionItem } from "@nextui-org/react";
const inaugralCeremony = require.context("../../inaugralCeremony", true);
const inaugralCeremonyList = inaugralCeremony
  .keys()
  .map((image) => inaugralCeremony(image));

const EDM = require.context("../../EDM", true);
const EDMList = EDM.keys().map((image) => EDM(image));

function Gallery() {
  const [openKeys, setOpenKeys] = useState(["1", "2", "3"]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImageContext = useContext(FetchImageContext);
  const { images, getEDMImages } = fetchImageContext;

  useEffect(() => {
    getEDMImages();
  }, []);

  const InaugralCeremony = [
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724956382/EDM/cv9etfg5btxdk4bjmamg.jpg",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01220.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01226.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01236.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01239.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01255.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01263.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01264.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC01270.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07278.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07280.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07282.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07284.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07289.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07294.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07300.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07310.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07312.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07316.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07319.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07322.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07327.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07350.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07361.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07376.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07379.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07380.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07396.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07405.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC07430.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0007.JPG?alt=media&token=f8c790ec-3e48-4a27-a5f7-d5f6c7fe44c2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0028.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0030.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0034.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0045.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0049.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0051.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0055.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0064.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0068.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0071.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0077.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0088.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0095.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0116.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0125.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0128.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0135.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FDSC_0141.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5399.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5410.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5488.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5521.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5557.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5602.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5618.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5627.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5688.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/tesseract-x-0.appspot.com/o/InaugralCeremony%2FSKS_5698.JPG?alt=media&token=29850be9-ff05-4d2f-8594-4b90260ddf2b",
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
    preloadImages(EDMList);

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
                {images.map((image, index) => (
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
                {InaugralCeremony.map((image, index) => (
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
