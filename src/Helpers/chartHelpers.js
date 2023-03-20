function dailyStatsToPointsString({
  dailyStats,
  type,
  numPoints,
  minXValue,
  maxXValue,
  minYValue,
  maxYValue,
}) {
  let minYRounded;
  let maxYRounded;
  let YRange;
  if (type === "papers") {
    // calculate the y range
    let minPapers = dailyStats[0].numPapers;
    let maxPapers = dailyStats[dailyStats.length - 1].numPapers;

    minYRounded = 25 * Math.floor(minPapers / 25);
    maxYRounded = 25 * Math.ceil(maxPapers / 25);

    YRange = maxYRounded - minYRounded;
  }

  if (type === "results") {
    // calculate the y range
    let minResults = dailyStats[0].numResults;
    let maxResults = dailyStats[dailyStats.length - 1].numResults;

    minYRounded = 5 * Math.floor(minResults / 5);
    maxYRounded = 5 * Math.ceil(maxResults / 5);

    YRange = maxYRounded - minYRounded;
  }

  // make an array of coordinates
  const pointsArray = dailyStats.map((date, index) => {
    // the x value is determined by the space between points and the index number
    const xStepSize = (maxXValue - minXValue) / numPoints;
    const xCoordinate = minXValue + index * xStepSize;

    // calculate the y value on a scale of 0-1
    let fractionalYValue;
    if (type === "papers") {
      fractionalYValue = (date.numPapers - minYRounded) / YRange;
    } else if (type === "results") {
      fractionalYValue = (date.numResults - minYRounded) / YRange;
    }

    // convert the fractional value to
    const yCoordinate = maxYValue - fractionalYValue * maxYValue;

    return `${xCoordinate} ${yCoordinate}`;
  });

  const pointsString = pointsArray.join(" ");

  return pointsString;
}

export { dailyStatsToPointsString };
