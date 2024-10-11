import React from "react";
import { Timeline } from "../ui/timeline";

export function AboutUs() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-sm sm:text-2xl mb-5 font-[Orbitron] font-[700]">
            The Future is Elemental
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-xs md:text-sm sm:text-[12px] lg:text-[15px] text-neutral-300 text-[8px] font-[Orbitron] font-[500] sm:font-[500]">
              Tesseract X's 2024 theme centers around the five fundamental
              elements—Earth, Fire, Air, Water, and Ether—emphasizing their
              significance in shaping the future of technology and innovation
            </div>
            <br />
            <div className="flex gap-2 items-center text-xs md:text-sm sm:text-[12px] lg:text-[15px] text-neutral-300 text-[8px] font-[Orbitron] font-[500] sm:font-[500]">
              The theme highlights the deep relationship between natural forces
              and technological advancements, setting the stage for discussions
              and activities exploring how these elements will influence future
              scientific and technological progress.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://snt-images-bucket.s3.ap-south-1.amazonaws.com/IMG_4186.DNG"
              alt="Theme Launch"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://snt-images-bucket.s3.ap-south-1.amazonaws.com/IMG_5629.JPG"
              alt="Encode at theme launch"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://snt-images-bucket.s3.ap-south-1.amazonaws.com/SKS_7504.JPG"
              alt="Committee reveal"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/shivamWalk.jpeg"
              alt="dropdown"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 text-sm sm:text-2xl mb-5 font-[Orbitron] font-[700]">
            Amazing Tech-Verse
          </p>
          <p className="gap-2 items-center text-xs md:text-sm sm:text-[12px] lg:text-[15px] text-neutral-300 text-[8px] font-[Orbitron] font-[500] sm:font-[500]">
            <span className="text-white">The Extraordinary TechVerse : </span>
            Tesseract 2023 embraces superheroes, science fiction, and the
            multiverse to make complex scientific and technological concepts
            more relatable and accessible to a broader audience.
          </p>
          <br />
          <p className="gap-2 items-center text-xs md:text-sm sm:text-[12px] lg:text-[15px] text-neutral-300 text-[8px] font-[Orbitron] font-[500] sm:font-[500]">
            By leveraging the appeal of superheroes, the theme connects
            intricate ideas in physics and technology with popular culture,
            attracting a diverse audience while promoting technical excellence.
          </p>
          <br />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://snt-images-bucket.s3.ap-south-1.amazonaws.com/23Ceremony.JPG"
              alt="inaugration "
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://snt-images-bucket.s3.ap-south-1.amazonaws.com/53ClubActivity.JPG"
              alt="drone workshop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://snt-images-bucket.s3.ap-south-1.amazonaws.com/58ClubActivity.JPG"
              alt="valorent tournament"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://snt-images-bucket.s3.ap-south-1.amazonaws.com/98ClubActivity.JPG"
              alt="edm-night"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
export default AboutUs;
