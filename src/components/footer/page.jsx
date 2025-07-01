"use client";
import styled from "styled-components";
import { colors } from "../../../theme";
import { phoneNumber } from "@/app/utils";

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

export default function Footer({ id }) {
  return (
    <StyledFooter id={id}>
      <StyledFooterTopSection>
        <StyledFooterLogo />
      </StyledFooterTopSection>
      <StyledFooterBottomSection>
        <StyledFooterInfoItem>Uppsikt Sverige AB</StyledFooterInfoItem>
        <StyledFooterInfoItem>Org. No: 559360-7194</StyledFooterInfoItem>
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
  );
}
