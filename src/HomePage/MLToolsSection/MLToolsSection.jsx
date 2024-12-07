import {
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import MLToolsListItem from "./MLToolsListItem";
import SuggestToolButton from "./SuggestToolButton";

const MLToolsSection = () => {
  const machineLearningTools = [
    {
      name: "Predict titers",
      description: "A hybrid tool that uses ML and constraint based methods",
      slug: "predict-titers",
    },
    {
      name: "Design strains",
      description:
        "A tool that determines optimal genetic interventions via ML",
      slug: "design-strains",
    },
  ];
  return (
    <VStack
      id="machine-learning"
      w="100%"
      px="20px"
      py="40px"
      align="center"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <VStack w="100%" maxW="1000px" m="auto" pt="20px" px="20px">
        <Heading textAlign="center">Machine Learning Tools</Heading>
        <Text textAlign="center" maxW="800px" opacity="0.8">
          These user-friendly interfaces allow modern computational tools to be
          used in the browser
        </Text>
        <Spacer minH="40px" />
        <SimpleGrid minChildWidth="270px" spacing="40px" w="100%">
          {machineLearningTools.map((tool, index) => {
            return <MLToolsListItem tool={tool} key={index} />;
          })}
          <SuggestToolButton />
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default MLToolsSection;
