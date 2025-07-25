import type { ColorType } from "../types/color";
type ColorObject = {
  bg: string;
  text: string;
  hover: string;
  selected: string;
};
type ColorMap = Record<string, ColorObject>;

export const getColors = ({
  array,
  bg = 100,
  text = 500,
  hover = 200,
  selected = 50,
}: {
  array: string[];
  bg?: number;
  text?: number;
  hover?: number;
  selected?: number;
}): ColorMap => {
  const colorMap: ColorMap = array.reduce((acc, arr) => {
    acc[arr] = {
      bg: `bg-${arr}-${bg}`,
      hover: `hover:bg-${arr}-${hover}`,
      text: `text-${arr}-${text}`,
      selected: `bg-${arr}-${selected}`,
    };
    return acc;
  }, {} as ColorMap);
  return colorMap;
};

export const getColor = ({
  color,
  bg = 100,
  text = 500,
  hover = 200,
  selected = 50,
}: {
  color: ColorType;
  bg?: number;
  text?: number;
  hover?: number;
  selected?: number;
}): ColorObject => ({
  bg: `bg-${color}-${bg}`,
  hover: `hover:bg-${color}-${hover}`,
  text: `text-${color}-${text}`,
  selected: `bg-${color}-${selected}`,
});

export const getGroupColor = ({
  color = "gray",
  outlined,
}: {
  color?: ColorType;
  outlined?: boolean;
}) =>
  outlined
    ? `hover:border-${color}-700! text-${color}-800 border-${color}-600!`
    : `bg-${color}-600 hover:bg-${color}-700 text-${color}-50 bg-${color}-500 border-${color}-600`;
