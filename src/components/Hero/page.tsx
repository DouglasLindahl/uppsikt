import React from "react";
import Image from "next/image";
import ICText from "../ICText/page";

const Hero: React.FC = () => {
  return (
    <div className="relative w-screen h-[450px] overflow-hidden">
      <Image src="/hero.png" layout="fill" objectFit="cover" alt="Hero image" />
      <div className="absolute inset-0 flex items-center justify-center">
        <ICText size="xl" fontWeight="bold" color="white">
          Fastighetsunderhåll Gjort Enkelt
        </ICText>
      </div>
    </div>
  );
};

export default Hero;
