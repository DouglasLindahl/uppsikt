"use client";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../theme";
import { NavMenu } from "@/components/navMenu/page";
import SectionOne from "@/components/sectionOne/page";
import SectionTwo from "@/components/sectionTwo/page";
import SectionThree from "@/components/sectionThree/page";
import Footer from "@/components/footer/page";
import { socialLinks } from "./utils";
import { useRouter } from "next/navigation";
import PriceCalculator from "@/components/price/page";

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

  &:hover {
    cursor: pointer;
  }

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <StyledHomePage>
      <StyledHeader>
        <StyledMainHeader>
          <StyledLogo
            onClick={() => {
              router.push("/");
            }}
          />
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
            Oavsett om du bor året runt eller bara ibland – vi ser till att din
            fastighet är i trygga händer. Med Uppsikt får du en helhetslösning
            för tillsyn, skötsel och service – anpassad efter dina behov, din
            plats, din livsstil.
          </StyledHeroSubtext>
        </StyledHeroText>
      </StyledHero>

      <SectionOne
        sectionHeader={"En kontakt - Allt under kontroll"}
        sectionText={
          "Vi är din pålitliga partner på plats. Du får en kontaktperson som känner ditt hus – och ser till att du slipper onödiga samtal, oro eller körningar. Vi dokumenterar, rapporterar och finns där när du inte kan."
        }
      ></SectionOne>
      <SectionTwo
        id="services-section"
        sectionHeader="Helhet är vår styrka"
        sectionImage="/hero_image_two.png"
        sectionText={`Vi gör mer än att bara “kolla till huset”. Uppsikt kombinerar
regelbunden kontroll med praktisk hjälp och riktig omsorg – både
inomhus och utomhus. Vi förebygger problem innan de uppstår, och löser
dem när de gör det. Våra tjänster inkluderar:`}
        sectionListItems={[
          <>
            <strong>Tillsyn av hus & tomt - </strong> året om eller vid behov
          </>,
          <>
            <strong>Städning - </strong> från veckostäd till flyttstäd
          </>,
          <>
            <strong>Fönsterputs - </strong> in- och utvändigt. Året om
          </>,
          <>
            <strong>Vintersäkring - </strong> vatten, värme, trädgård
          </>,
          <>
            <strong>Trädgårdsservice - </strong> gräsklippning, häckar, löv
          </>,
          <>
            <strong>Hantverkshantering - </strong> vi släpper in, ser till &
            rapporterar
          </>,
          <>
            <strong>Trygghetskoll vid uthyrning - </strong> före, under och
            efter
          </>,
        ]}
      />
      <SectionOne
        sectionHeader={"Personlig service - professionellt utförd"}
        sectionText={
          "Bakom Uppsikt står människor med omtanke och expertis. Vi kombinerar modern tillsyn med klassisk servicekänsla. Det ska kännas både tryggt och enkelt att ha ett hus – även när du inte är där."
        }
      ></SectionOne>

      <SectionThree
        sectionHeader="Välkommen att höra av dig!"
        sectionText={[
          "Vill du boka ett första samtal eller få en offert?",
          "Kontakta oss på info@uppsikt.se eller ring oss direkt på {phoneNumber}",
          "Vi berättar gärna mer om hur Uppsikt kan förenkla din vardag – året om.",
        ]}
      />

      <Footer id="footer-section"></Footer>
    </StyledHomePage>
  );
}
