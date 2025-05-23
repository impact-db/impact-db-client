import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import WelcomeSectionButton from "./WelcomeSectionButton";
import ReportIssueButton from "./ReportIssueButton";
import ReportButtonContainer from "./ReportIssueButtonContainer";

const TitleText = ({ isLargerThan800 }) => {
  const [isLargerThan550] = useMediaQuery("(min-width: 550px)");
  return (
    <Stack
      w="100%"
      h={isLargerThan800 ? "max(calc(100vh - 80px), 450px)" : "500px"}
      px="20px"
      align="center"
      spacing="25px"
    >
      {/* top box text  */}
      <Heading
        fontSize={isLargerThan800 ? "50px" : "30px"}
        textAlign="center"
        pt={isLargerThan800 ? "23vh" : "50px"}
      >
        Where Synthetic Biologists Collaborate
      </Heading>
      <Box h="3px" w="50px" bg="green.100" textAlign="center" />
      <Text fontSize={isLargerThan800 ? "22px" : "18px"} textAlign="center">
        The <u>I</u>ndustrial <u>M</u>icrobiology <u>P</u>ublication and{" "}
        <u>A</u>I <u>C</u>rowd-sourced <u>T</u>oolbox
      </Text>
      <Stack direction={isLargerThan550 ? "row" : "column"} spacing="10px">
        {/* <a href="/#database"> */}
        <WelcomeSectionButton linkPath="/#database">
          <Button
            size="lg"
            w="175px"
            fontSize="16px"
            bg="green.100"
            color="gray.800"
          >
            Explore Database
          </Button>
        </WelcomeSectionButton>
        <WelcomeSectionButton linkPath="/#machine-learning">
          <Button size="lg" w="175px" fontSize="16px">
            Explore ML Tools
          </Button>
        </WelcomeSectionButton>

        <ReportButtonContainer>
          <ReportIssueButton paper={"General"} />{" "}
        </ReportButtonContainer>
        {/* </a> */}
      </Stack>
    </Stack>
  );
};

export default TitleText;
