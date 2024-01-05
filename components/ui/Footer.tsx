import React from "react";
import { Button } from "./button";
import DrawButton from "./DrawButton";

const Footer = () => {
  return (
    <footer className="w-screen w-full flex flex-col bg-[#181824] p-40">
      <div className="flex bg-[#272737] p-24 rounded-[40px]">
        {/* First Row */}
        <div className="mr-8 flex-grow">
          <div className="mt-4 text-white">
            <p className="text-primary font-bold text-[30px] mb-2">Superlist</p>
            <p className="text-[23px] mb-1">Home</p>
            <p className="text-[23px] mb-1">Updates</p>
            <p className="text-[23px] mb-1">Pricing</p>
            <p className="text-[23px] mb-1">Careers</p>
            <p className="text-[23px] mb-1">Suggestions</p>
            <p className="text-[23px] mb-1">Help Center</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="mr-8 flex-grow">
          <div className="mt-4 text-white">
            <p className="text-[#272737] font-bold text-[30px] mb-2">
              Superlist
            </p>
            <p className="text-[23px] mb-1">Open Source</p>
            <p className="text-[23px] mb-1">Cookies</p>
            <p className="text-[23px] mb-1">Privacy</p>
            <p className="text-[23px] mb-1">Terms</p>
            <p className="text-[23px] mb-1">Contact</p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex-grow">
          <div className="mt-4 text-white">
            <p className="text-[#2590f2] font-bold text-[30px] mb-2">App</p>
            <p className="text-[23px] mb-1">Mac</p>
            <p className="text-[23px] mb-1">Web</p>
            <p className="text-[23px] mb-1">iOS</p>
            <p className="text-[23px] mb-1">Android</p>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex-grow">
          <div className="mt-4 text-white">
            <p className="text-[#2a966f] font-bold text-[30px] mb-2">Socials</p>
            <p className="text-[23px] mb-1">Github</p>
            <p className="text-[23px] mb-1">LinkedIn</p>
            <p className="text-[23px] mb-1">Instagram</p>
            <p className="text-[23px] mb-1">X</p>
          </div>
        </div>

        {/* Fifth Row */}
        <div className="flex-grow">
          <p className="text-[#6b66da] font-bold text-[30px] mb-2">Updates</p>
          <div className="mt-4 text-white bg-[#303041] p-2 rounded-xl w-[250px] h-[250px]">
            <p className="mb-1 text-[30px] font-semi-bold text-[#6b66da]">
              Quickly Add new tasks in lists 👉
            </p>
            <br />
            <Button
              variant="outline"
              className="bg-quaternary p-2 text-[25px] font-bold rounded-full"
            >
              V 0.33
            </Button>
            <br />
          </div>
        </div>
        <DrawButton></DrawButton>
      </div>
    </footer>
  );
};

export default Footer;
