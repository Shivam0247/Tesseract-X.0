import React, { useState } from "react";
import TeamCard from "./TeamCard";
import { Avatar, Accordion, AccordionItem } from "@nextui-org/react";
import "./Team.css";
import Sonali from "../../ProfilePhoto/SonaliModi.jpeg";
import Rudra from "../../ProfilePhoto/RudraTrada.jpeg";
import Utkarsh from "../../ProfilePhoto/UtkarshRajput.jpeg";

function MainTeam() {
  // Initialize openKeys with both keys to have both accordion items open by default
  const [openKeys, setOpenKeys] = useState(["1", "2"]);

  const shivam =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/shivam.jpeg";
  const Khushi =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/KhushiShah.jpeg";
  const Krish =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/KrishModi.png";
  const Ansh =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/AnshSoni.jpg";
  const Rahil =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/RahilMavani.jpg";
  const Karan =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/KaranBabariya.jpg";
  const Jinay =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/JinayShah.jpg";
  const Aneri =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Anerishah.jpg";
  const Pratham =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/PrathamPatel.jpg";
  const Madhav =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/MadhavSampat.jpg";
  const Pranil =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Pranilkenche.png";
  const Aryan =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/AryanKadivar.jpeg";
  const Hetvi =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/HetviNarola.png";
  const Gargi =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/GargiShah.jpeg";
  const Pranat =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/PRANATVOHRA.jpg";
  const Het =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/HetShingala.jpg";

  const KhushiUttamani =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Khushi.jpg";
  const Isha =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/IshaSojitra.jpg";
  const Rachit =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/RachitShah.jpg";
  const Heer =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/HeerGaglani.jpg";
  const Tavleen =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/TavleenKaur.jpeg";
  const Jainil =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Jainil.jpeg";
  const Ishan =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Ishan.jpg";
  const Gopika =
    "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Gopika.png";

  // Card information stored in state
  const [executive, setExecutive] = useState([
    {
      name: "Khushi Shah",
      position: "General Secretary",
      img: Khushi,
      linkedIn:
        "https://www.linkedin.com/in/khushi-shah-2178a4278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta:
        "https://www.instagram.com/khushiee.iee/profilecard/?igsh=NXl3dWFzNnBranhx",
      twitter: "",
    },
    {
      name: "Krish Modi",
      position: "Treasurer",
      img: Krish,
      linkedIn: "https://www.linkedin.com/in/krishmodi33/",
      insta: "https://www.instagram.com/krishmodi_0202/",
      twitter: "",
    },
  ]);

  const [heads, setHeads] = useState([
    {
      name: "Shivam Patel",
      position: "Technical Head",
      img: shivam,
      linkedIn: "https://www.linkedin.com/in/-shivampatel/",
      insta: "https://www.instagram.com/shivam_0247/",
      twitter: "https://x.com/SHIVAM_0247",
    },
    {
      name: "Ansh Soni",
      position: "Graphic Design Head",
      img: Ansh,
      linkedIn: "https://www.linkedin.com/in/anshsoni04/",
      insta: "https://www.instagram.com/_ansh_sonii/?next=%2F",
      twitter: "https://x.com/AnshSon97791840",
    },
    {
      name: "Rahil Mavani",
      position: "Graphic Design Head",
      img: Rahil,
      linkedIn:
        "https://www.linkedin.com/in/rahilmavani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/rahil.mavani?igsh=czh2N3FpMHZ6dndu",
      twitter: "https://x.com/rahil_mavani?t=lqEAbzHoLp-jzRc5fWJOoQ&s=09",
    },
    {
      name: "Karan Babariya",
      position: "Graphic Design Head",
      img: Karan,
      linkedIn:
        "https://www.linkedin.com/in/karan-babariya-893b062a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/the.krnn?igsh=MThlcmZmYjZ1ZHd0eA==",
      twitter: "https://x.com/KBabariya_58?t=NlKFqHhTjJxfR2obfSFYrg&s=09",
    },
    {
      name: "Jinay Shah",
      position: "Logistics Head",
      img: Jinay,
      linkedIn: "https://www.linkedin.com/in/jinay-shah14/",
      insta: "https://www.instagram.com/jinay_shah14/",
      twitter: "",
    },
    {
      name: "Aneri Shah",
      position: "Logistics Head",
      img: Aneri,
      linkedIn:
        "https://www.linkedin.com/in/aneri-shah24?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta:
        "https://www.instagram.com/aneri.shah_1225?igsh=MTVjb3duYjBmY2dtaQ==",
      twitter: "",
    },
    {
      name: "Pratham Patel",
      position: "Logistics Head",
      img: Pratham,
      linkedIn: "https://www.linkedin.com/in/pratham-patel-2001a7247/",
      insta: "https://www.instagram.com/pratham042004/",
      twitter: "",
    },
    {
      name: "Jainil Patel",
      position: "Logistics Head",
      img: Jainil,
      linkedIn:
        "https://www.linkedin.com/in/jainil-patel-595869269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta:
        "https://www.instagram.com/jainilpatel___?igsh=d2lycnBmaHh2N2tx&utm_source=qr",
      twitter: "",
    },
    {
      name: "Madhav Sampat",
      position: "Event Management Head",
      img: Madhav,
      linkedIn:
        "https://www.linkedin.com/in/madhav-sampat-051125253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr",
      insta: "https://www.instagram.com/madhavsampat?igsh=MWZ1NjdseGR5dXU3dg==",
      twitter: "https://x.com/madhavsampat04?t=6RYp_Ba0ogsAEFBGuGgZGw&s=09",
    },
    {
      name: "Pranil Kenche",
      position: "Event Management Head",
      img: Pranil,
      linkedIn:
        "https://www.linkedin.com/in/pranil-kenche-b25157264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/pranil_24?igsh=MW96YW0zdzUwd3U2Ng==",
      twitter: "",
    },
    {
      name: "Sonali Modi",
      position: "Event Management Head",
      img: Sonali,
      linkedIn: "",
      insta:
        "https://www.instagram.com/sonali.modi_?igsh=a3d2NzczNmp5Y3dq&utm_source=qr",
      twitter: "",
    },
    {
      name: "Aryan Kadivar",
      position: "Sponorship Head",
      img: Aryan,
      linkedIn:
        "https://www.linkedin.com/in/aryan-kadivar-51b137249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta:
        "https://www.instagram.com/aryankmusic?igsh=ZnByNW43NnJqZHRm&utm_source=qr",
      twitter: "",
    },
    {
      name: "Hetvi Narola",
      position: "Sponorship Head",
      img: Hetvi,
      linkedIn:
        "https://www.linkedin.com/in/hetvi-narola-7b8279235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta:
        "https://www.instagram.com/hetvi.7104/profilecard/?igsh=aDIwazJxMHQxNDBp",
      twitter: "",
    },
    {
      name: "Rudra Trada",
      position: "Sponorship Head",
      img: Rudra,
      linkedIn: "",
      insta:
        "https://www.instagram.com/rudra_trada?igsh=ZHJwaWM5bWs2M2Rq&utm_source=qr",
      twitter: "",
    },
    {
      name: "Gargi Shah",
      position: "Fine Arts Head",
      img: Gargi,
      linkedIn:
        "https://www.linkedin.com/in/gargi-shah-a08ab2248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta:
        "https://www.instagram.com/_gargishah24_?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
      twitter: "",
    },
    {
      name: "Pranat Vohra",
      position: "Fine Arts Head",
      img: Pranat,
      linkedIn:
        "https://www.linkedin.com/in/pranat-vohra-2336a62b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/pranatvohra?igsh=NzNuOXIxejN5OTM=",
      twitter: "",
    },
    {
      name: "Gopika Gattani",
      position: "Fine Arts Head",
      img: Gopika,
      linkedIn:
        "https://www.linkedin.com/in/gopika-gattani-6a09a1325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/wake._and_.paint?igsh=aTc2d29pdG9xOGxv",
      twitter: "",
    },
    {
      name: "Het Shingala",
      position: "Hospitality Head",
      img: Het,
      linkedIn:
        "https://www.linkedin.com/in/het-shingala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/het_910?igsh=MXM5N3VlcTk5cHM4dg==",
      twitter: "https://x.com/Het_910?t=TnNsr3gBsoz7VI0nd67KkA&s=08",
    },
    {
      name: "Utkarsh Rajput",
      position: "Hospitality Head",
      img: Utkarsh,
      linkedIn:
        "https://www.linkedin.com/in/utkarsh-rajput-bb97b3299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      insta:
        "https://www.instagram.com/utkarsh0510?igsh=MTd0Nnp5djYyd2U1OA%3D%3D&utm_source=qr",
      twitter: "",
    },
    {
      name: "Khushi Uttamani",
      position: "Publicity & Social Media Head",
      img: KhushiUttamani,
      linkedIn: "https://www.linkedin.com/in/khushi-uttamani-95b8a6257/",
      insta: " https://www.instagram.com/khushiuttamanii/",
      twitter: "",
    },
    {
      name: "Isha Sojitra",
      position: "Publicity & Social Media Head",
      img: Isha,
      linkedIn:
        "https://www.linkedin.com/in/isha-sojitra-0876352b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta:
        "https://www.instagram.com/ishasojitra05?igsh=MWoxeDUzMDhjMjgzZw==",
      twitter: "",
    },
    {
      name: "Ishan Shah",
      position: "Publicity & Social Media Head",
      img: Ishan,
      linkedIn:
        "https://www.linkedin.com/in/ishan-shah-281678271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/ishan.s_1074?igsh=MWR6ZndrY3Fhcnp4bQ==",
      twitter: "",
    },
    {
      name: "Rachit Shah",
      position: "Publicity & Social Media Head",
      img: Rachit,
      linkedIn: "https://www.linkedin.com/in/rachit-shah-/",
      insta: "https://www.instagram.com/_rach.it?igsh=MTdwZjg2NGEwZWI2Mg==",
      twitter: "",
    },
    {
      name: "Heer Gaglani",
      position: "Content & Documentation Head",
      img: Heer,
      linkedIn:
        "https://www.linkedin.com/in/heer-gaglani-898016266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      insta: "https://www.instagram.com/heer_206?igsh=cmRvYjF0djU1a3Jq",
      twitter: "",
    },
    {
      name: "Tavleen Kaur",
      position: "Content & Documentation Head",
      img: Tavleen,
      linkedIn: "www.linkedin.com/in/tavleenkaur108",
      insta: "https://www.instagram.com/t.a.v.leen/",
      twitter: "",
    },
  ]);

  // Handle selection change for accordion
  const handleSelectionChange = (keys) => {
    // Convert Set to array
    const keysArray = Array.from(keys);
    setOpenKeys(keysArray);
  };

  return (
    <div className="MainTeam w-full min-h-[50vh] pb-20 py-10 bg-black">
      <h2 className="max-w-[100%] mx-[1.8em] mb-[1rem] text-4xl md:text-5xl flex justify-center font-bold text-neutral-200 mt-[6rem]">
        The Team
      </h2>
      <h4 className="text-neutral-300 flex justify-center text-[15px] mb-[3em]">
        Presenting the Team That Powers SNT
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
          aria-label="Executives"
          title={
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Executives
            </span>
          }
          keepContentMounted
        >
          <div className="team mx-[2em] flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row flex-wrap justify-center">
            {executive.map((card, index) => (
              <TeamCard
                key={index}
                name={card.name}
                position={card.position}
                img={card.img}
                insta={card.insta}
                linkedIn={card.linkedIn}
                twitter={card.twitter}
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Heads"
          title={
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Heads
            </span>
          }
          keepContentMounted
        >
          <div className="team mx-[2em] flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row flex-wrap justify-center">
            {heads.map((card, index) => (
              <TeamCard
                key={index}
                name={card.name}
                position={card.position}
                img={card.img}
                insta={card.insta}
                linkedIn={card.linkedIn}
                twitter={card.twitter}
              />
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MainTeam;
