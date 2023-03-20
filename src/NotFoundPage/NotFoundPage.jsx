import { Box, Button, Heading, Stack, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ReactionNetwork from "../HomePage/WelcomeSection/ReactionNetwork";
import NavBar from "../NavBar/NavBar";

const NotFoundPage = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <ReactionNetwork />

      <NavBar />

      {/* top box */}
      <Stack
        w="100vw"
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
          404: Page Not Found
        </Heading>
        <Box h="3px" w="50px" bg="green.100" textAlign="center" />
        <Stack direction="row" spacing="10px">
          <HashLink to="/#database">
            <Button size="lg" fontSize="16px" bg="green.100" color="gray.800">
              Explore Database
            </Button>
          </HashLink>
          <HashLink to="/#machine-learning">
            <Button size="lg" fontSize="16px">
              Explore ML Tools
            </Button>
          </HashLink>
        </Stack>
      </Stack>
    </>
  );
};

export default NotFoundPage;
