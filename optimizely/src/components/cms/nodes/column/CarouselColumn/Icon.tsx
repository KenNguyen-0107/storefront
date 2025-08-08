import { FC } from "react";

export default function Icon({
  iconName = "",
  size = 24,
  viewSize = 24,
  startPosition = 0,
  className = "",
}: IconProps) {
  const IconComponent = iconComponents[iconName.toLowerCase()];

  if (!IconComponent) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`${startPosition} ${startPosition} ${viewSize} ${viewSize}`}
    >
      <IconComponent />
    </svg>
  );
}

const ChevronLeft = () => (
  <>
    <path
      d="M15 26.5625C21.3858 26.5625 26.5625 21.3858 26.5625 15C26.5625 8.61421 21.3858 3.4375 15 3.4375C8.61421 3.4375 3.4375 8.61421 3.4375 15C3.4375 21.3858 8.61421 26.5625 15 26.5625Z"
      fill="white"
      stroke="#283270"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 18.0125L13.75 15L16.25 11.9875"
      stroke="#283270"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const ChevronRight = () => (
  <>
    <path
      d="M15 26.5625C21.3858 26.5625 26.5625 21.3858 26.5625 15C26.5625 8.61421 21.3858 3.4375 15 3.4375C8.61421 3.4375 3.4375 8.61421 3.4375 15C3.4375 21.3858 8.61421 26.5625 15 26.5625Z"
      fill="white"
      stroke="#283270"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.75 11.9875L16.25 15L13.75 18.0125"
      stroke="#283270"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const iconComponents: Record<string, FC> = {
  chevronleft: ChevronLeft,
  chevronright: ChevronRight,
};

interface IconProps {
  iconName?: string;
  size?: number;
  viewSize?: number;
  startPosition?: number;
  className?: string;
}
