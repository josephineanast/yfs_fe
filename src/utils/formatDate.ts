import { format } from "date-fns";

export const formatDate = (oldDate: string) => {
  const date = new Date(oldDate);
  return format(date, "d MMM yyyy, HH:mm");
};
