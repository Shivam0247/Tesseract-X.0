import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Import the CSS file
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Galler() {
  const [openKeys, setOpenKeys] = useState(["1", "2", "3"]);

  const handleSelectionChange = (keys) => {
    // Convert Set to array
    const keysArray = Array.from(keys);
    setOpenKeys(keysArray);
  };

  const EDM = [
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    },
  ];

  const InaugralCeremony = [
    { src: "https://i.ibb.co/0fr08M9/DSC-0028.jpg" },
    { src: "https://i.ibb.co/BG5XCH9/DSC-0030.jpg" },
    { src: "https://i.ibb.co/JyGpYxq/DSC-0034.jpg" },
    { src: "https://i.ibb.co/ZSMt5SQ/DSC-0045.jpg" },
    { src: "https://i.ibb.co/T08P53Y/DSC-0049.jpg" },
    { src: "https://i.ibb.co/1Rjmgyb/DSC-0051.jpg" },
    { src: "https://i.ibb.co/Xypw4Rt/DSC-0055.jpg" },
    { src: "https://i.ibb.co/qLGCZ2W/DSC-0064.jpg" },
    { src: "https://i.ibb.co/yYG4pY6/DSC-0068.jpg" },
    { src: "https://i.ibb.co/d2wxm0v/DSC-0071.jpg" },
    { src: "https://i.ibb.co/dcV8Cgh/DSC-0077.jpg" },
    { src: "https://i.ibb.co/jvy5ttG/DSC-0088.jpg" },
    { src: "https://i.ibb.co/zrZXZV9/DSC-0095.jpg" },
    { src: "https://i.ibb.co/4fYhJhN/DSC-0116.jpg" },
    { src: "https://i.ibb.co/z42GQFk/DSC-0125.jpg" },
    { src: "https://i.ibb.co/JcH7NSV/DSC-0128.jpg" },
    { src: "https://i.ibb.co/9Y3BxZK/DSC-0135.jpg" },
    { src: "https://i.ibb.co/wSBbdxY/DSC-0141.jpg" },
    { src: "https://i.ibb.co/BfmxYWx/DSC01092.jpg" },
    { src: "https://i.ibb.co/vzXhMy0/DSC01108.jpg" },
    { src: "https://i.ibb.co/x2MQkpZ/DSC01121.jpg" },
    { src: "https://i.ibb.co/7ryLnCs/DSC01127.jpg" },
    { src: "https://i.ibb.co/N3zcnHs/DSC01134.jpg" },
    { src: "https://i.ibb.co/HCYVY7N/DSC01136.jpg" },
    { src: "https://i.ibb.co/W50vWGC/DSC01206.jpg" },
    { src: "https://i.ibb.co/gjGKYmf/DSC01209.jpg" },
    { src: "https://i.ibb.co/x6ZrGRS/DSC01220.jpg" },
    { src: "https://i.ibb.co/Rzf6nV6/DSC01226.jpg" },
    { src: "https://i.ibb.co/FYMfkvm/DSC01236.jpg" },
    { src: "https://i.ibb.co/PYKbdvV/DSC01239.jpg" },
    { src: "https://i.ibb.co/wYbRFKw/DSC01255.jpg" },
    { src: "https://i.ibb.co/q9cjXVb/DSC01263.jpg" },
    { src: "https://i.ibb.co/kcvx874/DSC01264.jpg" },
    { src: "https://i.ibb.co/PtFs1FL/DSC01270.jpg" },
    { src: "https://i.ibb.co/4gG7yzk/DSC07278.jpg" },
    { src: "https://i.ibb.co/z4nqtvn/DSC07280.jpg" },
    { src: "https://i.ibb.co/Qnsy6nw/DSC07282.jpg" },
    { src: "https://i.ibb.co/dQbJnWD/DSC07284.jpg" },
    { src: "https://i.ibb.co/jrCLRGR/DSC07289.jpg" },
    { src: "https://i.ibb.co/5sQw5jL/DSC07294.jpg" },
    { src: "https://i.ibb.co/R61xYPC/DSC07300.jpg" },
    { src: "https://i.ibb.co/0MM1BmD/DSC07310.jpg" },
    { src: "https://i.ibb.co/PzBdsqC/DSC07312.jpg" },
    { src: "https://i.ibb.co/9t9b8Kg/DSC07316.jpg" },
    { src: "https://i.ibb.co/HTjFHHx/DSC07319.jpg" },
    { src: "https://i.ibb.co/6wTPnh7/DSC07322.jpg" },
    { src: "https://i.ibb.co/5n5zV3D/DSC07327.jpg" },
    { src: "https://i.ibb.co/1r7kTCj/DSC07350.jpg" },
    { src: "https://i.ibb.co/SB3nNqR/DSC07361.jpg" },
    { src: "https://i.ibb.co/vvJ9nsm/DSC07376.jpg" },
    { src: "https://i.ibb.co/FzH9c4q/DSC07379.jpg" },
    { src: "https://i.ibb.co/r0WbhzC/DSC07380.jpg" },
    { src: "https://i.ibb.co/dMc5Ntd/DSC07396.jpg" },
    { src: "https://i.ibb.co/ZG8ywm7/DSC07405.jpg" },
    { src: "https://i.ibb.co/qnsyj34/DSC07430.jpg" },
    { src: "https://i.ibb.co/bHc8STR/SKS-5399.jpg" },
    { src: "https://i.ibb.co/qNZCjY7/SKS-5410.jpg" },
    { src: "https://i.ibb.co/zH3qsNc/SKS-5488.jpg" },
    { src: "https://i.ibb.co/PQWbP8p/SKS-5521.jpg" },
    { src: "https://i.ibb.co/zQdCt0c/SKS-5557.jpg" },
    { src: "https://i.ibb.co/TLwpvbc/SKS-5602.jpg" },
    { src: "https://i.ibb.co/k9sFdMn/SKS-5618.jpg" },
    { src: "https://i.ibb.co/wL79vKg/SKS-5627.jpg" },
    { src: "https://i.ibb.co/t8Z4YsY/SKS-5688.jpg" },
    { src: "https://i.ibb.co/QXtqpL5/SKS-5698.jpg" },
    { src: "https://i.ibb.co/9pgmkYj/SKS-5723.jpg" },
    { src: "https://i.ibb.co/PYtQTZ2/SKS-5725.jpg" },
  ];

  const ClubActivity = [
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
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
          <div className="w-[85%] mx-auto mt-10">
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
          aria-label="Inaugral Ceremony"
          title={
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Inaugral Ceremony
            </span>
          }
          keepContentMounted
        >
          <div className="w-[85%] mx-auto mt-10">
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
          <div className="w-[85%] mx-auto mt-10">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="10px">
                {ClubActivity.map((image, index) => (
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
