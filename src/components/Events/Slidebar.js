import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const SliderCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="mx-auto overflow-hidden w-full h-[600px] md:max-w-[100%] md:h-[700px] rounded-lg bg-custom-gray flex flex-col items-center justify-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-gray-100 text-center">
        <h4 className="font-bold text-xl md:text-2xl">{title}</h4>
        <small className="text-base md:text-lg text-gray-400">
          {description}
        </small>
      </CardHeader>
      <CardBody className="overflow-hidden py-2 flex-grow flex items-center justify-center">
        <Image
          alt={`${title} background`}
          className="object-cover rounded-xl"
          src={imageUrl}
          width={1200}
          height={600}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
        />
      </CardBody>
    </Card>
  );
};

export default SliderCard;
