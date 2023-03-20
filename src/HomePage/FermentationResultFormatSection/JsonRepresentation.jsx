import {
  HStack,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import result from "./exampleResult.json";

const JsonRepresentation = () => {
  return (
    <VStack w="100%" maxW="600px" align="flex-start" spacing="0px">
      <Text fontSize="22px" w="100%" textAlign="start">
        {"{"}
      </Text>
      <VStack align="flex-start" spacing="0px" pl="20px">
        <HStack
          w="100%"
          align="center"
          justify="space-between"
          borderRadius="20px"
          py="5px"
          pl="20px"
          _hover={{
            backgroundColor: `${useColorModeValue("gray.100", "gray.700")}`,
          }}
        >
          <VStack align="flex-start" spacing="0px" w="100%">
            <Text fontSize="18px" w="100%" textAlign="start">
              titer: "{result.titer}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              averageRate: "{result.averageRate}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              maximumRate: "{result.maximumRate}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              yield: "{result.yield}",
            </Text>
          </VStack>
          <Text fontSize="20px" opacity="0.8" pr="40px" w="100%">
            Fermentation Outcomes
          </Text>
        </HStack>

        <Spacer minH="8px" />

        <HStack
          w="100%"
          align="center"
          justify="space-between"
          borderRadius="20px"
          py="5px"
          pl="20px"
          _hover={{
            backgroundColor: `${useColorModeValue("gray.100", "gray.700")}`,
          }}
        >
          <VStack align="flex-start" spacing="0px">
            <Text fontSize="18px" w="100%" textAlign="start">
              volume: "{result.volume}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              substrate1: "{result.substrate1}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              substrateConc1: "{result.substrateConc1}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              substrate2: "{result.substrate2}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              substrateConc2: "{result.substrateConc2}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              media: "{result.media}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              time: "{result.time}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              oxygenLevel: "{result.oxygenLevel}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              nitrogenLevel: "{result.nitrogenLevel}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              temperature: "{result.temperature}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              pH: "{result.pH}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              bioprocessNotes: "{result.bioprocessNotes}",
            </Text>
          </VStack>
          <Text fontSize="20px" opacity="0.8" pr="40px">
            Bioprocess Conditions
          </Text>
        </HStack>

        <Spacer minH="8px" />

        <HStack
          w="100%"
          align="center"
          justify="space-between"
          borderRadius="20px"
          py="5px"
          pl="20px"
          _hover={{
            backgroundColor: `${useColorModeValue("gray.100", "gray.700")}`,
          }}
        >
          <VStack align="flex-start" spacing="0px" maxW="300px">
            <Text fontSize="18px" w="100%" textAlign="start">
              directedEvolution: {result.directedEvolution ? "true" : "false"},
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              geneIds: "{result.geneIds}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              geneNames: "{result.geneNames}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              knockedOutGenes: "{result.knockedOutGenes}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              overexpressedGenes: "{result.overexpressedGenes}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              heterologousGenes: "{result.heterologousGenes}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              originSpecies: "{result.originSpecies}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              promoters: "{result.promoters}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              integrationSites: "{result.integrationSites}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              optimizedCodons: "{result.optimizedCodons}",
            </Text>
            <Text fontSize="18px" w="100%" textAlign="start">
              geneticNotes: "{result.geneticNotes}",
            </Text>
          </VStack>
          <Text fontSize="20px" opacity="0.8" pr="40px">
            Genetic Background
          </Text>
        </HStack>
      </VStack>
      <Text fontSize="22px" w="100%" textAlign="start">
        {"}"}
      </Text>
    </VStack>
  );
};

export default JsonRepresentation;
