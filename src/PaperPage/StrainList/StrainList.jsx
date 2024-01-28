import {
  HStack,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddStrainButton from "./AddStrainButton";
import StrainListItem from "../StrainListItem/StrainListItem";
import DataTypeTabs from "./DataTypeTabs";

const StrainList = ({ data, page }) => {
  const [displayData, setDisplayData] = useState([]);
  const [dataType, setDataType] = useState("titer");
  const [order, setOrder] = useState("descending");

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const rowOrCol = isLargerThan700 ? "row" : "column-reverse";

  let paper = data;

  useEffect(() => {
    let newDisplayData = [...paper.experimentalData];
    if (dataType === "titer" && order === "descending") {
      newDisplayData.sort(function (a, b) {
        return parseFloat(a.titer) < parseFloat(b.titer) ? 1 : -1;
      });
    } else if (dataType === "titer" && order === "ascending") {
      newDisplayData.sort(function (a, b) {
        return parseFloat(b.titer) < parseFloat(a.titer) ? 1 : -1;
      });
    } else if (dataType === "rate" && order === "descending") {
      newDisplayData.sort(function (a, b) {
        return parseFloat(a.maximumRate) < parseFloat(b.maximumRate) ? 1 : -1;
      });
    } else if (dataType === "rate" && order === "ascending") {
      newDisplayData.sort(function (a, b) {
        return parseFloat(b.maximumRate) < parseFloat(a.maximumRate) ? 1 : -1;
      });
    } else if (dataType === "yield" && order === "descending") {
      newDisplayData.sort(function (a, b) {
        return parseFloat(a.yield) < parseFloat(b.yield) ? 1 : -1;
      });
    } else if (dataType === "yield" && order === "ascending") {
      newDisplayData.sort(function (a, b) {
        return parseFloat(b.yield) < parseFloat(a.yield) ? 1 : -1;
      });
    }
    setDisplayData(newDisplayData);
  }, [order, dataType, data]);

  return (
    <VStack my="50px" align="flex-start">
      <Stack
        direction={rowOrCol}
        spacing={isLargerThan700 ? "20px" : "5px"}
        align={isLargerThan700 ? "center" : "flex-start"}
      >
        <DataTypeTabs dataType={dataType} setDataType={setDataType} />
        <HStack spacing="8px">
          <Text>Order: </Text>
          <Text
            cursor="pointer"
            onClick={() => {
              order === "descending"
                ? setOrder("ascending")
                : setOrder("descending");
            }}
          >
            {order === "descending"
              ? `↓ Highest ${dataType}s to lowest ${dataType}s`
              : `↑ Lowest ${dataType}s to highest ${dataType}s`}
          </Text>
        </HStack>
      </Stack>
      <Spacer h="30px" />
      {page === "paper" && <AddStrainButton />}

      {displayData.map((strain, index) => {
        return (
          <StrainListItem
            key={index}
            strain={strain}
            dataType={dataType}
            isLargerThan700={isLargerThan700}
            page={page}
          />
        );
      })}
    </VStack>
  );
};

export default StrainList;
