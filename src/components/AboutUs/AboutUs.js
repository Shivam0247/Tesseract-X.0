import React from "react";
import { Timeline } from "../ui/timeline"; // Adjust the path if necessary

export function AboutUs() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-lg md:text-lg    font-normal mb-5">
            Theme Launch 2024
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
            🌎Tesseract X's 2024 theme centers around the five fundamental elements—Earth, Fire, Air, Water, and Ether—emphasizing their significance in shaping the future of technology and innovation
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
            🌎The theme highlights the deep relationship between natural forces and technological advancements, setting the stage for discussions and activities exploring how these elements will influence future scientific and technological progress.
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/themelaunch.png"
              alt="Theme Launch"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/encode.png"
              alt="Encode at theme launch"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/comm-reveal.png"
              alt="Committee reveal"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/dropdown.png"
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
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🦸🏻‍♂️"The Extraordinary TechVerse": Tesseract 2023 embraces superheroes, science fiction, and the multiverse to make complex scientific and technological concepts more relatable and accessible to a broader audience.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          🦸🏻‍♂️By leveraging the appeal of superheroes, the theme connects intricate ideas in physics and technology with popular culture, 
          attracting a diverse audience while promoting technical excellence.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/inaugral.png"
              alt="inaugration "
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/drone-workshop.png"
              alt="drone workshop"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/valo-tournament.png"
              alt="valorent tournament"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/edm-night.png"
              alt="edm-night"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Tess is going to held in the month of november
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ UI update on text editor
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Image hosting and responsiveness
            </div>
          </div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal">
            <span className="text-neutral-300">Published</span> on
            <span className="text-neutral-100"> August 25, 2024</span>
          </p>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
export default AboutUs;
