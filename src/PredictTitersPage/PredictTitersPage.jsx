import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import AbstractFluxMap from "../Assets/AbstractFluxMap";
import NavBar from "../NavBar/NavBar";
import PredictTitersForm from "./PredictTitersForm";

const PredictTitersPage = () => {
  return (
    <>
      <NavBar />
      <Heading fontSize="30px" textAlign="center" pt="10vh" pb="20px">
        Titer Prediction Tool
      </Heading>
      <Box
        h="3px"
        mt="30px"
        w="50px"
        bg="green.100"
        textAlign="center"
        margin="auto"
      />
      <Alert maxW="500px" m="auto" mt="30px" status="warning">
        <AlertIcon />
        <AlertTitle>This feature is under development</AlertTitle>
      </Alert>
      <PredictTitersForm />
      <Flex mt="75px" justify="center">
        <AbstractFluxMap />
      </Flex>
      <Spacer minH="100px" />
    </>
  );
};

export default PredictTitersPage;
