import {
  Box,
  Button,
  Heading,
  HStack,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import JsonRepresentation from "./JsonRepresentation";
import result from "./exampleResult.json";
import StrainListItem from "../../paperPage/StrainListItem/StrainListItem";
import { Link } from "react-router-dom";

const FermentationResultFormat = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <VStack py="40px">
      <Heading w="100%" maxW="1000px" m="auto" textAlign="center">
        Fermentation Result Format
      </Heading>
      <Text textAlign="center" opacity="0.8">
        The fermentation instance pairs bioprocess conditions and strain
        genetics with fermentation results
      </Text>
      <Spacer minH="40px" />

      <Tabs variant="soft-rounded" colorScheme="green" w="100%" align="center">
        <TabList>
          <HStack
            px="14px"
            py="10px"
            spacing="30px"
            borderRadius="40px"
            background={useColorModeValue("gray.100", "gray.700")}
          >
            <Tab color="currentColor">ImpactDB Interface</Tab>
            <Tab color="currentColor">JSON Structure</Tab>
          </HStack>
        </TabList>
        <Spacer minH="40px" />
        <TabPanels>
          <TabPanel maxW="100vw" overflow="scroll">
            {/* <Box  overflow="scroll"> */}
            <Box maxW="100vw" w="100%" overflow="scroll">
              <StrainListItem
                strain={result}
                dataType="titer"
                onHomePage={true}
                isLargerThan700={isLargerThan700}
              />
            </Box>
            {/* </Box> */}
            <Text fontSize="16px" opacity="0.9">
              This fermentation result was published by{" "}
              <Link to="/paper/yarrowia/enhanced-protopanaxadiol-production-from-xylose-by-engineered-yarrowia-lipolytica">
                <Button variant="link" fontSize="14px">
                  (Wu 2019)
                </Button>
              </Link>
            </Text>
          </TabPanel>
          <TabPanel>
            <JsonRepresentation />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default FermentationResultFormat;
