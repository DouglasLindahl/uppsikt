"use client";
import PriceCalculator from "@/components/price/page";
import styled from "styled-components";
import { colors } from "../../../theme";
import { socialLinks } from "../utils";
import { NavMenu } from "@/components/navMenu/page";
import { useState } from "react";
import SectionThree from "@/components/sectionThree/page";
import Footer from "@/components/footer/page";

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
export default function pris() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
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
          Vad kostar det?
          <StyledHeroSubtext>
            Med vår prisuträknare får du snabbt ett uppskattat pris på några av
            våra vanligaste tjänster – direkt på skärmen. Välj vad du behöver
            hjälp med, fyll i några enkla uppgifter och få en prisindikation
            direkt. Enkelt, snabbt och helt utan förpliktelser.
          </StyledHeroSubtext>
        </StyledHeroText>
      </StyledHero>
      <PriceCalculator></PriceCalculator>
      <SectionThree
        sectionHeader="Välkommen att höra av dig!"
        sectionText={[
          "Vill du boka ett första samtal eller få en offert?",
          "Kontakta oss på info@uppsikt.se eller ring oss direkt på {phoneNumber}",
          "Vi berättar gärna mer om hur Uppsikt kan förenkla din vardag – året om.",
        ]}
      />
      <Footer></Footer>
    </>
  );
}
