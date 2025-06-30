"use client";
import styled from "styled-components";
import { colors } from "../../../theme";

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

export default function SectionTwo({
  id,
  sectionHeader,
  sectionImage,
  sectionText,
  sectionListItems,
}) {
  return (
    <StyledSectionTwo id={id}>
      <StyledSectionTwoImage src={sectionImage} alt={sectionHeader} />
      <StyledSectionTwoInfo>
        <StyledSectionTwoHeader>{sectionHeader}</StyledSectionTwoHeader>
        <StyledSectionTwoText>{sectionText}</StyledSectionTwoText>
        <StyledSectionTwoList>
          {sectionListItems?.map((item, i) => (
            <StyledSectionTwoListItem key={i}>{item}</StyledSectionTwoListItem>
          ))}
        </StyledSectionTwoList>
      </StyledSectionTwoInfo>
    </StyledSectionTwo>
  );
}
