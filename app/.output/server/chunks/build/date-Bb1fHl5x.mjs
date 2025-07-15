const pad2 = (n) => n.toString().padStart(2, "0");
const toDate = (date) => typeof date === "string" ? new Date(date) : date;
const formatDayMonth = (dateInput) => {
  const date = toDate(dateInput);
  const day = pad2(date.getDate());
  const month = pad2(date.getMonth() + 1);
  return `${day}/${month}`;
};
const formatDateISO = (dateInput) => {
  const date = convertToLocalDate(dateInput);
  const year = date.getFullYear();
  const month = pad2(date.getMonth() + 1);
  const day = pad2(date.getDate());
  return `${year}-${month}-${day}`;
};
const getFirstDayOfMonth = (dateInput) => {
  const date = toDate(dateInput);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
};
const getFirstDayOfYear = (dateInput) => {
  const date = toDate(dateInput);
  return new Date(Date.UTC(date.getFullYear(), 0, 1));
};
const getCurrentMonthStartDate = () => {
  return getFirstDayOfMonth(/* @__PURE__ */ new Date());
};
const getCurrentMonthIsoString = () => {
  return getCurrentMonthStartDate().toISOString();
};
const getDateRange = (start, end) => {
  const days = [];
  const current = new Date(start);
  while (current <= end) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return days;
};
const getDaysOfCurrentMonth = () => {
  const now = /* @__PURE__ */ new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return getDateRange(start, end);
};
const convertToLocalDate = (dateInput) => {
  const date = toDate(dateInput);
  const tzOffset = date.getTimezoneOffset() * 6e4;
  return new Date(date.getTime() - tzOffset);
};

export { formatDayMonth as a, getCurrentMonthStartDate as b, getCurrentMonthIsoString as c, getFirstDayOfYear as d, convertToLocalDate as e, formatDateISO as f, getFirstDayOfMonth as g, getDaysOfCurrentMonth as h };
//# sourceMappingURL=date-Bb1fHl5x.mjs.map
