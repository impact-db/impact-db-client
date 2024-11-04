import {
  Box,
  Button,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { getSpeciesList } from "../../Helpers/databaseHelpers";

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

const ApiSection = () => {
  const [species, setSpecies] = useState("yarrowia");

  let speciesList = getSpeciesList();
  speciesList = speciesList.filter((species) => species !== "testing");

  return (
    <VStack
      w="100vw"
      px="20px"
      py="40px"
      align="center"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <Heading textAlign="center">ImpactDB API</Heading>

      <VStack w="100%" maxW="1000px" spacing="30px">
        <Text textAlign="center" opacity="0.8">
          Access the ImpactDB through an API.
        </Text>
        <Box>
          <Text textAlign="center" opacity="0.8">
            View <u>fermentation results</u> as a JSON object
          </Text>
          <a
            href={`https://us-central1-impact-db.cloudfunctions.net/getDatabase/${species}`}
          >
            <Button
              variant="link"
              target="_blank"
              fontSize={["xs", "sm", "md"]}
            >
              https://us-central1-impact-db.cloudfunctions.net/getDatabase/
              {species}
            </Button>
          </a>
        </Box>
        <Box>
          <Text textAlign="center" opacity="0.8">
            View the <u>papers</u> in the database as a JSON object
          </Text>
          <a
            href={`https://us-central1-impact-db.cloudfunctions.net/getPapers/${species}`}
          >
            <Button
              variant="link"
              target="_blank"
              fontSize={["xs", "sm", "md"]}
            >
              https://us-central1-impact-db.cloudfunctions.net/getPapers/
              {species}
            </Button>
          </a>
        </Box>

        <VStack spacing="5px">
          <Text fontSize="15px" opacity="0.8">
            Choose an organism:
          </Text>
          <Wrap spacing={4} justify="center" maxW="600px">
            {speciesList.map((_species, index) => {
              return (
                <WrapItem key={index}>
                  <Button
                    colorScheme="green"
                    fontSize="16px"
                    bg={_species === species ? "green.100" : ""}
                    color={_species === species ? "gray.800" : ""}
                    size="sm"
                    variant={_species === species ? "solid" : ""}
                    onClick={() => setSpecies(_species.toLowerCase())}
                  >
                    {_species}
                  </Button>
                </WrapItem>
              );
            })}
          </Wrap>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ApiSection;
