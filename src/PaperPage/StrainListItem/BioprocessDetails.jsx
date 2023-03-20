import { Heading, Text, VStack } from "@chakra-ui/react";
import { capitalize } from "../../Helpers/stringHelpers";

const BioprocessDetails = ({ strain }) => {
  return (
    <VStack w="100%" align="flex-start">
      <Text
        fontSize="16px"
        textDecoration="underline"
        w="100%"
        textAlign="start"
      >
        Bioprocess conditions
      </Text>
      <Heading fontSize="15px" w="100%" textAlign="start">
        Culture volume:{" "}
        {strain.volume > 1
          ? `${strain.volume} L`
          : `${strain.volume * 1000} mL`}
      </Heading>
      <Heading fontSize="15px" w="100%" textAlign="start">
        Vessel: {strain.vessel}
      </Heading>
      <Heading fontSize="15px" w="100%" textAlign="start">
        {strain.substrate2 ? "Substrate 1: " : "Substrate: "}
        {strain.substrateConc1} g/L {strain.substrate1}
      </Heading>
      {strain.substrate2 ? (
        <Heading fontSize="15px" w="100%" textAlign="start">
          Substrate 2: {strain.substrateConc2} g/L {strain.substrate2}
        </Heading>
      ) : (
        <></>
      )}
      <Heading fontSize="15px" w="100%" textAlign="start">
        Media: {strain.media ? strain.media : "No data"}
      </Heading>
      <Heading fontSize="15px" w="100%" textAlign="start">
        Time: {strain.time} hours{" "}
      </Heading>
      <Heading fontSize="15px" w="100%" textAlign="start">
        Oxygen level: {capitalize(strain.oxygenLevel)}
      </Heading>
      <Heading fontSize="15px" w="100%" textAlign="start">
        Nitrogen level: {capitalize(strain.nitrogenLevel)}
      </Heading>
      <Heading fontSize="15px" w="100%" textAlign="start">
        pH: {strain.pH ? strain.pH : "No data"}{" "}
      </Heading>
      <Heading fontSize="15px" w="100%" textAlign="start">
        Temperature: {strain.temperature && strain.temperature + "° C"}
      </Heading>
      {/* <Heading fontSize="15px" w="100%" textAlign="start">
        Bioprocess Notes:
      </Heading> */}
      <Text fontSize="15px" w="100%" textAlign="justify" opacity="0.8">
        {strain.bioprocessNotes}
      </Text>
    </VStack>
  );
};

export default BioprocessDetails;
