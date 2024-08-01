import React from "react";

interface ICTextProps {
  size?: "large" | "medium" | "small" | "xl";
  color?: "main" | "secondary" | "default" | "white";
  fontWeight?: "light" | "normal" | "bold";
  children: React.ReactNode;
}

const ICText: React.FC<ICTextProps> = ({
  size = "medium",
  color = "default",
  fontWeight = "normal",
  children,
}) => {
  const getSizeStyle = (size: string) => {
    switch (size) {
      case "xl":
        return { fontSize: "64px" };
      case "large":
        return { fontSize: "24px" };
      case "medium":
        return { fontSize: "18px" };
      case "small":
        return { fontSize: "14px" };
      default:
        return { fontSize: "18px" }; // Default to medium size
    }
  };

  const getColorStyle = (color: string) => {
    switch (color) {
      case "main":
        return { color: "#0D304A" }; // Main color (blue)
      case "secondary":
        return { color: "#365C79" }; // Secondary color (gray)
      case "default":
        return { color: "#000000" }; // Default color (black)
      case "white":
        return { color: "#FFFFFF" }; // Default color (black)
      default:
        return { color: "#000000" }; // Default to black color
    }
  };

  const getFontWeight = (weight: string) => {
    switch (weight) {
      case "light":
        return { fontWeight: 300 };
      case "normal":
        return { fontWeight: 400 };
      case "bold":
        return { fontWeight: 700 };
      default:
        return { fontWeight: 400 }; // Default to normal weight
    }
  };

  const combinedStyle = {
    ...getSizeStyle(size),
    ...getColorStyle(color),
    ...getFontWeight(fontWeight),
  };

  return <p style={combinedStyle}>{children}</p>;
};

export default ICText;
