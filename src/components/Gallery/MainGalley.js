import React, { useState, useEffect, useContext } from "react";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FetchImageContext from "../../Context/FetchImage/FetchImageContext";
import { Accordion, AccordionItem } from "@nextui-org/react";
const inaugralCeremony = require.context("../../inaugralCeremony", true);
const inaugralCeremonyList = inaugralCeremony
  .keys()
  .map((image) => inaugralCeremony(image));

const ClubActivity = require.context("../../ClubActivity", true);
const ClubActivityList = ClubActivity.keys().map((image) =>
  ClubActivity(image)
);

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

  // const EDM = [
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM1.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM10.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM11.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM12.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM13.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM14.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM15.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM16.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM17.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM18.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM19.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM2.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM20.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM21.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM22.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM23.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM24.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM25.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM26.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM27.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM28.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM29.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM3.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM30.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM31.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM32.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM33.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM34.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM35.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM36.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM37.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM38.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM39.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM4.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM40.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM41.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM42.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM43.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM44.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM45.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM46.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM47.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM48.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM49.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM5.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM50.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM51.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM52.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM53.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM54.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM55.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM56.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM57.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM58.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM59.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM6.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM60.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM61.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM62.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM63.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM64.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM65.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM66.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM67.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM68.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM69.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM7.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM70.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM71.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM72.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM73.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM74.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM75.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM76.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM77.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM78.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM79.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM8.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM80.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM81.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM82.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM83.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM84.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM85.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM86.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM87.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM88.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM89.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM9.jpg" },
  //   { src: "https://snt-tess.s3.ap-south-1.amazonaws.com/EDM90.jpg" },
  // ];

  // const InauguralCeremony = [
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/10Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/11Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/12Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/13Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/14Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/15Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/16Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/17Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/19Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/1Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/20Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/21Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/22Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/23Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/24Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/25Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/26Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/27Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/28Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/29Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/2Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/30Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/31Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/32Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/33Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/34Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/35Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/36Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/37Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/38Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/39Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/3Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/40Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/41Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/42Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/43Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/44Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/45Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/46Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/47Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/48Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/49Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/4Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/50Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/51Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/52Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/53Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/54Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/55Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/56Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/57Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/58Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/59Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/5Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/60Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/61Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/62Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/63Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/64Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/65Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/66Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/67Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/68Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/6Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/8Ceremony.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/9Ceremony.JPG",
  //   },
  // ];

  // const ClubActivity = [
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/1ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/3ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/4ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/5ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/6ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/7ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/8ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/9ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/10ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/11ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/12ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/13ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/14ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/15ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/16ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/17ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/18ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/19ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/21ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/22ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/23ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/24ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/25ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/26ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/27ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/28ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/29ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/30ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/31ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/32ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/33ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/34ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/35ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/36ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/37ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/38ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/39ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/40ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/41ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/42ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/43ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/44ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/45ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/46ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/47ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/48ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/49ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/50ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/51ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/52ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/53ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/54ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/55ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/56ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/57ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/58ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/59ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/60ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/61ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/62ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/63ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/64ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/65ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/66ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/67ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/68ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/69ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/70ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/71ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/72ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/73ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/74ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/75ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/76ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/77ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/78ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/79ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/80ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/81ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/82ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/83ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/84ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/85ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/86ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/87ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/88ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/89ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/90ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/91ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/92ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/93ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/94ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/95ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/96ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/97ClubActivity.JPG",
  //   },
  //   {
  //     src: "https://snt-tess.s3.ap-south-1.amazonaws.com/98ClubActivity.JPG",
  //   },
  // ];

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
                {EDMList2.map((image, index) => (
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
                {ClubActivityList.map((image, index) => (
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
