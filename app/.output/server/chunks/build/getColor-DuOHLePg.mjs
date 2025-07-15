const getColor = ({
  color,
  bg = 100,
  text = 500,
  hover = 200,
  selected = 50
}) => ({
  bg: `bg-${color}-${bg}`,
  hover: `hover:bg-${color}-${hover}`,
  text: `text-${color}-${text}`,
  selected: `bg-${color}-${selected}`
});
const getGroupColor = ({
  color = "gray",
  outlined
}) => outlined ? `hover:border-${color}-700! text-${color}-800 border-${color}-600!` : `bg-${color}-600 hover:bg-${color}-700 text-${color}-50 bg-${color}-500 border-${color}-600`;

export { getColor as a, getGroupColor as g };
//# sourceMappingURL=getColor-DuOHLePg.mjs.map
