import { Box, Text, VStack } from "@chakra-ui/react";
import PaperListItem from "../PaperListItem/PaperListItem";

const PaperList = ({
  paperArray,
  displayPapers,
  searchValue,
  onScreenPapers,
  isLargerThan700,
}) => {
  let errorMessage = "";
  if (paperArray.length === 0) {
    errorMessage = "Add the first paper for this species";
  } else {
    errorMessage = "No papers match this search";
  }

  return (
    <VStack w="100%" align="flex-start" spacing="30px">
      <Box w="100%">
        {displayPapers.length !== 0 ? (
          <>
            {onScreenPapers.map((paper, index) => {
              return (
                <PaperListItem
                  key={index}
                  paper={paper}
                  searchValue={searchValue}
                  isLargerThan700={isLargerThan700}
                />
              );
            })}
          </>
        ) : (
          <Text>{errorMessage}</Text>
        )}
      </Box>
    </VStack>
  );
};

export default PaperList;
