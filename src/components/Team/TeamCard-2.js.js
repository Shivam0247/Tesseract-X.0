import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";


function TeamCard({ name, position, img }) {
  return (
    <div >
      <CardContainer className="inter-var flex mx-[1em]">

        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-white border-white/[0.2] w-auto sm:w-[25rem] min-h-[35vh] rounded-xl p-6 border"
          data-aos="fade-in" data-aos-dealy="300">
          
          <CardItem translateZ="50" className="text-xl font-bold text-black ">
            {name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-800"
          >
            {position}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={img}
              height="1000"
              width="1000"
              className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <CardItem translateZ="50" className="text-xl font-bold text-white">
            <span></span>
          </CardItem>
          

          {/* <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              // as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div> */}
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default TeamCard;
