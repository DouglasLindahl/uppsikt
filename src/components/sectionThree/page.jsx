"use client";
import styled from "styled-components";
import { colors } from "../../../theme";
import { phoneNumber } from "@/app/utils";

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

export default function SectionThree({ sectionHeader, sectionText }) {
  return (
    <StyledSectionThree>
      <StyledSectionThreeImage src="/hero_image_two.png" alt={sectionHeader} />
      <StyledSectionThreeInfo>
        <StyledSectionThreeHeader>{sectionHeader}</StyledSectionThreeHeader>

        {/* Assuming sectionText is an array of paragraphs or React nodes */}
        {sectionText?.map((text, i) => {
          // If you want to inject phoneNumber in one paragraph, you can handle it specially:
          if (typeof text === "string" && text.includes("{phoneNumber}")) {
            return (
              <StyledSectionThreeText key={i}>
                {text.split("{phoneNumber}")[0]}
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                {text.split("{phoneNumber}")[1]}
              </StyledSectionThreeText>
            );
          }
          return (
            <StyledSectionThreeText key={i}>{text}</StyledSectionThreeText>
          );
        })}
      </StyledSectionThreeInfo>
    </StyledSectionThree>
  );
}
