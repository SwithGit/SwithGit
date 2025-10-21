import React from "react";

interface InfoIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({
  width = 24,
  height = 24,
  color = "#454545",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
    <path
      d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z"
      fill={color}
      stroke={color}
      strokeWidth="0.75"
    />
    <path d="M12 17V10" stroke={color} strokeWidth="1.5" />
  </svg>
);

export default InfoIcon;
