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

const ApiSection = () => {
  const [species, setSpecies] = useState("yarrowia");

  let speciesList = getSpeciesList();
  speciesList = speciesList.filter((species) => species !== "testing");

  return (
    <VStack
      w="100%"
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
            Access <u>fermentation results</u>:
          </Text>
          <a href={`https://impact-database.com/api/database/${species}`}>
            <Button
              variant="link"
              target="_blank"
              fontSize={["xs", "sm", "md"]}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              impact-database.com/api/database/
              {species}
            </Button>
          </a>
        </Box>
        <Box>
          <Text textAlign="center" opacity="0.8">
            Access <u>papers</u>:
          </Text>
          <a href={`https://impact-database.com/api/papers/${species}`}>
            <Button
              variant="link"
              target="_blank"
              fontSize={["xs", "sm", "md"]}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              impact-database.com/api/papers/
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
