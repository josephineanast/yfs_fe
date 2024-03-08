export function convertToISODateString(dateString: string) {
  const [day, month, year] = dateString.split("-");

  const date = new Date(`${year}-${month}-${day}`);

  if (isNaN(date.getTime())) {
    return null;
  }

  const isoDateString = date.toISOString().split("T")[0];

  return isoDateString;
}
