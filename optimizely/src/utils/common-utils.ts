export const convertColorValue = (value?: string) => {
  const colorList = {
    default_color: "text-primary",
    white: "text-white",
    muted: "text-[#555555]",
    blue: "text-blue",
  };
  return colorList[value as keyof typeof colorList];
};
export function parseSliderValue(value: string): number | boolean | string {
  if (value === "slow") return 1000;
  if (value === "medium") return 2000;
  if (value === "long") return 3000;
  if (value === "veryLong") return 4000;
  if (value === "one") return 1;
  if (value === "two") return 2;
  if (value === "three") return 3;
  if (value === "four") return 4;
  if (value === "five") return 5;
  if (value === "yes" || value === "show") return true;
  if (value === "no" || value === "none") return false;
  return value;
}
