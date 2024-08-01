import React from "react";
import ICText from "../ICText/page";

const WhoIsUppsiktFor: React.FC = () => {
  return (
    <div className="pl-[164px] py-[64px] flex flex-col justify-center items-left gap-[32px] bg-main text-left">
      <div>
        <ICText color="white" size="xl" fontWeight="bold">
          Vem är uppsikt.se för?
        </ICText>
      </div>
      <div className="w-[70%]">
        <ICText size="large" color="white">
          Har du en sommarstuga eller en båt vid kusten, en hyresfastighet i en
          stad, stad eller by som ligger långt från ditt hem, eller behöver ditt
          hem helt enkelt lite regelbunden Tender-Loving-Care? I så fall kan vi
          hjälpa till att se till att din fastighet eller båt är i utmärkt skick
          året runt. Uppsikt.se är perfekt för fastighetsägare som:
        </ICText>
      </div>
      <ul className="list-disc pl-6 text-white">
        <li>
          <ICText size="large" color="white">
            Hyr ut sina fastigheter på plattformar som Airbnb och Booking.com
          </ICText>
        </li>
        <li>
          <ICText size="large" color="white">
            Borta på semester eller affärsresor
          </ICText>
        </li>
        <li>
          <ICText size="large" color="white">
            Bor långa avstånd från sina investeringsfastigheter
          </ICText>
        </li>
        <li>
          <ICText size="large" color="white">
            Behöver checka in på hem och båtar efter svåra väderhändelser
          </ICText>
        </li>
      </ul>
    </div>
  );
};
export default WhoIsUppsiktFor;
