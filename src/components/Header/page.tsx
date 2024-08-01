import React from "react";
import ICText from "../ICText/page";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div>
      <div className="px-[64px] py-[24px] bg-main flex flex-row justify-between items-center">
        <Image src="/logo.png" width={200} height={200} alt="uppsikt logo" />
        <div className="flex flex-row justify-center items-center gap-[32px]">
          <Image
            src="/facebook.svg"
            width={20}
            height={200}
            alt="facebook logo"
          />
          <Image
            src="/instagram.svg"
            width={20}
            height={200}
            alt="instagram logo"
          />
          <Image
            src="/linkedin.svg"
            width={20}
            height={200}
            alt="linkedin logo"
          />
        </div>
      </div>
      <div className="bg-white w-screen h-[40px] flex flex-row gap-[64px] justify-center items-center">
        <ICText size="small">Start</ICText>
        <ICText size="small">Våra tjänster</ICText>
        <ICText size="small">Anskaffning</ICText>
        <ICText size="small">Kontakta oss</ICText>
        <ICText size="small">Logga in</ICText>
      </div>
    </div>
  );
};

export default Header;
