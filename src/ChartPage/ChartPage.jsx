import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ReportIssueButton from "../PaperPage/ReportIssueButton";
import DailyStatsChart from "./DailyStatsChart";

const ChartPage = () => {
  return (
    <>
      <NavBar />
      {/* outer container */}
      <Box maxW="1500px" px="20px" mt="25px" mx="auto">
        <Spacer h="10px" />
        {/* inner container */}
        <Box maxW="900px">
          <HStack justify="space-between" mb="20px">
            <Link to="/">
              <HStack spacing="4px">
                <ArrowBackIcon opacity="0.8" />
                <Text fontSize="14px" opacity="0.8">
                  Home page
                </Text>
              </HStack>
            </Link>
            <ReportIssueButton />
          </HStack>

          <Heading fontSize="28px" pt="20px" pb="5px" textAlign="center">
            Database Growth Chart
          </Heading>
          <HStack pb="20px" justify="center">
            <Box h="14px" w="14px" bg="green.400" />
            <Text># of Papers</Text>
            <Spacer maxW="20px" />
            <Box h="14px" w="14px" bg="blue.400" />
            <Text># of Results</Text>
          </HStack>
          <DailyStatsChart />
          <Spacer minH="200px" />
        </Box>
      </Box>
    </>
  );
};

export default ChartPage;
