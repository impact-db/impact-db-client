import { Spacer, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const SummaryText = ({ onScreenPapers, displayPapers, loading }) => {
  const params = useParams();
  const species = params?.species;

  return (
    <>
      {loading ? (
        <Spacer minH="21px" />
      ) : (
        <Text px="15px" fontSize="sm" opacity="0.8" w="100%">
          Showing {onScreenPapers.length} of {displayPapers.length}{" "}
          {species.charAt(0).toUpperCase() + species.slice(1)} paper
          {displayPapers.length === 1 ? "" : "s"}
        </Text>
      )}
    </>
  );
};

export default SummaryText;
