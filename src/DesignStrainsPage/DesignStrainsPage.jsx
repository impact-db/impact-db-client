import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import AbstractFluxMap from "../Assets/AbstractFluxMap";
import NavBar from "../NavBar/NavBar";

const DesignStrainsPage = () => {
  return (
    <>
      <NavBar />
      <Heading fontSize="30px" textAlign="center" pt="10vh" pb="20px">
        Strain Design Tool
      </Heading>
      <Box
        h="3px"
        mt="30px"
        w="50px"
        bg="green.100"
        textAlign="center"
        margin="auto"
      />
      <Alert maxW="500px" m="auto" mt="30px">
        <AlertIcon />
        <AlertTitle>This feature is not implemented yet.</AlertTitle>
      </Alert>
      <Flex mt="75px" justify="center">
        <AbstractFluxMap />
      </Flex>
    </>
  );
};

export default DesignStrainsPage;
