import { AspectRatio } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { dailyStatsToPointsString } from "../Helpers/chartHelpers";
import { getDailyStatsArray, getSpeciesList } from "../Helpers/databaseHelpers";
import { DateToChartString } from "../Helpers/dateHelpers";
import LoadingDots from "../loadingDots/LoadingDots";
import ChartLine from "./ChartLine";

const DailyStatsChart = () => {
  // get the list of species and remove testing
  let speciesList = getSpeciesList();

  // remove testing data
  speciesList = speciesList.filter((species) => species !== "testing");

  const { isLoading, data } = useQuery(["dailyStatsArray"], () =>
    getDailyStatsArray()
  );

  if (isLoading) {
    return <LoadingDots />;
  } else {
    // convert data to represent the whole database
    const dailyStats = data.map((date) => {
      let totalPapers = 0;
      let totalResults = 0;

      speciesList.forEach((species) => {
        if (Object.keys(date).includes(species)) {
          totalPapers += date[species].numPapers;
          totalResults += date[species].numStrains;
        }
      });

      return {
        date: date.timeStamp.split("T")[0],
        numPapers: totalPapers,
        numResults: totalResults,
        // number of contributers can go here
      };
    });

    // calculate min and max values on primary Y axis
    let minPapers = dailyStats[0].numPapers;
    let maxPapers = dailyStats[dailyStats.length - 1].numPapers;
    let minYPrimaryRounded = 25 * Math.floor(minPapers / 25);
    let maxYPrimaryRounded = 25 * Math.ceil(maxPapers / 25);

    // calculate min and max values on secondary Y axis
    let minResults = dailyStats[0].numResults;
    let maxResults = dailyStats[dailyStats.length - 1].numResults;
    let minYSecondaryRounded = 5 * Math.floor(minResults / 5);
    let maxYSecondaryRounded = 5 * Math.ceil(maxResults / 5);

    // const numPoints = 30;
    const numPoints = Math.max(30, dailyStats.length - 1);
    const minXValue = 15;
    const maxXValue = 183;
    const minYValue = 0;
    const maxYValue = 82;

    const paperPointsString = dailyStatsToPointsString({
      dailyStats,
      type: "papers",
      numPoints: numPoints,
      minXValue: minXValue,
      maxXValue: maxXValue,
      minYValue: minYValue,
      maxYValue: maxYValue,
    });

    const resultPointsString = dailyStatsToPointsString({
      dailyStats,
      type: "results",
      numPoints: numPoints,
      minXValue: minXValue,
      maxXValue: maxXValue,
      minYValue: minYValue,
      maxYValue: maxYValue,
    });

    const startDate = dailyStats[0].date;
    const endDate = dailyStats[dailyStats.length - 1].date;

    return (
      <>
        {/* main plotting area */}
        <AspectRatio ratio={200 / 92} mx="auto">
          <svg viewBox="0 0 200 92">
            {/* plot the paper line */}
            <ChartLine
              points={paperPointsString}
              color="var(--chakra-colors-green-400)"
            />
            {/* plot the result line */}
            <ChartLine
              points={resultPointsString}
              color="var(--chakra-colors-blue-400)"
            />
            {/* Primary Y Axis Label */}
            <text
              x="-50"
              y="6"
              fontFamily="Lato"
              fontSize="5px"
              fill="currentColor"
              transform="rotate(-90)"
            >
              Papers
            </text>
            {/* Top Primary Y Axis Value */}
            <text
              x="0"
              y="5"
              fontFamily="Lato"
              fontSize="4px"
              fill="currentColor"
            >
              {maxYPrimaryRounded}
            </text>
            <line
              x1="10"
              y1="3.75"
              x2="12"
              y2="3.75"
              stroke="currentColor"
              strokeWidth=".5"
            />

            {/* Bottom Primary Y Axis Value */}
            <text
              x="0"
              y="80"
              fontFamily="Lato"
              fontSize="4px"
              fill="currentColor"
            >
              {minYPrimaryRounded}
            </text>
            <line
              x1="10"
              y1="78.75"
              x2="12"
              y2="78.75"
              stroke="currentColor"
              strokeWidth=".5"
            />

            {/* Secondary Y Axis Label */}
            <text
              x="35"
              y="-192"
              fontFamily="Lato"
              fontSize="5px"
              fill="currentColor"
              transform="rotate(90)"
            >
              Results
            </text>
            {/* Top Secondary Y Axis Value */}
            <text
              x="190"
              y="5"
              fontFamily="Lato"
              fontSize="4px"
              fill="currentColor"
            >
              {maxYSecondaryRounded}
            </text>
            <line
              x1="188"
              y1="3.75"
              x2="186"
              y2="3.75"
              stroke="currentColor"
              strokeWidth=".5"
            />
            <text
              x="190"
              y="80"
              fontFamily="Lato"
              fontSize="4px"
              fill="currentColor"
            >
              {minYSecondaryRounded}
            </text>
            <line
              x1="188"
              y1="78.75"
              x2="186"
              y2="78.75"
              stroke="currentColor"
              strokeWidth=".5"
            />

            {/* X-Axis Labels */}
            <text
              textAnchor="start"
              x="12"
              y="90"
              fontFamily="Lato"
              fontSize="4px"
              fill="currentColor"
            >
              {DateToChartString(startDate)}
            </text>
            <line
              x1="15"
              y1="82"
              x2="15"
              y2="84"
              stroke="currentColor"
              strokeWidth=".5"
            />
            <text
              textAnchor="end"
              x="186"
              y="90"
              fontFamily="Lato"
              fontSize="4px"
              fill="currentColor"
            >
              {DateToChartString(endDate)}
            </text>
            <line
              x1="183"
              y1="82"
              x2="183"
              y2="84"
              stroke="currentColor"
              strokeWidth=".5"
            />

            {/* Axes */}
            {/* Primary Y-axis */}
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="82"
              stroke="currentColor"
              strokeWidth=".5"
            />
            {/* Secondary Y-axis */}
            <line
              x1="186"
              y1="0"
              x2="186"
              y2="82"
              stroke="currentColor"
              strokeWidth=".5"
            />
            {/* X-axis */}
            <line
              x1="12"
              y1="82"
              x2="186"
              y2="82"
              stroke="currentColor"
              strokeWidth=".5"
            />
          </svg>
        </AspectRatio>
      </>
    );
  }
};

export default DailyStatsChart;
