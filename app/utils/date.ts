const pad2 = (n: number): string => n.toString().padStart(2, "0");
const toDate = (date: Date | string): Date =>
  typeof date === "string" ? new Date(date) : date;

/**
 * Format "JJ/MM"
 */
export const formatDayMonth = (dateInput: Date | string): string => {
  const date = toDate(dateInput);
  const day = pad2(date.getDate());
  const month = pad2(date.getMonth() + 1);
  return `${day}/${month}`;
};

/**
 * Format "12 avril 2019"
 */
export const formatLongDate = (dateInput: Date | string): string => {
  const date = toDate(dateInput);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

/**
 * Format pour API : "YYYY-MM-DD"
 */
export const formatDateISO = (dateInput: Date | string): string => {
  const date = convertToLocalDate(dateInput);
  const year = date.getFullYear();
  const month = pad2(date.getMonth() + 1);
  const day = pad2(date.getDate());
  return `${year}-${month}-${day}`;
};

/**
 * Renvoie le premier jour du mois UTC pour la date donnée
 */
export const getFirstDayOfMonth = (dateInput: Date | string): Date => {
  const date = toDate(dateInput);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
};

/**
 * Renvoie le premier jour de l'année UTC pour la date donnée
 */
export const getFirstDayOfYear = (dateInput: Date | string): Date => {
  const date = toDate(dateInput);
  return new Date(Date.UTC(date.getFullYear(), 0, 1));
};

/**
 * Renvoie la date du premier jour du mois courant en UTC
 */
export const getCurrentMonthStartDate = (): Date => {
  return getFirstDayOfMonth(new Date());
};

/**
 * Renvoie la chaîne ISO du premier jour du mois courant en UTC
 */
export const getCurrentMonthIsoString = (): string => {
  return getCurrentMonthStartDate().toISOString();
};

/**
 * Renvoie la liste de tous les jours entre start et end (inclus)
 */
const getDateRange = (start: Date, end: Date): Date[] => {
  const days: Date[] = [];
  const current = new Date(start);
  while (current <= end) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return days;
};

/**
 * Renvoie tous les jours du mois courant (local)
 */
export const getDaysOfCurrentMonth = (): Date[] => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return getDateRange(start, end);
};

/**
 * Convertit une date en supprimant l'effet de décalage de timezone,
 * renvoie une nouvelle Date locale identique en jour/mois/année
 */
export const convertToLocalDate = (dateInput: Date | string): Date => {
  const date = toDate(dateInput);
  const tzOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - tzOffset);
};
