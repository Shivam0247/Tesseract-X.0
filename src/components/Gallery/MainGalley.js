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
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964329/EDM1_zj1qtl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964354/EDM10_srukcd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964356/EDM11_jhm3yb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964358/EDM12_imink8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964360/EDM13_we8ezf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964363/EDM14_xv1hir.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964366/EDM15_nmq4hr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964370/EDM16_ac3yat.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964372/EDM17_wwfdwe.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964376/EDM18_fcw4ay.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964377/EDM19_ntudv6.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964331/EDM2_janq6t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964380/EDM20_wsfmeb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964384/EDM21_jpcaqq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964386/EDM22_uqsu2i.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964389/EDM23_edpnku.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964392/EDM24_ypbbjo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964404/EDM25_i92uvd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964406/EDM26_qstti8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964411/EDM27_wkv47t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964442/EDM28_gsnxeh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964441/EDM29_yhv74r.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964336/EDM3_lmvt2e.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964459/EDM30_e1y9ez.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964462/EDM31_a1bhxy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964458/EDM32_dlufgb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964464/EDM33_y9ykga.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964489/EDM34_jkqkaq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964490/EDM35_hfyudf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964616/EDM79_jkpj9g.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964477/EDM37_kbr6jg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964485/EDM38_tyjqp0.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964479/EDM39_i8cqi0.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964334/EDM4_zgeimn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964490/EDM40_utpswr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964490/EDM41_rzggwa.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964491/EDM42_uuwpmb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964505/EDM43_y90xh8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964506/EDM44_ktxfh7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964499/EDM45_yqjukq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964505/EDM46_z6f7ra.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964508/EDM47_p1dvth.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964516/EDM48_uy9avc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964335/EDM5_go11nk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964520/EDM50_w7hlf6.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964505/EDM51_uq2whd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964515/EDM52_hry8bd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964520/EDM53_rwdqef.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964523/EDM54_mzzcfi.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964525/EDM55_m8f0pw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964526/EDM56_nw9ifo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964526/EDM57_yftfcp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964525/EDM58_vmcy8f.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964527/EDM59_pt9vpe.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964337/EDM6_iqzqlw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964535/EDM60_qjc8or.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964537/EDM61_yswwns.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964541/EDM62_atikt9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964545/EDM63_lue8av.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964546/EDM64_nbxmsv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964547/EDM65_jodwa2.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964552/EDM66_v9qgxy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964554/EDM67_pqkw3h.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964559/EDM68_hd5sdl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964561/EDM69_kaayku.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964344/EDM7_xuonqu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964564/EDM70_i0tzrg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964567/EDM71_uju7m5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964572/EDM72_yfzbl7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964578/EDM73_azhogo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964580/EDM74_odvcho.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964596/EDM75_q7cuy5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964597/EDM76_h8v1nl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964608/EDM77_uyaxxu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964609/EDM78_qoa3qz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964616/EDM79_jkpj9g.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964348/EDM8_vhfwhl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964622/EDM81_xxvhi7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964626/EDM82_iy6r0a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964638/EDM83_uftohy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964640/EDM84_p9rm10.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964645/EDM85_j7i3j4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964647/EDM86_bomxvr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964648/EDM87_ickjcp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964655/EDM88_m8snxy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964656/EDM89_dkkon5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964351/EDM9_jwyjaw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dr8kooipi/image/upload/v1724964659/EDM90_jsnvod.jpg",
    },
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
