"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { colors } from "../../../theme";
import { socialLinks } from "@/app/utils";
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

export function NavMenu({ menuOpen, setMenuOpen }) {
  const router = useRouter();

  const handleNavigation = (type) => {
    if (type === "start") {
      router.push("/");
    } else if (type === "services") {
      const el = document.getElementById("services-section");
      console.log(el);
      el?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "företag") {
      router.push("/foretag");
    } else if (type === "kontakt") {
      window.location.href = "mailto:info@uppsikt.se";
    } else if (type === "price") {
      router.push("/pris");
    }
    setMenuOpen(false);
  };

  return (
    <>
      <StyledSubHeader>
        <StyledNavItem onClick={() => handleNavigation("start")}>
          Start
        </StyledNavItem>
        <StyledNavItem onClick={() => handleNavigation("services")}>
          Våra tjänster
        </StyledNavItem>
        <StyledNavItem as="button" onClick={() => handleNavigation("price")}>
          Pris
        </StyledNavItem>
        <StyledNavItem onClick={() => handleNavigation("kontakt")}>
          Kontakta oss
        </StyledNavItem>
        <StyledNavItem onClick={() => handleNavigation("företag")}>
          Företag
        </StyledNavItem>
      </StyledSubHeader>
      <StyledMobileMenu open={menuOpen}>
        <StyledNavItem onClick={() => handleNavigation("start")}>
          Start
        </StyledNavItem>
        <StyledNavItem onClick={() => handleNavigation("services")}>
          Våra tjänster
        </StyledNavItem>
        <StyledNavItem as="button" onClick={() => handleNavigation("price")}>
          Pris
        </StyledNavItem>
        <StyledNavItem onClick={() => handleNavigation("kontakt")}>
          Kontakta oss
        </StyledNavItem>
        <StyledNavItem onClick={() => handleNavigation("företag")}>
          Företag
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
    </>
  );
}
