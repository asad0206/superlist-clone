// Import necessary libraries and components
import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title1: string;
  title2: string;
  title3: string;
  src: string;
  color: string;
  i: number;
  hue: string;
}

const CardComponent: React.FC<CardProps> = ({
  title1,
  title2,
  title3,
  src,
  color,
  i,
  hue,
}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center sticky top-0 p-24 w-full h-full">
      <Card
        className="w-screen h-screen flex flex-row border-2 rounded-[50px] w-full h-full"
        style={{ backgroundColor: hue }}
      >
        <div className="flex flex-col relative mx-auto min-h-min overflow-hidden justify-center w-1/2 rounded-[50px]">
          <p
            className="font-bold text-3xl text-center"
            style={{ color: color }}
          >
            {title1}
          </p>
          <p className="font-bold text-3xl text-center">{title2}</p>
          <p className="font-bold text-3xl text-center">{title3}</p>
        </div>

        <div className="flex flex-col justify-center w-1/2 h-full relative mx-auto overflow-hidden rounded-[50px]">
          <img
            className="object-contain rounded-[50px]"
            src={src}
            alt={title1}
          />
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
