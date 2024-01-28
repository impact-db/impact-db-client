import { Heading, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import SpeciesList from "./SpeciesList";

const DatabaseSection = () => {
  return (
    <Stack id="database" w="100vw" px="20px" py="40px" align="center">
      <VStack w="100%" maxW="1000px" m="auto">
        <Heading>Impact Database</Heading>
        <Text opacity="0.8" textAlign="center">
          The database contains data from a few yeast and bacteria species. In
          the future it will include many more yeast and bacteria species
        </Text>
        <Spacer minH="30px" />
        <SpeciesList />
      </VStack>
    </Stack>
  );
};

export default DatabaseSection;
