const leftPad = (value: number) => {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
};

export const toStringByFormatting = (date: Date, format = '.') => {
  if (date) {
    const year = date.getFullYear();
    const month = leftPad(date.getMonth() + 1);
    const day = leftPad(date.getDate());

    return [year, month, day].join(format);
  }
};

export const toStringByFormattingTime = (date: Date, format = ':') => {
  if (date) {
    const hour = leftPad(date.getHours());
    const minute = leftPad(date.getMinutes());

    return [hour, minute].join(format);
  }
};

export const getDateFormat = (date: Date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  const newMonth = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;
  const newDay = day < 10 ? `0${day}` : `${day}`;

  return `${year}년 ${newMonth}월 ${newDay}일`;
};
