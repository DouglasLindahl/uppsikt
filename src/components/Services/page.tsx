import React from "react";
import ICText from "../ICText/page";
import Image from "next/image";

const Services: React.FC = () => {
  const services = [
    {
      icon: "instagram.svg",
      title: "Inre & yttre uppsikt",
      description:
        "Vi kommer ut och klappar på utsidan och insidan på er bostad för att säkerställa att det mår och ser bra ut.",
    },
    {
      icon: "instagram.svg",
      title: "Uppsikt vid uthyrning",
      description:
        "Vid uthyrning av bostaden erbjuder vi uppsikt före, under och efter vistelsen och finns tillgänglig som kontaktperson.",
    },
    {
      icon: "instagram.svg",
      title: "Vintersäkring",
      description:
        "När säsongen är över kommer vi ut och hanterar vatten, värme och trädgård inför vintersäsongen.",
    },
    {
      icon: "instagram.svg",
      title: "Hantverkare & leveranser",
      description:
        "Vi finns på plats och släpper in hantverkare och andra godkända besökare och verifierar säkerheten.",
    },
    {
      icon: "instagram.svg",
      title: "Städning & vädring",
      description:
        "Vi städar/vädrar er bostad innan semestern. Vi kan även ozonrengöra och införskaffa mat och blommor.",
    },
    {
      icon: "instagram.svg",
      title: "Kommer snart...",
      description: "Fler tjänster kommer snart. Håll dig uppdaterad!",
    },
  ];
  return (
    <div className="py-[64px] flex flex-col justify-center items-left gap-[32px] bg-white text-center">
      <div>
        <ICText color="main" size="xl" fontWeight="bold">
          Grundutbud av tjänster
        </ICText>
        <ICText size="large" color="main">
          Nedan finner du en sammanfattning av vårt grundutbud av tjänster.
        </ICText>
      </div>
      <div className="px-[128px] flex flex-wrap gap-10 justify-center ">
        {services.map((service, index) => (
          <div className="bg-gray w-[45%] flex flex-row p-[24px] rounded-[10px] text-left">
            <div className="w-[20%] p-[12px]">
              <Image
                src="/facebook.svg"
                width={100}
                height={200}
                alt="facebook logo"
              />
            </div>
            <div className="w-[70%]">
              <ICText fontWeight="bold" color="main" size="large">
                {service.title}
              </ICText>
              <ICText color="main">{service.description}</ICText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
