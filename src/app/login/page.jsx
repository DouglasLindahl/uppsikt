"use client";
import styled from "styled-components";
import { colors } from "../../../theme";

const StyledLoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.primary};
  align-items: center;
  gap: 24px;
  div {
    font-size: 32px;
    font-weight: bold;
  }
  a {
    font-size: 24px;
    border-bottom: 2px solid ${colors.primary};
  }
`;

export default function Login() {
  return (
    <StyledLoginPage>
      <div>Coming soon...</div>
      <a href="/">Return to home</a>
    </StyledLoginPage>
  );
}
