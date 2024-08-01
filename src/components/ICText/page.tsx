import React from "react";

interface ICTextProps {
  size?: "large" | "medium" | "small";
  color?: "main" | "secondary" | "default";
  children: React.ReactNode;
}

const ICText: React.FC<ICTextProps> = ({
  size = "medium",
  color = "default",
  children,
}) => {
  const getSizeStyle = (size: string) => {
    switch (size) {
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
      default:
        return { color: "#000000" }; // Default to black color
    }
  };

  const combinedStyle = {
    ...getSizeStyle(size),
    ...getColorStyle(color),
  };

  return <p style={combinedStyle}>{children}</p>;
};

export default ICText;
