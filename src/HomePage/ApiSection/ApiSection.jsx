import {
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ApiSection = () => {
  const [species, setSpecies] = useState("yarrowia");

  const speciesList = [
    "yarrowia",
    "rhodosporidium",
    "lipomyces",
    "pichia",
    "saccharomyces",
    "rhodococcus",
    "clostridium",
  ];

  return (
    <VStack
      w="100vw"
      px="20px"
      py="40px"
      align="center"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <Heading textAlign="center">ImpactDB API</Heading>
      <Text textAlign="center" opacity="0.8">
        Access the fermentation results through an API.
      </Text>
      <VStack w="100%" maxW="1000px" spacing="40px">
        <Spacer maxH="100px" />
        <a
          href={`https://us-central1-impact-db.cloudfunctions.net/getDatabase/${species}`}
        >
          <Button variant="link" target="_blank">
            https://us-central1-impact-db.cloudfunctions.net/getDatabase/
            {species}
          </Button>
        </a>
        <VStack spacing="5px">
          <Text fontSize="15px" opacity="0.8">
            Choose an organism:
          </Text>
          <Wrap spacing={4}>
            {speciesList.map((_species, index) => {
              return (
                <WrapItem key={index}>
                  <Button
                    colorScheme="green"
                    size="sm"
                    variant={_species === species ? "solid" : ""}
                    onClick={() => setSpecies(_species.toLowerCase())}
                  >
                    {capitalizeFirstLetter(_species)}
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
