import React from "react";
import ICText from "../ICText/page";
import Image from "next/image";

const ContactForm: React.FC = () => {
  return (
    <div className="py-[64px] px-[128px] flex flex-col justify center items-center relative gap-[64px]">
      <div className="absolute border-gray border-t-2 w-4/5 top-0"></div>
      <div className="text-center w-2/3">
        <ICText color="main" size="xl" fontWeight="bold">
          Kontakta oss
        </ICText>
        <ICText size="large" color="main">
          Nedan finns ett kort formulär, var god meddela oss dina specifika
          behov av boendevård idag, och låt oss se till att ditt hem får den
          omsorg det förtjänar.
        </ICText>
      </div>
      <div className="bg-gray p-[32px] w-full rounded-[12px] flex flex-row justify-between">
        <div className="w-[45%]">
          <form action="">
            <div className="mt-[20px] ml-[32px] mb-[8px]">
              <ICText color="main">Förnamn</ICText>
            </div>
            <input className="w-full p-[8px] rounded-[8px]" type="text" />
            <div className="mt-[20px] ml-[32px] mb-[8px]">
              <ICText color="main">Efternamn</ICText>
            </div>
            <input className="w-full p-[8px] rounded-[8px]" type="text" />
            <div className="mt-[20px] ml-[32px] mb-[8px]">
              <ICText color="main">Telefon</ICText>
            </div>
            <input className="w-full p-[8px] rounded-[8px]" type="tel" />
            <div className="mt-[20px] ml-[32px] mb-[8px]">
              <ICText color="main">E-postadress</ICText>
            </div>
            <input className="w-full p-[8px] rounded-[8px]" type="email" />
            <div className="mt-[20px] ml-[32px] mb-[8px]">
              <ICText color="main">Postkod</ICText>
            </div>
            <input className="w-full p-[8px] rounded-[8px]" type="text" />
            <div className="mt-[20px] ml-[32px] mb-[8px]">
              <ICText color="main">Meddelande</ICText>
            </div>
            <textarea rows={5} className="w-full p-[8px] rounded-[8px]" />
          </form>
        </div>
        <div className="w-[45%] flex flex-col justify-center relative">
          <div>
            <ICText color="main">
              Hur vi behandlar dina personuppgifter är viktigt för oss eftersom
              vi vet att det är viktigt för dig. I vår personuppgiftspolicy kan
              du läsa om denna hantering.
            </ICText>
            <a href="personuppgiftspolicy">
              <ICText color="main">
                - - Länk till personuppgiftspolicy - -
              </ICText>
            </a>
            <div className="flex flex-row gap-[16px]">
              <input type="checkbox" />
              <ICText color="main">
                Jag har läst och godkänner personuppgiftspolicyn
              </ICText>
            </div>
            <div>captcha</div>
          </div>
          <div className="absolute bottom-0">
            <button className="px-[32px] py-[4px] bg-main rounded-[8px]">
              <ICText color="white">Skicka</ICText>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
