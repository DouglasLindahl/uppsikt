"use client";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../../theme";

const hemstadData = [
  { from: 0, to: 50, time: 1 },
  { from: 51, to: 75, time: 1.5 },
  { from: 76, to: 100, time: 2.5 },
  { from: 101, to: 125, time: 3.5 },
  { from: 126, to: 150, time: 4.5 },
  { from: 151, to: 200, time: 5.5 },
  { from: 201, to: 250, time: 7 },
  { from: 251, to: 300, time: 8 },
  { from: 301, to: 450, time: 9 },
  { from: 451, to: 500, time: 10 },
  { from: 501, to: 550, time: 11 },
  { from: 551, to: 600, time: 12 },
];

const flyttstadData = [...hemstadData];

const TIMPRIS = {
  hemstad: 625,
  flyttstad: 750,
  fonsterputs: 300,
};

const StyledSection = styled.section`
  position: relative;
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 16px;
  background: ${colors.background};
`;

const StyledContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 1;
`;

const StyledHeader = styled.h2`
  font-size: 64px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const StyledSelect = styled.select`
  padding: 12px;
  font-size: 18px;
  width: 100%;
  border: 1px solid ${colors.primary};
  margin-top: 12px;
`;

const StyledInput = styled.input`
  padding: 12px;
  font-size: 18px;
  width: 100%;
  border: 1px solid ${colors.primary};
  margin-top: 12px;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
`;

const StyledOutput = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledSecondaryOutput = styled.div`
  font-size: 16px;
  margin-top: 12px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledOutputSection = styled.div``;

export default function PriceCalculatorSection() {
  const [service, setService] = useState("hemstad");
  const [inputValue, setInputValue] = useState("");
  const [price, setPrice] = useState(null);
  const [rut, setRut] = useState(null);
  const [outOfRange, setOutOfRange] = useState(false);

  const calculate = (value) => {
    const m2 = parseInt(value, 10);
    if (isNaN(m2)) return;

    let time = 0;
    setOutOfRange(false);

    if (service === "hemstad" || service === "flyttstad") {
      const data = service === "hemstad" ? hemstadData : flyttstadData;
      const row = data.find((r) => m2 >= r.from && m2 <= r.to);

      if (!row) {
        setOutOfRange(true);
        setPrice(null);
        setRut(null);
        return;
      }
      time = row.time;
    } else if (service === "fonsterputs") {
      time = m2; // 1 timme per fönster
    }

    const hourlyRate = TIMPRIS[service];
    const total = time * hourlyRate;
    setPrice(total);
    setRut(total / 2);
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (val !== "") {
      calculate(val);
    } else {
      setPrice(null);
      setRut(null);
      setOutOfRange(false);
    }
  };

  return (
    <StyledSection id="price-calculator">
      <StyledContainer>
        <StyledHeader>Prisräknare</StyledHeader>

        <div>
          <StyledLabel htmlFor="service">Välj tjänst:</StyledLabel>
          <StyledSelect
            id="service"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setInputValue("");
              setPrice(null);
              setRut(null);
              setOutOfRange(false);
            }}
          >
            <option value="hemstad">Hemstäd</option>
            <option value="flyttstad">Flyttstäd</option>
            <option value="fonsterputs">Fönsterputs</option>
          </StyledSelect>
        </div>

        <div>
          <StyledLabel htmlFor="inputValue">
            {service === "fonsterputs" ? "Antal fönster:" : "Ange m²:"}
          </StyledLabel>
          <StyledInput
            type="number"
            id="inputValue"
            value={inputValue}
            onChange={handleInput}
            placeholder="Ex: 75"
            min="1"
          />
        </div>

        <StyledOutputSection>
          <StyledOutput>
            {outOfRange
              ? "Kontakta oss för ett pris"
              : `Pris: ${price !== null ? `${price.toLocaleString("sv-SE")} kr` : "0"}`}
          </StyledOutput>
          {!outOfRange && (
            <StyledSecondaryOutput>
              Efter RUT: {rut !== null ? `${rut.toLocaleString("sv-SE")} kr` : "0"}
            </StyledSecondaryOutput>
          )}
        </StyledOutputSection>
      </StyledContainer>
    </StyledSection>
  );
}
