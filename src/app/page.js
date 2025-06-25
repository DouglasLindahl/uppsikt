"use client";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../theme";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { phoneNumber, socialLinks } from "./utils";

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

const StyledSubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
  background-color: ${colors.background};
  padding: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMobileMenu = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: ${colors.background};
  padding: 16px;
  gap: 16px;

  img {
    width: 30px;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
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

const StyledNavItem = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  text-decoration: none;
  color: ${colors.primary};
  &:hover {
    cursor: pointer;
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

const StyledSectionOne = styled.div`
  color: ${colors.primary};
  background-color: ${colors.background};
  text-align: center;
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const StyledSectionOneHeader = styled.p`
  font-size: 64px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledSectionOneText = styled.p`
  font-size: 24px;
  max-width: 70%;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledSectionTwo = styled.div`
  position: relative;
  color: ${colors.background};
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const StyledSectionTwoInfo = styled.div`
  padding: 64px 16px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  z-index: 1;
`;

const StyledSectionTwoHeader = styled.div`
  font-size: 64px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledSectionTwoText = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledSectionTwoList = styled.ul`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledSectionTwoListItem = styled.li`
  margin-left: 24px;
  padding-top: 12px;
`;

const StyledSectionTwoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const StyledFooter = styled.footer`
  background-color: ${colors.primary};
  padding: 80px 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.background};
  gap: 64px;
`;

const StyledFooterTopSection = styled.div`
  width: 85%;
`;

const StyledFooterBottomSection = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

const StyledFooterLogo = styled.div`
  background-image: url("/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
`;

const StyledFooterInfoItem = styled.p``;

const StyledFooterLinkItem = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const StyledFooterCopyrightSection = styled.div`
  text-align: center;
`;

const StyledSectionThree = styled.div`
  position: relative;
  color: ${colors.background};
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const StyledSectionThreeInfo = styled.div`
  padding: 64px 16px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 1;
`;

const StyledSectionThreeHeader = styled.div`
  font-size: 64px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledSectionThreeText = styled.div`
  font-size: 24px;
  text-align: center;
  width: 70%;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledSectionThreeImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();

  const handleNavigation = (type) => {
    if (type === "start") {
      router.push("/");
    } else if (type === "services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "anskaffning") {
      router.push("/anskaffning");
    } else if (type === "kontakt") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "login") {
      router.push("/login");
    }
    setMenuOpen(false);
  };

  return (
    <StyledHomePage>
      <StyledHeader ref={heroRef}>
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

        <StyledSubHeader>
          <StyledNavItem onClick={() => handleNavigation("start")}>
            Start
          </StyledNavItem>
          <StyledNavItem onClick={() => handleNavigation("services")}>
            Våra tjänster
          </StyledNavItem>
          <StyledNavItem onClick={() => handleNavigation("anskaffning")}>
            Anskaffning
          </StyledNavItem>
          <StyledNavItem onClick={() => handleNavigation("kontakt")}>
            Kontakta oss
          </StyledNavItem>
          <StyledNavItem as="button" onClick={() => handleNavigation("login")}>
            Logga in
          </StyledNavItem>
        </StyledSubHeader>

        <StyledMobileMenu open={menuOpen}>
          <StyledNavItem onClick={() => handleNavigation("start")}>
            Start
          </StyledNavItem>
          <StyledNavItem onClick={() => handleNavigation("services")}>
            Våra tjänster
          </StyledNavItem>
          <StyledNavItem onClick={() => handleNavigation("anskaffning")}>
            Anskaffning
          </StyledNavItem>
          <StyledNavItem onClick={() => handleNavigation("kontakt")}>
            Kontakta oss
          </StyledNavItem>
          <StyledNavItem as="button" onClick={() => handleNavigation("login")}>
            Logga in
          </StyledNavItem>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Facebook-black.svg" alt="Facebook" />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Instagram-black.svg" alt="Instagram" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Linkedin-black.svg" alt="LinkedIn" />
          </a>
        </StyledMobileMenu>
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

      <StyledSectionOne>
        <StyledSectionOneHeader>
          En kontakt - Allt under kontroll
        </StyledSectionOneHeader>
        <StyledSectionOneText>
          Vi är din pålitliga partner på plats. Du får en kontaktperson som
          känner ditt hus – och ser till att du slipper onödiga samtal, oro
          eller körningar. Vi dokumenterar, rapporterar och finns där när du
          inte kan.
        </StyledSectionOneText>
      </StyledSectionOne>

      <StyledSectionTwo ref={servicesRef}>
        <StyledSectionTwoImage src="/hero_image_two.png" alt="Hero" />
        <StyledSectionTwoInfo>
          <StyledSectionTwoHeader>Helhet är vår styrka</StyledSectionTwoHeader>
          <StyledSectionTwoText>
            Vi gör mer än att bara “kolla till huset”. Uppsikt kombinerar
            regelbunden kontroll med praktisk hjälp och riktig omsorg – både
            inomhus och utomhus. Vi förebygger problem innan de uppstår, och
            löser dem när de gör det. Våra tjänster inkluderar:
          </StyledSectionTwoText>
          <StyledSectionTwoList>
            <StyledSectionTwoListItem>
              <strong>Tillsyn av hus & tomt - </strong> året om eller vid behov
            </StyledSectionTwoListItem>
            <StyledSectionTwoListItem>
              <strong>Städning - </strong> från veckostäd till flyttstäd
            </StyledSectionTwoListItem>
            <StyledSectionTwoListItem>
              <strong>Vintersäkring - </strong> vatten, värme, trädgård
            </StyledSectionTwoListItem>
            <StyledSectionTwoListItem>
              <strong>Trädgårdsservice - </strong> gräsklippning, häckar, löv
            </StyledSectionTwoListItem>
            <StyledSectionTwoListItem>
              <strong>Hantverkshantering - </strong> vi släpper in, ser till &
              rapporterar
            </StyledSectionTwoListItem>
            <StyledSectionTwoListItem>
              <strong>Trygghetskoll vid uthyrning - </strong> före, under och
              efter
            </StyledSectionTwoListItem>
          </StyledSectionTwoList>
        </StyledSectionTwoInfo>
      </StyledSectionTwo>

      <StyledSectionOne>
        <StyledSectionOneHeader>
          Personlig service
          <br /> professionellt utförd
        </StyledSectionOneHeader>
        <StyledSectionOneText>
          Bakom Uppsikt står människor med omtanke och expertis. Vi kombinerar
          modern tillsyn med klassisk servicekänsla. Det ska kännas både tryggt
          och enkelt att ha ett hus – även när du inte är där.
        </StyledSectionOneText>
      </StyledSectionOne>

      <StyledSectionThree ref={contactRef}>
        <StyledSectionThreeImage src="/hero_image_two.png" alt="Hero" />
        <StyledSectionThreeInfo>
          <StyledSectionThreeHeader>
            Välkommen att höra av dig!
          </StyledSectionThreeHeader>
          <StyledSectionThreeText>
            Vill du boka ett första samtal eller få en offert?
          </StyledSectionThreeText>
          <StyledSectionThreeText>
            <a href="mailto:info@uppsikt.se">info@uppsikt.se</a> eller ring oss
            direkt på <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </StyledSectionThreeText>

          <StyledSectionThreeText>
            Vi berättar gärna mer om hur Uppsikt kan förenkla din vardag – året
            om.
          </StyledSectionThreeText>
        </StyledSectionThreeInfo>
      </StyledSectionThree>

      <StyledFooter>
        <StyledFooterTopSection>
          <StyledFooterLogo />
        </StyledFooterTopSection>
        <StyledFooterBottomSection>
          <StyledFooterInfoItem>Uppsikt Sotenäs AB</StyledFooterInfoItem>
          <StyledFooterInfoItem>Org. No: 559388-9909</StyledFooterInfoItem>
          <StyledFooterLinkItem href="mailto:info@uppsikt.se">
            info@uppsikt.se
          </StyledFooterLinkItem>
          <StyledFooterLinkItem href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </StyledFooterLinkItem>
        </StyledFooterBottomSection>
        <StyledFooterCopyrightSection>
          © {new Date().getFullYear()} Uppsikt. All rights reserved.
        </StyledFooterCopyrightSection>
      </StyledFooter>
    </StyledHomePage>
  );
}
