import {
  Box,
  GridItem,
  Spacer,
  Spinner,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import YeastIcon from "../../Assets/YeastIcon";
import BacteriaIcon from "../../Assets/BacteriaIcon";
import { convertToSlug } from "../../Helpers/stringHelpers";
import { getPaperArray } from "../../Helpers/databaseHelpers";
import { useQuery } from "@tanstack/react-query";

const SpeciesListItem = ({ species }) => {
  const hoverColor = useColorModeValue("#f5f5f5", "#11341A55");
  const boxShadow = useColorModeValue(
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);",
    "0 1px 2px 0 rgb(60 64 67 / 80%), 0 1px 3px 1px rgb(60 64 67 / 50%);"
  );

  const collectionName = species.collectionName;

  const { isLoading, data } = useQuery(
    ["paperArray", collectionName],
    ({ queryKey }) => getPaperArray(queryKey[1])
  );

  let speciesData = {
    numPapers: -1,
    numResults: -1,
  };

  if (data) {
    const paperList = data;

    let numResults = 0;
    paperList.forEach((paper) => {
      numResults += paper.experimentalData.length;
    });

    speciesData = {
      numPapers: paperList.length,
      numResults: numResults,
    };
  }

  return (
    <Box align="center">
      <Link to={"/database/" + convertToSlug(species.name)}>
        <GridItem
          maxW="260px"
          h="180px"
          px="20px"
          py="12px"
          borderRadius="8px"
          boxShadow={boxShadow}
          _hover={{ backgroundColor: `${hoverColor}` }}
        >
          <VStack align="flex-start" justify="space-between" h="100%">
            <VStack align="flex-start" spacing="0px" w="100%">
              <Text fontSize="20px" w="100%" textAlign="start">
                {species.name}
              </Text>
              {isLoading ? (
                <VStack>
                  <Spacer h="20px" />
                  <Spinner
                    thickness="4px"
                    speed="1s"
                    color="currentColor"
                    opacity="0.5"
                  />
                </VStack>
              ) : (
                <>
                  <Text
                    fontSize="14px"
                    opacity="0.8"
                    w="100%"
                    textAlign="start"
                  >
                    {speciesData.numPapers} Paper
                    {speciesData.numPapers === 1 ? "" : "s"}
                  </Text>
                  <Text
                    fontSize="14px"
                    opacity="0.8"
                    w="100%"
                    textAlign="start"
                  >
                    {speciesData.numResults} Result
                    {speciesData.numResults === 1 ? "" : "s"}
                  </Text>
                </>
              )}
            </VStack>
            <Box w="100%" textAlign="start">
              {species.type === "yeast" && <YeastIcon />}
              {species.type === "bacteria" && <BacteriaIcon />}
            </Box>
          </VStack>
        </GridItem>
      </Link>
    </Box>
  );
};

export default SpeciesListItem;
