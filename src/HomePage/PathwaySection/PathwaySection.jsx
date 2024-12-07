import {
  Button,
  Heading,
  Spacer,
  Text,
  VStack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import PathwayMapImage from "./PathwayScreenshot.png";

const PathwaySection = () => {
  return (
    <VStack
      id="about"
      w="100%"
      px="20px"
      py="40px"
      align="center"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <VStack w="100%" maxW="1000px" m="auto" px="20px">
        <Heading textAlign="center">Pathway Map</Heading>
        <Spacer minH="10px" />
        <Image src={PathwayMapImage} alt="Pathway Map" w="100%" maxW="700px" />
        <Spacer minH="4px" />
        <a href="/pathway">
          <Button size="lg" fontSize="16px" bg="green.100" color="gray.800">
            View the pathway map
          </Button>
        </a>
      </VStack>
    </VStack>
  );
};

export default PathwaySection;
