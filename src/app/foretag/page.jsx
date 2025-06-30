"use client";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../../theme";
import { socialLinks } from "../utils";
import { NavMenu } from "@/components/navMenu/page";
import SectionOne from "@/components/sectionOne/page";
import Footer from "@/components/footer/page";
import SectionTwo from "@/components/sectionTwo/page";
import SectionThree from "@/components/sectionThree/page";

const StyledHomePage = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const StyledHeader = styled.header``;

const StyledMainHeader = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 64px;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const StyledHamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  height: 32px;
  width: 32px;
  gap: 4px;
  background-image: url("/hamburger.svg");
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledLogo = styled.div`
  background-image: url("/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 50px;

  @media (max-width: 768px) {
    width: 180px;
    height: 40px;
  }
`;

const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 36px;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledHero = styled.div`
  width: 100vw;
  position: relative;
`;

const StyledHeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const StyledHeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.background};
  font-weight: bold;
  text-align: center;
  font-size: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledHeroSubtext = styled.p`
  font-size: 24px;
  width: 50%;
  @media (max-width: 1148px) {
    display: none;
  }
`;
export default function Foretag() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHomePage>
      <StyledHeader>
        <StyledMainHeader>
          <StyledLogo />
          <StyledSocialIcons>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Facebook.svg" alt="Facebook" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Instagram.svg" alt="Instagram" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Linkedin.svg" alt="LinkedIn" />
            </a>
          </StyledSocialIcons>
          <StyledHamburger
            onClick={() => setMenuOpen(!menuOpen)}
          ></StyledHamburger>
        </StyledMainHeader>

        <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></NavMenu>
      </StyledHeader>
      <StyledHero>
        <StyledHeroImage src="/hero_image.jpeg" alt="Hero" />
        <StyledHeroText>
          Din Fastighet - Vårt Ansvar
          <StyledHeroSubtext>
            Uppsikt är en trygg och personlig servicepartner för företag och
            bostadsrättsföreningar som vill förenkla vardagen med ett
            helhetsgrepp kring fastighetsservice. Vi erbjuder professionella
            tjänster för både inomhus- och utomhusmiljöer – allt under ett och
            samma tak.
          </StyledHeroSubtext>
        </StyledHeroText>
      </StyledHero>
      <SectionOne
        sectionHeader={"Vad är uppsikt.se?"}
        sectionText={
          "Uppsikt AB grundades 2022 och erbjuder en rad tjänster som inkluderar hustillsyntjänster, städning och gräsklippning riktade både till privata kunder och företag. Företagets grundkoncept fokuserar på att ordna arbetstillfällen, vilket innebär att de strävar efter att skapa sysselsättning genom sina olika tjänster. Uppsikt AB verkar för att förenkla vardagen för sina kunder genom att erbjuda pålitliga och professionella tjänster inom hem- och trädgårdsvård."
        }
      ></SectionOne>
      <SectionTwo
        id="services-section"
        sectionHeader="Våra tjänster:"
        sectionImage="/hero_image_two.png"
        sectionText={``}
        sectionListItems={[
          <>
            <strong>Trapp- och kontorsstädning - </strong> regelbunden, pålitlig
            städning som skapar rena, trivsamma miljöer.
          </>,
          <>
            <strong>Fönsterputs - </strong> skinande resultat för både kontor
            och trapphus.
          </>,
          <>
            <strong>Grönyteskötsel - </strong> gräsklippning, rensning av
            rabatter, häckklippning m.m.
          </>,
          <>
            <strong>Tillsyn och vintersäkring - </strong> året-runt-trygghet för
            fastigheten.
          </>,
          <>
            <strong>Ekonomitjänster för BRF:er - </strong> bokföring, avisering
            av avgifter, fakturering och ekonomisk rådgivning, särskilt anpassat
            för bostadsrättsföreningar.
          </>,
        ]}
      />
      <SectionOne
        sectionHeader={"En kontakt - Allt under kontroll"}
        sectionText={
          "Vi är din pålitliga partner på plats. Du får en kontaktperson som känner ditt hus – och ser till att du slipper onödiga samtal, oro eller körningar. Vi dokumenterar, rapporterar och finns där när du inte kan."
        }
      ></SectionOne>
      <SectionTwo
        sectionHeader="Varför välja Uppsikt?"
        sectionImage="/hero_image_two.png"
        sectionText={``}
        sectionListItems={[
          <>
            <strong>
              En kontakt – Allt under kontroll <br />
            </strong>{" "}
            Genom samarbete med lokala aktörer kan vi erbjuda en enkel,
            samordnad kontaktväg. Vi tar ansvar för helheten – från städ till
            ekonomi – så att ni slipper koordinera flera leverantörer.
          </>,
          <>
            <strong>
              Lokalt engagemang <br />
            </strong>
            Vi verkar nära våra kunder och har stark förankring i de områden vi
            verkar i. Det gör att vi snabbt kan anpassa oss och leverera service
            med personlig omtanke.
          </>,
          <>
            <strong>
              Anpassade lösningar <br />
            </strong>{" "}
            Oavsett om ni är ett företag som vill ha en representativ
            kontorsmiljö, eller en BRF med behov av både utemiljöskötsel och
            ekonomisk förvaltning, skräddarsyr vi lösningen efter era behov.
          </>,
        ]}
      />{" "}
      <SectionOne
        sectionHeader={"Personlig service - professionellt utförd"}
        sectionText={
          "Bakom Uppsikt står människor med omtanke och expertis. Vi kombinerar modern tillsyn med klassisk servicekänsla. Det ska kännas både tryggt och enkelt att ha ett hus – även när du inte är där."
        }
      ></SectionOne>
      <SectionTwo
        sectionHeader="Tydlig nytta för BRF:er & företag"
        sectionImage="/hero_image_two.png"
        sectionText={``}
        sectionListItems={[
          <>
            <strong>
              Städ & fönsterputs <br />
            </strong>
            Ger rena, ljusa och välkomnande miljöer
          </>,
          <>
            <strong>
              Grönyteskötsel <br />
            </strong>
            Höjer trivseln och förbättrar fastigheters intryck och värde
          </>,
          <>
            <strong>
              konomitjänster för BRF <br />
            </strong>
            Förenklar styrelsens ansvar och ger trygghet i ekonomin
          </>,
          <>
            <strong>
              En kontakt – flera lösningar <br />
            </strong>
            Mindre administration, bättre överblick och högre effektivitet
          </>,
        ]}
      />
      <Footer></Footer>
    </StyledHomePage>
  );
}
