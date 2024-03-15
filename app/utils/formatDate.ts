export const formatDate = (dateString: string | undefined): string | undefined => {
  switch (dateString?.length) {
    case undefined:
      return '-';
    case 0:
      return '-';
    case null:
      return '-';
    case 4:
      return `${dateString}年`;
    case 6:
      const yearMonthMatch = dateString.match(/(\d{4})(\d{2})/);
      if (!yearMonthMatch) throw new Error('Invalid date format for year and month');
      return `${yearMonthMatch[1]}年${parseInt(yearMonthMatch[2], 10)}月`;
    case 8:
      const yearMonthDayMatch = dateString.match(/(\d{4})(\d{2})(\d{2})/);
      if (!yearMonthDayMatch) throw new Error('Invalid date format for year, month, and day');
      return `${yearMonthDayMatch[1]}年${parseInt(yearMonthDayMatch[2], 10)}月${parseInt(yearMonthDayMatch[3], 10)}日`;
  }
};