"use client";
import styled from "styled-components";
import { colors } from "../../../theme";

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

export default function SectionOne({ sectionHeader, sectionText }) {
  return (
    <StyledSectionOne>
      <StyledSectionOneHeader>{sectionHeader}</StyledSectionOneHeader>
      <StyledSectionOneText>{sectionText}</StyledSectionOneText>
    </StyledSectionOne>
  );
}
