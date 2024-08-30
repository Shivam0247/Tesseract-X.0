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

  const InaugralCeremony = [
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724960224/SKS_6406_sadet6.jpg",
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
