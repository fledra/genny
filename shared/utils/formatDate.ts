interface FormatOptions {
  day?: boolean;
  short?: boolean;
  pad?: boolean;
}

export function formatDate(date: Date, options: FormatOptions = {}) {
  const {
    pad = true,
    short = false,
    day: hasDay = true,
  } = options;

  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  let year = date.getFullYear().toString();

  if (pad) {
    day = day.padStart(2, '0');
    month = month.padStart(2, '0');
  }

  if (short) {
    year = year.slice(-2);
  }

  return `${hasDay ? `${day}/` : ''}${month}/${year}`;
}
