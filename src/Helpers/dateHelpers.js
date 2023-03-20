function currentYear() {
  return new Date().getFullYear();
}

function dateConverterString(dateString) {
  const year = dateString.split("-")[0];
  const monthNum = parseInt(dateString.split("-")[1]);
  const day = parseInt(dateString.split("-")[2]);

  const month = [
    "placeholder", // there is no zero month
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][monthNum];
  try {
    return `${month} ${day}, ${year}`;
  } catch {
    return "Error with date";
  }
}

function dateConverterNums(dateString) {
  const publishDate = new Date(dateString); //time needed for date to be correct, not one day behind
  const output = publishDate.toLocaleDateString("en-US");
  return output;
}

function elapsedTimeString(timeInMs) {
  const elapsedSeconds = Math.round((Date.now() - parseInt(timeInMs)) / 1000);

  const secondsInHour = 60 * 60;
  const secondsInDay = 60 * 60 * 24;
  const secondsInYear = 60 * 60 * 24 * 365;

  // return time in seconds
  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} second${elapsedSeconds === 1 ? "" : "s"} ago`;
  }
  // return time in minutes
  else if (elapsedSeconds < secondsInHour) {
    const elapsedMinutes = Math.round(elapsedSeconds / 60);
    return `${elapsedMinutes} minute${elapsedMinutes === 1 ? "" : "s"} ago`;
  }
  // return time in hours
  else if (elapsedSeconds < secondsInDay) {
    const elapsedHours = Math.round(elapsedSeconds / secondsInHour);
    return `${elapsedHours} hour${elapsedHours === 1 ? "" : "s"} ago`;
  }
  // return time in days
  else if (elapsedSeconds < secondsInYear) {
    const elapsedDays = Math.round(elapsedSeconds / secondsInDay);
    return `${elapsedDays} day${elapsedDays === 1 ? "" : "s"} ago`;
  }
  // return time in years
  else {
    const elapsedYears = Math.round(elapsedSeconds / secondsInYear);
    return `${elapsedYears} years${elapsedYears === 1 ? "" : "s"} ago`;
  }
}

function DateToChartString(dateString) {
  const year = dateString.split("-")[0];
  const monthNum = parseInt(dateString.split("-")[1]);
  const day = parseInt(dateString.split("-")[2]);

  const month = [
    "placeholder", // there not a zero month
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][monthNum];
  try {
    return `${month} ${day}, ${year}`;
  } catch {
    return "Error with date";
  }
}

export {
  currentYear,
  dateConverterString,
  dateConverterNums,
  elapsedTimeString,
  DateToChartString,
};
