import { Box, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import DailyStatsChart from "../../ChartPage/DailyStatsChart";

const ChartSection = () => {
  return (
    <VStack id="about" w="100vw" px="20px" py="40px" align="center">
      <VStack w="100%" maxW="1000px" m="auto" px="20px">
        {/* <Spacer minH="30px" /> */}
        <Heading fontSize="28px" pt="20px" pb="5px" textAlign="center">
          Database Growth
        </Heading>
        <HStack pb="20px" justify="center">
          <Box h="14px" w="14px" bg="green.400" />
          <Text># of Papers</Text>
          <Spacer maxW="20px" />
          <Box h="14px" w="14px" bg="blue.400" />
          <Text># of Results</Text>
        </HStack>
        <Box w="100%" maxW="700px">
          <DailyStatsChart />
        </Box>
      </VStack>
    </VStack>
  );
};

export default ChartSection;
