import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

function TeamCard({ name, position, img, insta, linkedIn, twitter }) {
  return (
    <div>
      <CardContainer className="inter-var flex mx-[1em]">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[19rem] rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            {position}
          </CardItem>
          <CardItem
            translateZ="100"
            className="w-full flex justify-center items-center mt-4"
          >
            <img
              src={img}
              className="h-[150px] w-[160px] object-cover rounded-full group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white mt-3"
          >
            <span>
              <Link
                to={linkedIn || "#"}
                className={!linkedIn ? "cursor-not-allowed" : ""}
              >
                <i className="fa-brands fa-linkedin mr-3"></i>
              </Link>
              <Link
                to={insta || "#"}
                className={!insta ? "cursor-not-allowed" : ""}
              >
                <i className="fa-brands fa-instagram mr-3"></i>
              </Link>
              {!!twitter && (
                <Link
                  to={twitter || "#"}
                  className={!twitter ? "cursor-not-allowed" : ""}
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
              )}
            </span>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default TeamCard;
