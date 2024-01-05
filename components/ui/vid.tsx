import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Vid = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card
        className="flex flex-col border-2 rounded-[50px] shadow-lg hover:shadow-2xl px-24 pb-8 w-full h-max mx-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        style={{ backgroundColor: "#181824" }}
      >
        <div className="flex flex-col realtive mx-auto overflow-hidden justify-center rounded-2xl">
          <p className="font-bold text-[70px] text-center text-[#fff]">
            You've never <br />
            worked <span className="text-[#f84f39]">this fast</span>
          </p>

          <Image
            src={"/output.gif"}
            width={800}
            height={500}
            priority
            alt={"demo"}
            className="rounded-[50px]"
            unoptimized={true}
            unselectable="on"
          />
        </div>
      </Card>
    </div>
  );
};

export default Vid;
