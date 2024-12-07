import {
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import PaperIcon from "./PaperIcon";

const DatabaseStructure = ({ isLargerThan800 }) => {
  return (
    <Stack
      w="100%"
      px="20px"
      py="40px"
      align="center"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <Heading w="100%" maxW="1000px" m="auto" textAlign="center">
        Database Structure
      </Heading>
      <Text textAlign="center" opacity="0.8">
        For each species, there are papers that each have fermentation results
        (titer, rate, yield) paired with bioprocess conditions and the strain's
        genetic background
      </Text>
      <Spacer minH="40px" />
      <Stack
        direction={isLargerThan800 ? "row" : "column"}
        w="100%"
        maxW="1000px"
        m="auto"
        spacing="40px"
      >
        <VStack
          border="1px solid"
          w="100%"
          h="250px"
          p="20px"
          borderRadius="20px"
          align="flex-start"
        >
          <Heading fontSize="20px">Species 1</Heading>
          <HStack w="100%" h="100%">
            <PaperIcon paperNum={1} />
            <PaperIcon paperNum={2} />
            <PaperIcon paperNum={3} />
            <VStack
              w="10%"
              h="100%"
              justify="center"
              align="center"
              fontSize="30px"
            >
              <Text>...</Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack
          border="1px solid"
          w="100%"
          h="250px"
          p="20px"
          borderRadius="20px"
          align="flex-start"
        >
          <Heading fontSize="20px">Species 2</Heading>
          <HStack w="100%" h="100%">
            <PaperIcon paperNum={1} />
            <PaperIcon paperNum={2} />
            <PaperIcon paperNum={3} />
            <VStack
              w="10%"
              h="100%"
              justify="center"
              align="center"
              fontSize="30px"
            >
              <Text>...</Text>
            </VStack>
          </HStack>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default DatabaseStructure;
